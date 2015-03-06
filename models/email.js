App.Email = DS.Model.extend({
  sender: DS.attr(),
  recipient: DS.attr(),
  subjectLine: DS.attr(),
  body: DS.attr()
});
