import DS from 'ember-data';

export default DS.Model.extend({
	shoppinglist: DS.belongsTo('shoppinglist')
	, product: DS.belongsTo('product')
	, amount: DS.attr('number')
	, price: DS.attr('number')
	, date_add: DS.attr('date')
	, date_update: DS.attr('date'),
	total: function(){
		var amount = this.get('amount');
		var price = this.get('price');
        return (amount * price);
    }.property('@each')
});

