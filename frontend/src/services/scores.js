import axios from 'axios'
const baseUrl = '/api/scores'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data);
}

const all = { getAll, create }

export default all