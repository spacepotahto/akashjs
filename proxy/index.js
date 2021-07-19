const https = require('https');
const axios = require('axios').default;
const proxy = require('express-http-proxy');
const express = require('express');
const cors = require('cors');

const RPC_NODES_TXT = 'https://raw.githubusercontent.com/ovrclk/net/master/mainnet/rpc-nodes.txt';
const PORT = 8888;

function getApp(rpcEndpoints) {
  const app = express();

  const whitelist = ['http://localhost:3000'];
  const corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(null, false);
      }
    }
  };
  // Enable CORS
  app.options('*', cors(corsOptions));
  app.use(cors(corsOptions));

  // RPC Proxy
  const selectRandomRPCEndpoint = () => {
    return rpcEndpoints[Math.floor(Math.random() * rpcEndpoints.length)];
  };
  app.use('/rpc', proxy(selectRandomRPCEndpoint, {
    memoizeHost: true
  }));

  // Provider Proxy
  app.post('/provider/*', express.json(), function(req, res) {
    if (!(req.body && req.body.providerUri && req.body.cert && req.body.key && req.body.type)) {
      return;
    }
    const path = req.originalUrl.replace('/provider', '');
    const uri = req.body.providerUri + path;

    const httpsAgent = new https.Agent({
      cert: req.body.cert,
      key: req.body.key,
      rejectUnauthorized: false
    });

    switch(req.body.type) {
      case 'LEASE_STATUS':
      case 'LEASE_LOGS':
      case 'LEASE_EVENTS':
        axios.get(uri, { httpsAgent }).then((response) => {
          res.send(response.data);
        });
        break;
      case 'SEND_MANIFEST':
        if (!req.body.manifest) {
          return;
        }
        axios.put(uri, req.body.manifest, { httpsAgent }).then((response) => {
          res.send(response.data);
        });
        break;
    }
  });

  return app;
}

axios.get(RPC_NODES_TXT).then((response) => {
  const endpoints = response.data.split(/\r?\n/).filter((url) => {
    return url.length > 0;
  });
  if (endpoints.length > 1) {
    const app = getApp(endpoints);
    app.listen(PORT, function() {
      console.log(`Listening on port ${PORT}`);
    });
  }
});