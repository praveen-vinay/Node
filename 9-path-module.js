const path = require('path')


const filepath = path.join('/content', 'subfolder', 'text.txt');
console.log(filepath);

const absolute = path.resolve(__dirname, 'content','subfolder','text.txt');
console.log(absolute);