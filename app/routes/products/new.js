import Ember from 'ember';

export default Ember.Route.extend({
	
	renderTemplate: function(model, controller) {
		this.render();
    this.render('components.product-links', { outlet: 'product-links' });
		this.render('products.back', { outlet: 'product-actions' });
  }
	
//	actions: {
//		save: function() {
//			this.modelFor('product').save();
//		}
//	}
	
});