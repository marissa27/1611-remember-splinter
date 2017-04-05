import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    editReminder() {
      this.set('isEditing', true)
    },
    submitReminder() {
      console.log("inside submit ");
      const reminder = this.getProperties('title', 'body', 'date');
      this.get('store').createRecord('reminder', reminder).save().then(() => {
        this.setProperties({title: '', body: '', date: ''});
      });
    }
  },

  isEditing: false
});



// console.log(params.id);
// this.store.findRecord('reminder', params.id).then(function(reminder) {
//   reminder.set('title', 'hi');
//   reminder.set('body', 'hi');
//   reminder.set('date', 'hi');
// });
