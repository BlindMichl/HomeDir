import Ember from "ember";

export default Ember.Controller.extend({
	actions: {
			delete: function(){
				if (confirm("Do you want to delete this Product?") == true) {

					var store = this.store;
					var product = this.get('model');
					var id = product.get('id');

					store.find('product', id).then(function (product) {
						product.deleteRecord();
						product.get('isDeleted'); // => true
						product.save(); // => DELETE to /posts/1
						this.transitionToRoute('products');
					});  
				} else {
					this.transitionToRoute('products');
				}
			}
	}
});