"use strict";

var postLike = document.querySelector('#post-like');
postLike.addEventListener('click', function (event) {
  var likeCounter = postLike.nextElementSibling;
  postLike.classList.toggle('post-not-liked');
  postLike.classList.toggle('post-liked');

  if (postLike.classList.contains('post-liked')) {
    likeCounter.innerHTML = parseInt(likeCounter.innerHTML) + 1 + ' likes';
  } else {
    likeCounter.innerHTML = parseInt(likeCounter.innerHTML) - 1 + ' likes';
  }
});
var date = new Date();
var postDate = document.querySelector('#post-date');
postDate.innerHTML = "today at   ".concat(date.getHours(), ":").concat(date.getMinutes());