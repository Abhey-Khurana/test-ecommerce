import { createClient } from 'redis';

const client = createClient({
    username: 'default',
    password: '2uA7f4MQaNcNtAsBr4EFUOxQffXlNMFR',
    socket: {
        host: 'redis-14773.c325.us-east-1-4.ec2.redns.redis-cloud.com',
        port: 14773
    }
});

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

await client.set('foo', 'bar');
const result = await client.get('foo');
console.log(result)

export default client;

