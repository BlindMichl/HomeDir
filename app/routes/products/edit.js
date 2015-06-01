import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		return this.store.find('product', params.product_id);
	},
	renderTemplate: function(model, controller) {
		this.render();
		this.render('components.product-links', { outlet: 'product-links' });
//		this.render('product.new_link', { outlet: 'product-actions' }); // NOTE last template wins
		this.render('products.back', { outlet: 'product-actions' });
  }
	
});

