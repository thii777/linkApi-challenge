import axios from 'axios';

const api = axios.create({
  baseURL: `https://api.pipedrive.com/v1/deals?status=won&start=0&api_token=becace530d64fb335c9363a87af60fa9a6528524`
});

export default api;