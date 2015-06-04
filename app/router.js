import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("option");
  this.route('login');

	this.route("inventory");
	
  this.route("users");
  this.route('users.user', { path: 'users/:user_name' });	
  this.route("users.edit", { path: 'users/:user_name/edit' });	
  this.route("users.new", { path: 'users/new' });	

//  this.resource("products", function() {
//      this.route("product", { path: '/:product_id' });	
//      this.route("edit", { path: '/:product_id/edit' });
//      this.route("new");
//    });

	this.route('products');
	this.route('products.product', { path: 'products/:product_id' });
	this.route('products.edit', { path: 'products/:product_id/edit' });
	this.route('products.new', { path: 'products/new' });
  
  this.route("companies");
  this.route("companies.company", { path: 'companies/:company_id' });	
  this.route("companies.edit", { path: 'companies/:company_id/edit' });	
  this.route("companies.new", { path: 'companies/new' });

  this.route("manufacturers");
  this.route("manufacturers.manufacturer", { path: 'manufacturers/:manufacturer_id' });
  this.route("manufacturers.edit", { path: 'manufacturers/:manufacturer_id/edit' });
  this.route("manufacturers.new", { path: 'manufacturers/new' });

  this.route("distributors");
  this.route("distributors.distributor", { path: 'distributors/:distributor_id' });
  this.route("distributors.edit", { path: 'distributors/:distributor_id/edit' });
  this.route("distributors.new", { path: 'distributors/new' });

  this.route("shoppinglists");
  this.route("shoppinglists.shoppinglist", { path: 'shoppinglists/:shoppinglist_id' });	
  this.route("shoppinglists.edit", { path: 'shoppinglists/:shoppinglist_id/edit' });
  this.route("shoppinglists.new", { path: 'shoppinglists/new' });	

  this.route("shops");
  this.route("shops.shop", { path: 'shops/:shop_id' });
  this.route("shops.edit", { path: 'shops/:shop_id/edit' });
  this.route("shops.new", { path: 'shops/new' });

  this.route("recipes");
  this.route("recipes.recipe", { path: 'recipes/:recipe_id' });
  this.route("recipes.edit", { path: 'recipes/:recipe_id/edit' });
  this.route("recipes.new", { path: 'recipes/new' });

  this.route("tags", function() {
      this.route("tag");	
      this.route("edit");
      this.route("new");
    });

});

export default Router;