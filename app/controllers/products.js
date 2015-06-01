import Ember from "ember";

export default Ember.Controller.extend({
	productsCount: function() {
		return this.get('model.length');
	}.property('@each')
});