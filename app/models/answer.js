import DS from 'ember-data';

export default DS.Model.extend({
  corpse: DS.attr(),
  author: DS.attr()
  head: DS.belongsTo('question', { async: true })
});

//head: DS.belongsTo('head', { async: true })
