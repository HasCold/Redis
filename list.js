const client = require("./client.js");

async function init(){
    // await client.lpush("messages", "Hasan");
    // await client.lpush("messages", 1);
    // await client.lpush("messages", "Umer");
    // await client.lpush("messages", 2);
    // await client.lpush("messages", 5);

    // const res = await client.rpop("messages");
    const res = await client.brpop("messages", 20);
    console.log(res);
}

init();