import Ember from 'ember';

export default Ember.Route.extend({
	
	model: function() {
		return this.store.find('company');
	},
	
	renderTemplate: function() {
		this.render();
		this.render('components.product-links', { outlet: 'product-links' });
		this.render('companies.new-link', { outlet: 'product-actions' });
  }
	
});