import DS from 'ember-data';

export default DS.Model.extend({
	pid: 									DS.attr('string')
	, name: 							DS.attr('string')
	, description: 				DS.attr('string')
	, distributor: 				DS.belongsTo('distributor', { async: true})
	, manufacturer: 			DS.belongsTo('manufacturer', { async: true})
	, picture: 						DS.attr('string')
	, barecode: 					DS.attr('string')
	, latest_price: 			DS.attr('string')
	, fav_purchase_day: 	DS.attr('string')
	, date_add: 					DS.attr('date')
	, date_update: 				DS.attr('date')
  
});







//var Product =  DS.Model.extend({
//	pid: 									DS.attr('string')
//	, name: 							DS.attr('string')
//	, description: 				DS.attr('string')
//	, distributor: 				DS.belongsTo('distributor')
//	, manufacturer: 			DS.belongsTo('manufacturer')
//	, picture: 						DS.attr('string')
//	, barecode: 					DS.attr('string')
//	, latest_price: 			DS.attr('string')
//	, fav_purchase_day: 	DS.attr('string')
//	, date_add: 					DS.attr('date')
//	, date_update: 				DS.attr('date')
//  
//});
//
//
//// probably should be mixed-in...
//// for what is this used again? 11.11.2014
//Product.reopenClass({
//  attributes: function(){
//    var model = this;
//    return Ember.keys(this.get('data')).map(function(key){
//      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
//    });
//  }.property()
//});
//
//export default Product;