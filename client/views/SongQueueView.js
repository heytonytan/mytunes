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
    // if the collection is empty
    if (!this.collection.length) {
      // empty the $el and append the table header and div
      this.$el.empty().html('<th>Queue</th>').append('<div>Queue is currently empty! Click on Library to add more songs.</div>');
    // else
    } else {
      this.$el.empty().html('<th>Queue</th>');
      this.collection.forEach(this.renderQueueEntryView, this);
    }
  },

  renderQueueEntryView: function(song) {
    var queueEntryView = new SongQueueEntryView({model: song});
    this.$el.append(queueEntryView.render());
  }

});
