var UserListView = Backbone.View.extend({

  events: {
    "click #add": "addUser",
    "click #showForm": "showForm",
  },

  el: $("#container"),

  initialize: function () {
    this.collection = new UserList();
    this.collection.on("add", this.renderUser, this);
    this.collection.on("reset", this.render, this);
    this.collection.fetch({reset: true});
  },

  render: function () {
    var that = this;
    _.each(this.collection.models, function (item) {
      that.renderUser(item);
    }, this)
  },

  renderUser: function (item) {
    var userView = new UserView({
      model: item
    });
    this.$el.append(userView.render().el);
  },

  addUser: function (e) {
    e.preventDefault();

    var formData = {
      company:{},address:{}
    };

    if (this.collection.models.length != 0) {
      formData.id = this.collection.models[this.collection.length - 1].id + 1
    } else {
      formData.id = 1;
    }
    formData.name = $("#name").val();
    formData.company.bs = $("#company").val();
    formData.address.city = $("#city").val();
    formData.phone = $("#phone").val();
    formData.email = $("#email").val();
    formData.username = $("#username").val();
    formData.website = $("#website").val();

    this.collection.add(new User(formData));
    this.collection.create(new User(formData));
  },

  showForm: function () {
    this.$el.find("#addUser").slideToggle();
  }

});