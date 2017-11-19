
module.exports = function(box){
  var id = box.id;
  delete box.id;

  return Box.update({id}, box)
    .then(function(boxs){
       if(boxs.length === 0){
           return Promise.reject(new Error('NotFound'));
       } else {
           return Promise.resolve(boxs[0]);
       }
    });
};