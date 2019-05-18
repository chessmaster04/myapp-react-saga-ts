import axios from 'axios';

export const baseURL = 'http://myserver';

export const headers = {
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*',
};

export default axios.create({
    baseURL,
    headers,
})