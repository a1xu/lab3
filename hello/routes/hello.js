
/*
 * GET home page.
 */

exports.view = function(req, res){
  if( req.params.userName == undefined ){
    var nameToShow = "World";
  }
  else {
    var nameToShow = req.params.userName;
  }

  res.render('index', {
  	'name': nameToShow,
  });
};
