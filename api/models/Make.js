/**
 * Make.js
 *
 * @description :: TODO: You might write a short summary of how this
 *  model works and what it represents here.
 *  http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
module.exports = {
  attributes: {
    itemId: {type: 'string',unique: true},
    model: {type: 'string'},
    costPrice: {type: 'string'},
    sellingPrice: {type: 'string'},
    description: {type: 'string'}
  }
};
