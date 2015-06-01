import DS from 'ember-data';

export default DS.Model.extend({
	product: DS.belongsTo('product')
	, company: DS.belongsTo('company')
	, date_add: DS.attr('date')
	, date_update: DS.attr('date')
});
