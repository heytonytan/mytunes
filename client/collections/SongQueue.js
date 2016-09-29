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
      console.log('first song ended');
      this.shift();
      if (this.models.length !== 0) {
        this.playFirst();
      }
    });

    this.on('dequeue', function(song) {
      console.log('before', this);
      // this.remove(song);
      this.shift();
      console.log('after', this);
    });
  },

  playFirst: function() {
    this.at(0).play();
  }

});