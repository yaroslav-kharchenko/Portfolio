var UserView = Backbone.View.extend({
  events: {
    "click button.delete": "deleteUser",
    "click button.edit": "updateUser",
    "click button.save": "updateSave",
    "click button.cancel": "updateCancel"
  },

  tagName: "section",
  className: "user-section",
  template: $("#userTemplate").html(),
  editTemplate: $("#userEditTemplate").html(),

  render: function () {
    var tmpl = _.template(this.template);

    this.$el.html(tmpl(this.model.toJSON()));
    return this;
  },

  deleteUser: function () {
    this.remove();
    this.model.destroy();
  },
  
  updateUser: function () {
    var tmpl = _.template(this.editTemplate);
    this.$el.html(tmpl(this.model.toJSON()));
  },

  updateSave: function (e) {
    e.preventDefault();

    var formData = {
      company:{},address:{}
    };

    formData.name = $("#edit-name").val();
    formData.company.bs = $("#edit-company").val();
    formData.address.city = $("#edit-city").val();
    formData.phone = $("#edit-phone").val();
    formData.email = $("#edit-email").val();
    formData.username = $("#edit-username").val();
    formData.website = $("#edit-website").val();
    this.model.set(formData);
    this.model.save(formData, { put: true });
    this.render();
  },

  updateCancel: function (e) {
    e.preventDefault();
    this.render();
  }

});