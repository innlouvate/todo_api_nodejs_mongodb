var _ =require('lodash');
var List = require('../models/list_model.js');

module.exports = function(app) {

  // create
  app.post('/list', function(req, res) {
    var newList = new List(req.body);
    newList.save(function(err) {
      if(err) {
        res.json({info: 'error during create', error: err});
      };
      res.json( {info: 'added to the list'});
    });
  });

  // read
  app.get('/list', function(req,res) {
    List.find(function(err, items) {
      if(err) {
        res.json({info: 'error while finding', error: err});
      };
      res.json( {info: 'list found', data: items});
    });
  });

  app.get('/list/:item', function(req,res) {
    List.findById(req.params.item, function(err, item) {
      if(err) {
        res.json({info: 'error while finding', error: err});
      };
      if(item) {
        res.json( {info: 'item found', data: item});
      } else {
        res.json( {info: 'item not found'});
      }
    });
  });

  // update
  app.put('/list/:item', function(req, res) {
    List.findById(req.params.item, function(err, item) {
      if(err) {
        res.json({info: 'error while finding', error: err});
      };
      if(item) {
        _.merge(item, req.body);
        item.save(function(err) {
          if(err) {
            res.json({info: 'error during update', error: err});
          };
          res.json( {info: 'updated successfully'});
        });
      } else {
        res.json( {info: 'item not found'});
      }
    });
  });

  // delete
  app.delete('/list/:item', function(req,res) {
    List.findByIdAndRemove(req.params.item, function(err) {
      if(err) {
        res.json({info: 'error during removal', error: err});
      };
      res.json( {info: 'item removed'});
    });
  });


}
