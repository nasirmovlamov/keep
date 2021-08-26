import axios from 'axios'

export default axios.create({
  baseURL:'https://api.abysshub.com/',
  headers: {
    'content-type': 'application/json',
  },
})