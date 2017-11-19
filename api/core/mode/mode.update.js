var Promise = require('bluebird');

module.exports = function(mode) {
  var id = mode.id;
  delete mode.id;
  
  return Mode.update({id}, mode)
    .then(function(modes){
       if(modes.length === 0){
           return Promise.reject(new Error('NotFound'));
       } else {
           return Promise.resolve(modes[0]);
       }
    });
};