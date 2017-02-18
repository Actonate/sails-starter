/**
 * MakeController
 *
 * @description :: Server-side logic for managing makes
 * See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
/* globals Make */
/* globals Logger */
var logger = Logger.child({controller: 'MakeController'});
module.exports = {
  /**
   * to add make (making company name)
   *
   * @public
   *
   * @memberof   MakeController.js
   *
   * @author     manoj
   *
   * @param      {object}  req     The req
   * @param      {object}  res     The res
   */
  add: function add(req, res) {
    var log = logger.child({action: 'add'});
    var make = {};
    make.itemId = req.body.itemId;
    make.model  = req.body.model;
    make.costPrice  = req.body.costPrice;
    make.sellingPrice = req.body.sellingPrice;
    Make.create(make).then(function(result) {
      log.info('New Make created successfully');
      res.send({code: 'SUCCESS', result: result});
    }).catch(function(error) {
      log.error('error at make create(insert) time', error);
      res.send({error: error});
    });
  },
  /**
   * to get make details
   *
   * @public
   *
   * @memberof   MakeController.js
   *
   * @author     manoj
   *
   * @param      {object}  req     The req
   * @param      {object}  res     The res
   */

  get: function get(req, res) {
    var log = logger.child({action: 'get'});
    Make.find({$text: {$search: 200}})
            .then(function(result) {
              log.info('result get');
              res.send({code: 'SUCCESS', result: result});
            }).catch(function(error) {
              log.error('error in searching doc', error);
              res.send({error: error});
            });
  }
};
