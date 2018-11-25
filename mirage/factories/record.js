import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  artistName() {
    return `${faker.name.firstName()} ${faker.name.lastName()}`;
  },
  albumName() {
    return faker.company.companyName();
  },
  genre() {
    return 'pop';
  },
  albumCover(i) {
    return `https://picsum.photos/400/200?image=1${i}`;
    // return `https://devimg.com/400x200/space${i}`;
  },
  year() {
    return faker.date
      .between(new Date('1950'), new Date('2017'))
      .toString()
      .substr(11, 4);
  },
  spotifyLink() {
    return faker.internet.url();
  }
});
