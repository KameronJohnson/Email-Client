App.NewEmailController = Ember.Controller.extend({
  actions: {
    sendMessage: function() {
      var newEmail =
      this.store.createRecord('email', {
        sender: this.get('sender'),
        recipient: this.get('recipient'),
        subjectLine: this.get('subjectLine'),
        body: this.get('body')
      });
      newEmail.save();
      this.set('sender', null);
      this.set('recipient', null);
      this.set('subjectLine', null);
      this.set('body', null);
      this.transitionToRoute('emails');
    }
  }
});
