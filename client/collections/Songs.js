// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.fetch({
      url: 'https://api.parse.com/1/classes/songs',
      success: this.fetchSuccess,
      error: this.fetchError
    });
  },

  fetchSuccess: function(collection, response) {

    // Figure out what is going on below
    collection.reset(response.results);
    
    // collection.shift();
    // _.each(response.results, function(song) {
    //   collection.push(song);
    // });
  },

  fetchError: function(collection, response) {
    console.log('FAILURE');
  },

});