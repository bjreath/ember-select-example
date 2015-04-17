import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      var _people = [{id: 1, name: 'Brian'}, {id: 2, name: 'Derek'}];
      resolve({ people: _people});
    });
  }
});
