import DS from 'ember-data';

export default DS.Model.extend({
  head: DS.attr(),
  author: DS.attr(),
  notes: DS.attr(),
  corpses: DS.hasMany('answer', { async: true })
});


//https://www.learnhowtoprogram.com/javascript/ember-js/model-relationships
