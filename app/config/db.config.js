require('dotenv').config({path:__dirname + '/../.env'});

const database = process.env.DB_DATABASE;
const port = process.env.DB_PORT;
const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
const host = process.env.DB_HOST;
const dburl = 'mongodb://'+user+':'+pass+'@'+host+':'+port+'/'+database;

module.exports = {
  //url: "mongodb://ismail:sysop@167.99.138.209:37017/stockmanager"
  url: dburl
};
