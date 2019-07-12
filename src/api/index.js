import axios from 'axios';

const baseUrl = 'http://neteasecloudmusicapi.zhaoboy.com';

export function getMusicUrl(musicId) {
  return new Promise((resolve, reject) => {
    let url = `${baseUrl}/song/url?id=${musicId}`
    axios.get(url)
    .then(res => {
      resolve(res.data);
    })
    .catch(err => {
      console.log(err);
      reject(err);
    })
  })
}

// export function getMusicUrl(musicId) {
//     let url = `${baseUrl}/song/url?id=${musicId}`
//     return axios.get(url)
//     .then(res => {
//       console.log(res)
//       return res.data
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }