import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.find('manufacturer');
	},
	renderTemplate: function(model, controller) {
		this.render();
		this.render('components.product-links', { outlet: 'product-links' });
//		this.render('manufacturers');
  }
});