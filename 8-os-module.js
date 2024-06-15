//Build in modules

const os = require('os');

//Info about current user
const user = os.userInfo();
console.log(user);

//Method returns system uptime in secs
console.log(`the uptime is ${os.uptime()} seconds`)