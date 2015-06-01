import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.find('distributor');
	},
	renderTemplate: function(model, controller) {
		this.render();
		this.render('components.product-links', { outlet: 'product-links' });
//		this.render('distributors');
  }
});