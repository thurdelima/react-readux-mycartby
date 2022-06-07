import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://localhost:3000',
  baseURL: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5bbd6fdd-abae-411d-96cc-1a5d76d3803b/abaixo-10-reais.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220606T215742Z&X-Amz-Expires=86400&X-Amz-Signature=641eb90361114cd1794f3ad5867d351ab79a004c8cb9a2c6928ad443b579d5c9&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22abaixo-10-reais.json%22&x-id=GetObject',
});

export default api;
