// Chat js

(function () {
  var contactsLinks = document.querySelectorAll('.contacts-list .contacts-link');
  var chatBody = document.querySelector('.chat-body');
  var closeButtons = document.querySelectorAll('[data-close]');

  contactsLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      chatBody.classList.add('chat-body-visible');
    });
  });

  closeButtons.forEach(function (button) {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      chatBody.classList.remove('chat-body-visible');
    });
  });
})();
