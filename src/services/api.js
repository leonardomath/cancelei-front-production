import axios from 'axios'

const api = axios.create({
    baseURL: 'http://api-cancelei-com-br.umbler.net',
})

export default api