var colors = require('colors/safe');
var _ = require('lodash');

module.exports = function(prefix, color){
  var defaultOptions;

  function getOptions(prefix, color, noDefaults){
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
    trace: function(message, customOptions){
      var customOptions = customOptions || {};
      var options = _.merge({}, defaultOptions, 
        getOptions(customOptions.prefix, customOptions.color, true));

      console.trace(options.messageReformat(options.fullPrefix + message));
    },
    log: function(message, customOptions){
      var customOptions = customOptions || {};
      var options = _.merge({}, defaultOptions, 
        getOptions(customOptions.prefix, customOptions.color, true));
      
      console.log(options.messageReformat(options.fullPrefix + message));
    },
    warn: function(message, customOptions){
      var customOptions = customOptions || {};
      var options = _.merge({}, defaultOptions, 
        getOptions(customOptions.prefix, customOptions.color, true));

      console.warn(options.messageReformat(options.fullPrefix + message));
    }
  };
};