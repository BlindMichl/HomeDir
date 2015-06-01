import Ember from 'ember';

export default Ember.Route.extend({
	
	renderTemplate: function(model, controller) {
		this.render({ outlet: 'master' });
    this.render('components.shopping-links', { outlet: 'product-links' });
		this.render('shops.back', { outlet: 'product-actions' });
  },
	
	actions: {
		save: function() {
			this.modelFor('shop').save();
		}
	}
	
});

