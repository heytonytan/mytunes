// SearchView.js - Defines a backbone view class for the music player.
var SearchView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<form><input type="text" placeholder"Search"></input><input type="submit" name="submit"></input></form>',

  events: {
    'submit': 'handleSubmit'
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var query = $('input:text').val();
    $('input:text').val('');
    console.log('SearchView', this);
    this.collection.search(query);
    // this.trigger('search', query);
  },

  initialize: function() {
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
