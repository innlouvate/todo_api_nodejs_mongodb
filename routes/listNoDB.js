var _ =require('lodash');

module.exports = function(app) {
  _list = [];

  // create
  app.post('/list', function(req, res) {
    _list.push(req.body);
    res.json( {info: 'added to the list'});
  });

  // read
  app.get('/list', function(req,res) {
    res.send(_list);
  });

  app.get('/list/:item', function(req,res) {
    res.send(_.find(_list, {
      id: req.params.item
    }));
  });

  // update
  app.put('/list/:item', function(req, res) {
    var index = _.findIndex(_list, {
      id: req.params.item
    });
    _.merge(_list[index], req.body);
    res.json( {info: 'list updated'});
  });

  // delete
  app.delete('/list/:item', function(req,res) {
    _.remove(_list, function(task) {
      return task.id === req.params.item
    });
    res.json( {info: 'item removed'});
  });


}
