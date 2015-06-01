import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string')
  , description: DS.attr('string')
  , picture: DS.attr('string')
	, date_add: DS.attr('date')
	, date_update: DS.attr('date')
});
