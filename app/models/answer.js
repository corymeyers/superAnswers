import DS from 'ember-data';

export default DS.Model.extend({
  corpse: DS.attr(),
  author: DS.attr()
});
