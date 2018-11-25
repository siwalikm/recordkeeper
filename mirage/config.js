export default function() {
  this.namespace = 'api';

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

    // Shorthand cheatsheet:

    this.get('/records');
    this.post('/records');
    this.get('/records/:id');
    this.patch('/records/:id'); // or this.patch
    this.del('/records/:id');
    

    // http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  // */
}