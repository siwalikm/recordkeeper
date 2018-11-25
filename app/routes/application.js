import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('record');
  },
  actions: {
    deleteItem(id) {
      this.store.findRecord('record', id).then(function(currentRecord) {
        currentRecord.deleteRecord();
        currentRecord.get('isDeleted');
        currentRecord.save();
      });
    },
    UpdateItem(updatedRecord) {
      updatedRecord.save()
      this.transitionTo('index');
    },

    CreateItem(record) {
      let {albumName, albumCover, artistName, genre, year, spotifyLink} = record;
      let newRecord = this.store.createRecord('record', {
        albumName,
        albumCover,
        artistName,
        genre,
        year,
        spotifyLink
      });
      newRecord.save();
      this.transitionTo('index');
    }
  }
});
