https://blog.messagebird.com/easy-sms-integration-with-node-js-686b62b739d3
var messagebird = require('messagebird')('KPqpABNWnQMG54YcYgfCBl82r'); //DEV
//var messagebird = require('messagebird')('Yl9bbKZWWwC64ZVxpKJ11pAkb'); //LIVE +14704279939
//https://dashboard.messagebird.com/en/settings/sms

var params = {
  'originator': 'messageBird',
  'recipients': [
    '+639471198454'
  ],
  'body': 'This is a beautiful text message from NodeJS.'
};

// var params = {
  // 'originator': '+14704279939',
  // 'recipients': [
    // '+639271653579'
  // ],
  // 'body': 'Hi ma dad, take care. Love you, JP.'
// };

// var params = {
  // 'originator': '+14704279939',
  // 'recipients': [
    // '+639359629514'
  // ],
  // 'body': 'This is a showoff text message from NodeJS.haha JP'
// };

messagebird.balance.read(function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});

messagebird.messages.create(params, function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});

module.exports=messagebird;