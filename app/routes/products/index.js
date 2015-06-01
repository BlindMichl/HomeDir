import Ember from 'ember';

export default Ember.Route.extend({
	
	model: function() {
		return this.store.find('product');
//    return this.get('store').find('product');
	},
	
//	renderTemplate: function(model, controller) {
//		this.render();
//		this.render('components.product-links', { outlet: 'product-links' });
//		this.render('products.new-link', { outlet: 'product-actions' });
//  }
	
});