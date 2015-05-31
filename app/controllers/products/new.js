import Ember from "ember";

export default Ember.Controller.extend({
	actions: {
		createProduct: function() {
			var name 					= this.get('name');
			var picture 			= this.get('picture');
			var description 	= this.get('description');
			
			if(!name){return false;}
			
			var product = this.store.createRecord('product', {
				name: name
				, description: description
				, picture: picture
			});
			
			product.save;
			
			this.transitionTo('products');	
			
		}
	}
});