import Ember from 'ember';

export default Ember.Route.extend({
	
	model: function() {
		return this.store.find('product');
	},
	
	renderTemplate: function() {
		this.render();
		this.render('components.product-links', { outlet: 'product-links' });
		this.render('products.new-link', { outlet: 'product-actions' });
  }
	
});