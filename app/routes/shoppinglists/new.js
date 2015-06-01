import Ember from 'ember';

export default Ember.Route.extend({
	
	renderTemplate: function(model, controller) {
		this.render();
    this.render('components.shopping-links', { outlet: 'product-links' });
		this.render('shoppinglists.back', { outlet: 'product-actions' });
  },
	
	actions: {
		save: function() {
			this.modelFor('shoppinglist').save();
		}
	}
	
});

