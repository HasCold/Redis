const client = require("./client.js");

async function init(){
    // await client.msetnx("msg:4", "Hasan From Node.js", "user:4", "This is testing");   // Multiple values can be set by checking the unique keys in the database; 
    
    // Expire the redis key:value pair means after the given time 20 seconds this will delete from the redis database    
    // await client.expire("user:4", 20);  
    // await client.expire("msg:4", 20);  

    const res = await client.mget("msg:4","user:4");
    console.log(res);
}

init();