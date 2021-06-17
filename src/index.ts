import Akash from "./akash/Akash"

const deploymentList = async () => {
  const akash = await Akash.connect("http://rpc.akash.forbole.com:80");
  // return akash.query.deployment.list.params({ owner: 'akash1282y3l0evjgprpx4mfzwt42dn3lkvmu8m6dgvg' });
  return akash.query.provider.get.params({ owner: 'akash1rt2qk45a75tjxzathkuuz6sq90jthekehnz45z' });
}

deploymentList().then((result) => {
  console.log(result);
});