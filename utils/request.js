import axios from 'axios';

export function sleep(ms = 1000, payload) {
  return new Promise((resolve) => setTimeout(() => resolve(payload), ms));
}

const token = `2d91949aa4a4d20c68d98b03e0f7a54b473a9730e009cb02fce03dce38b83814df46221a06336c1bc330c05eae2288b31386a3b002a3d5face04f79a309aef96097d7dd20adb7eeb49974907f3d02ef425e43327ae7d046d5e470bb80882bf34cf55d3f94663ac0d0069dd006520d0960c5fba5a36361a44f8390ec9d591d7f3`;

axios.defaults.baseURL = 'http://localhost:1337/api'
axios.defaults.headers.common = {'Authorization': `bearer ${token}`}

// axios.interceptors.response.use(async (response) => {
//   return await sleep(4000, response);
// });
export default axios;