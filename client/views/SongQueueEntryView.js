// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  template: _.template('<div><span><%- artist %></span><span><%- title %></span></div>'),

  initialize: function() {
    this.on('enqueue', this.render);
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  }

});
