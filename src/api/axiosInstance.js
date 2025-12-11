import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com', // Your API base URL
    headers: {
        'Content-Type': 'application/json',
        // You can add common headers here, e.g., an Authorization token
        // 'Authorization': 'Bearer YOUR_AUTH_TOKEN'
    }
});

export default axiosInstance;
