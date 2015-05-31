import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.get('store').find('shoppinglist');
	},
	
	renderTemplate: function(model, controller) {
		this.render({ outlet: 'master' });
		this.render('components.shopping-links', { outlet: 'product-links' });
		this.render('shoppinglists.new-link', { outlet: 'product-actions' });
  }
});

