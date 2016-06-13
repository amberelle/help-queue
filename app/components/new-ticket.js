import Ember from 'ember';

export default Ember.Component.extend({
  addNewTicket: false,
  actions: {
    ticketFormShow(){
      this.set('addNewTicket', true);
    },

    save1Ticket() {
      var userInput = {
        user: this.get('user') === undefined ? "undefined" : this.get('user'),
        location: this.get('location'),
        time: this.get('time') === undefined ? "undefined" : this.get('time'),
        description: this.get('description') === undefined ? "undefined" : this.get('description')
      };
      this.set('addNewTicket', false);
      this.sendAction('save2Ticket', userInput);
    }
  }
});
