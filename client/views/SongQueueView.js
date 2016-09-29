// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    // Add a change listener on the collection
    // to call render whenever the collection has songs added/removed
    // this.on('add', )


    this.collection.on('add remove', function() {
      this.render();
    }, this);
  },

  render: function() {
    this.$el.empty().html('<th>Queue</th>');
    this.collection.forEach(this.renderQueueEntryView, this);
  },

  renderQueueEntryView: function(song) {
    var queueEntryView = new SongQueueEntryView({model: song});
    this.$el.append(queueEntryView.render());
  }

});
