import DS from 'ember-data';

export default DS.Model.extend({
	product: DS.belongsTo('product', { async: true})
	, company: DS.belongsTo('company', { async: true})
	, date_add: DS.attr('date')
	, date_update: DS.attr('date')
});
