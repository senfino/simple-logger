var colors = require('colors/safe');
var _ = require('lodash');

module.exports = function(prefix, color, noDefaults){
  var defaultOptions;

  function getOptions(prefix, color){
    var fullPrefix;
    var messageReformat;

    if(typeof prefix === 'undefined'){

      if(noDefaults === true){
        fullPrefix = undefined;
      }else{
        fullPrefix = '';
      }
    }else{
      fullPrefix = prefix + ': ';
    }

    if(typeof color === 'undefined'){

      if(noDefaults === true){
        messageReformat = undefined;
      }else{
        messageReformat = function(message){
          return message;
        };
      }
    }else{
      messageReformat = function(message){
        return colors[color](message);
      };
    }

    return {
      fullPrefix: fullPrefix,
      messageReformat: messageReformat
    };
  }

  defaultOptions = getOptions(prefix, color);

  return {
    trace: function(message, options){
      var options = _.merge({}, defaultOptions, getOptions(options.prefix, options.color, true));

      console.trace(options.messageReformat(options.fullPrefix + message));
    },
    log: function(message, options){
      var options = _.merge({}, defaultOptions, getOptions(options.prefix, options.color, true));
      
      console.log(options.messageReformat(fullPrefix + message));
    },
    warn: function(message, options){
      var options = _.merge({}, defaultOptions, getOptions(options.prefix, options.color, true));

      console.warn(options.messageReformat(fullPrefix + message));
    }
  };
};