import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("option");
  this.route('login');

	this.route("inventory");
	
  this.route("users", function() {
      this.route('user', { path: 'users/:user_name' });	
      this.route("edit");
      this.route("new");
    });

  this.route("products", function() {
      this.route("product", { path: '/:product_id' });	
      this.route("edit");
      this.route("new");
    });

  this.route("companies", function() {
      this.route("company");	
      this.route("edit");
      this.route("new");
    });

  this.route("manufacturers", function() {
      this.route("manufacturer");	
      this.route("edit");
      this.route("new");
    });

  this.route("distributors", function() {
      this.route("distributor");	
      this.route("edit");
      this.route("new");
    });

  this.route("shoppinglists", function() {
      this.route("shoppinglist", { path: '/:shoppinglist_id' });	
      this.route("edit");
      this.route("new");
    });

  this.route("shops", function() {
      this.route("shop", { path: '/:shop_id' });	
      this.route("edit");
      this.route("new");
    });

  this.route("recipes", function() {
      this.route("recipe");	
      this.route("edit");
      this.route("new");
    });

  this.route("companies", function() {
      this.route("company");	
      this.route("edit");
      this.route("new");
    });

  this.route("tags", function() {
      this.route("tag");	
      this.route("edit");
      this.route("new");
    });

});

export default Router;