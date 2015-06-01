import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.get('store').find('company');
	},
	
	renderTemplate: function(model, controller) {
		this.render({ outlet: 'master' });
		this.render('components.product-links', { outlet: 'product-links' });
		this.render('companies.new-link', { outlet: 'product-actions' });
  }
});