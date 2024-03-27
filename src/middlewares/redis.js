// const { createClient } = require('redis');
const { createClient } = require('@redis/client');

let redisClient;

async function initializeRedisClient() {
  redisClient = createClient({
        password: process.env.REDIS_PASSWORD,
        socket: {
            host: process.env.REDIS_HOST,
            port: process.env.REDIS_PORT
        }
    });

  redisClient.on('connect', () => {
    console.log('Connected to Redis!');
  });

  redisClient.on('error', (err) => {
    console.error('Redis Connection Error:', err);
  });

  await redisClient.connect(); 
  console.log('Redis connected successfully!');
}

module.exports = initializeRedisClient;
