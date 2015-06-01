import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		return this.store.find('company', params.company_id);
	},
	renderTemplate: function(model, controller) {
		this.render();
		this.render('components.product-links', { outlet: 'product-links' });
		this.render('companies.back', { outlet: 'product-actions' });
  }
	
});