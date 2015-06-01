import Ember from "ember";

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('company', params.product_id);
  },
  
	renderTemplate: function() {
		this.render();
		this.render('components.product-links', { outlet: 'product-links' });
		this.render('companies.back', { outlet: 'product-actions' });
  }
});