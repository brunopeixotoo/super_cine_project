
import axios, { type AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTA4NTMwYmFhZmVhOWMzOTRlM2RhNWNkZDg2NWEyZSIsIm5iZiI6MTcxMjE3NDMwNS40MzgwMDAyLCJzdWIiOiI2NjBkYjRlMTZkYzUwNzAxN2U1NmFmY2YiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.zkXaFUG9p2PevNEbdraK-lO8n1vSBy7kmBrYAiX8nV8',
        accept: 'application/json',
    },
    params: {
        language: 'pt-BR'
    },
});

export default api;

