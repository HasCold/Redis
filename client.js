// ioredis is the npm package through which you can interact with your redis server

const {Redis} = require ("ioredis");

const client = new Redis();   // This will By-Default hit your redis server on the port: 6379

module.exports= client;