/*
*
*  Created By Nego
* 
*/


// Notes : Im Using "request" module ! 

let redirect_url = "https://github.com/kardespro"
const cfg = require("./proxy.json");
const request = require('request');

cfg.forEach(x => {
request({
  'url':redirect_url,
  'method': "GET",
  'proxy': x.ips
},function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
if(error){
console.log(`Error occurded ! `);
}
})
});


console.log("APP STATRED ! AUTHOR : NEGO ");
