var redis = require("redis");
var client = redis.createClient();

//Single value write and read
client.set('my_key', "hello World!")
client.get('my_key', function(err, reply) {
    console.log(reply);
})

client.mset('header', 1,'left', 0,'article', 5,'right', 0,'footer', 0)
client.mget(['header', 'left', 'article', 'right', 'footer'], 
    function(err, value){
        console.log(value);
});

client.quit()