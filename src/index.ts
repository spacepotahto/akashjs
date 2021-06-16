import Akash from "./akash/Akash"

const deploymentList = async () => {
  const akash = await Akash.connect("http://rpc.akash.forbole.com:80");
  return akash.query.deployment.list.params({ owner: 'akash1282y3l0evjgprpx4mfzwt42dn3lkvmu8m6dgvg' });
}

deploymentList().then((result) => {
  console.log(result);
  console.log("COOL");
});