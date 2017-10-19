import axios from 'axios'
let baseUrl = 'http://v3.wufazhuce.com:8000'
const instance = axios.create({
  baseURL: baseUrl,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

export const getList = (year, month, day) => { instance.get(`${baseUrl}/api/hp/bymonth/` + year + `-` + month + `-` + day + `%2000:00:00?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=ios`).then(res => res.data) }
