import Ember from 'ember';

export default Ember.Route.extend({
//	model: function() {
//    return this.store.find('shoppinglist');
//	},
	
	renderTemplate: function(model, controller) {
		this.render();
		this.render('components.shopping-links', { outlet: 'product-links' });
		this.render('shoppinglists.new-link', { outlet: 'product-actions' });
  }
});