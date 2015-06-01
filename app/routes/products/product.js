import Ember from "ember";

export default Ember.Route.extend({
	model: function(params) {
		return this.get('store').find('product', params.product_id);
	},
	
	renderTemplate: function(model, controller) {
		this.render('products.product', { outlet: 'master' });
		this.render('components.product-links', { outlet: 'product-links' });
		this.render('products.back', { outlet: 'product-actions' });
  }
});

