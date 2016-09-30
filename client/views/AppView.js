// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params) {

    //model: AppModel

    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});//
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.searchView = new SearchView({collection: this.model.get('library')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model) {
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    // this.searchView.on('search', function(query) {
    //   console.log('AppView receives that searchView said', query);
    //   this.libraryView.collection.search(query);
    // });
  },

  render: function() {
    return this.$el.html([
      this.playerView.$el,
      this.songQueueView.$el, //
      this.libraryView.$el,
      this.searchView.$el
    ]);
  }

});
