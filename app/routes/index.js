import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('ticket');
  },
  actions: {
    save3Ticket(userInput) {
      var newTicket = this.store.createRecord('ticket', userInput);
      newTicket.save();
      this.transitionTo('index');
    }
  }
});
