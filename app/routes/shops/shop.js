import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		return this.get('store').find('shop', params.shop_id);
	},
	
	renderTemplate: function(model, controller) {
		this.render({ outlet: 'master' });
		this.render('components.shopping-links', { outlet: 'product-links' });
		this.render('shops.back', { outlet: 'product-actions' });
  }
});

