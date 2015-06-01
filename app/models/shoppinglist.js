import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string') //needed?
	, shop: DS.belongsTo('shop')
	, date: DS.attr('date')
	, date_add: DS.attr('date')
	, date_update: DS.attr('date')
});