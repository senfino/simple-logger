module.exports = function(prefix){

  return {
    trace: function(message){
      console.trace(prefix + ': ' + message);
    },
    log: function(message){
      console.log(prefix + ': ' + message);
    }
  };
};