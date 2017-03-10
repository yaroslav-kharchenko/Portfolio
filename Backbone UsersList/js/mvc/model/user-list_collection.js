var UserList = Backbone.Collection.extend({
  model: User,
  url: "http://jsonplaceholder.typicode.com/users"
});