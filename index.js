var colors = require('colors/safe');

module.exports = function(prefix, color){
  var fullPrefix;
  var messageReformat;

  if(typeof prefix === 'undefined'){
    fullPrefix = '';
  }else{
    fullPrefix = prefix + ': ';
  }

  if(typeof color === 'undefined'){
    messageReformat = function(message){
      return message;
    };
  }else{
    messageReformat = function(message){
      return colors[color](message);
    };
  }

  return {
    trace: function(message){
      console.trace(messageReformat(fullPrefix + message));
    },
    log: function(message){
      console.log(messageReformat(fullPrefix + message));
    }
  };
};