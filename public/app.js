(function() {

  var sammyApp = Sammy('#content', function() {

    this.get('#/home', cookiesController.all);
    this.get('#/', cookiesController.all);

    this.get('#/cookies', cookiesController.all);
    this.get('#/cookies/add', cookiesController.add);

    this.get('#/my-cookie', myCookieController.all);
    this.get('#/my-cookie/add', myCookieController.add);

     this.get('#/users', usersController.all);
     this.get('#/users/register', usersController.register);
  });

  $(function() {
    sammyApp.run('#/user');

    if (data.users.hasUser()) {
      $('#container-sign-in').addClass('hidden');
      $('#btn-sign-out').on('click', function() {
        data.users.signOut()
          .then(function() {
            document.location = '#/';
            document.location.reload(true);
          });
      });
    } else {
      $('#container-sign-out').addClass('hidden');
      $('#btn-sign-in').on('click', function(e) {
      	e.preventDefault();
        var user = {
          username: $('#tb-username').val(),
          password: $('#tb-password').val()
        };
        data.users.signIn(user)
          .then(function(user) {
            document.location = '#/';
            document.location.reload(true);
          }, function(err) {
            $('#container-sign-in').trigger("reset");
            toastr.error(err.responseText);
          });
      });
    }
  });
}());
