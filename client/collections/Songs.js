// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    $.ajax({
      url: 'https://api.parse.com/1/classes/songs',
      type: 'GET',
      success: this.fetchSuccess.bind(this),
      error: this.fetchError
    });
  },
  
  fetchSuccess: function(response) {

    // console.log(options);
    // Figure out what is going on below
    this.add(response.results);
    
    // collection.shift();
    // _.each(response.results, function(song) {
    //   collection.push(song);
    // });
  },

  fetchError: function(collection, response) {
    console.log('FAILURE');
  },

});