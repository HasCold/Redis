const express = require ("express");
const client = require ("./client");

const app = express();

app.get("/", async (req, res) => {
    // Check in the Redis Cache Value

    const cacheValue = await client.get("todos");
    if(cacheValue) return res.json(JSON.parse(cacheValue));

    const response = await fetch("https://jsonplaceholder.typicode.com/comments", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const data = await response.json(); 

    await client.set("todos", JSON.stringify(data));
    await client.expire("todos", 60);   // expire or delete the cache value within 60 seconds from the redis 

    return res.json(data); 
});

app.listen(5000);