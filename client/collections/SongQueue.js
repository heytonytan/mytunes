// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {

    this.on('add', function() {
      // if there is only one item in the collection
      if (this.length === 1) {
        // play that item
        this.playFirst();
      }
      // else nothing
    });

    this.on('ended', function() {
      this.shift();
      if (this.models.length !== 0) {
        this.playFirst();
      }
    });

    this.on('dequeue', function(song) {
      // this.remove(song);
      this.shift();
    });
  },

  playFirst: function() {
    this.at(0).play();
  }

});