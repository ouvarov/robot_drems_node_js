const redis = require("redis");

const client = redis.createClient({
    url: process.env.REDIS_URL || "redis://redis:6379",
});

async function connectToRedis() {
    try {
        await client.connect();
        console.log("Connected to the Redis server");
    } catch (err) {
        console.error("Redis connection error:", err);
    }
}

async function setWithExpiration(key, value, expirationInSeconds) {
    try {
        await client.set(key, value, "EX", expirationInSeconds);
        console.log(`Key "${key}" set with expiration of ${expirationInSeconds} seconds`);
    } catch (err) {
        console.error(`Error setting key "${key}" with expiration:`, err);
    }
}

async function getValue(key) {
    try {
        const value = await client.get(key);
        if (value) {
            console.log(`Value for key "${key}":`, value);
        } else {
            console.log(`Key "${key}" does not exist or has expired`);
        }
        return value;
    } catch (err) {
        console.error(`Error getting value for key "${key}":`, err);
    }
}

async function deleteKey(key) {
    try {
        await client.del(key);
        console.log(`Key "${key}" deleted`);
    } catch (err) {
        console.error(`Error deleting key "${key}":`, err);
    }
}

connectToRedis();

module.exports = {
    client,
    setWithExpiration,
    getValue,
    deleteKey,
};
