import Ember from "ember";

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('product', params.product_id);
  },
	
  afterModel: function(model, transition){
    return Ember.RSVP.all(model.get('distributor'));
  },
  
	renderTemplate: function() {
		this.render();
		this.render('components.product-links', { outlet: 'product-links' });
		this.render('products.back', { outlet: 'product-actions' });
  }
});