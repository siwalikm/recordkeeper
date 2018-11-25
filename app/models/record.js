import DS from 'ember-data';

export default DS.Model.extend({
  albumName: DS.attr('string'),
  albumCover: DS.attr('string'),
  artistName: DS.attr('string'),
  genre: DS.attr(),
  year: DS.attr('string'),
  spotifyLink: DS.attr('string')
});
