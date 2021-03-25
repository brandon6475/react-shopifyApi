import Client from 'shopify-buy/index.unoptimized.umd';

const client = Client.buildClient({
    domain: 'tractor-1.myshopify.com',
    storefrontAccessToken: '135ad9a6211ec9905089f98113e330ee'
});

export default client;