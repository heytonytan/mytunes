// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    // this.request();
    // $.ajax({
    //   url: 'https://api.parse.com/1/classes/songs',
    //   type: 'GET',
    //   success: this.fetchSuccess.bind(this),
    //   error: this.fetchError
    // });
  },

  request: function(moreInputs) {

    var requestDetails = {
      url: 'https://api.parse.com/1/classes/songs',
      type: 'GET',
      success: this.fetchSuccess.bind(this),
      error: this.fetchError
    };

    if (moreInputs !== undefined) {
      console.log('had more Inputs', moreInputs);
      _.extend(requestDetails, moreInputs);
      console.log('had requestDetails', requestDetails);
    }

    $.ajax(requestDetails);

  },

  fetchSuccess: function(response) {

    // console.log(options);
    // Figure out what is going on below
    this.reset().add(response.results);
    
    // collection.shift();
    // _.each(response.results, function(song) {
    //   collection.push(song);
    // });
  },

  fetchError: function(collection, response) {
    console.log('FAILURE');
  },

  search: function(query) {
    console.log('did request with search query:', query);

    var queryDetails = {
      data: 'where=' + escape(JSON.stringify({
        '$or': [
          {'artist': {'$regex': query}},
          {'title': {'$regex': query}}
        ]
      }))
    };

    this.request(queryDetails);
  }

});