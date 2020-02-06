'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

thumbs.onclick = function(e) {
  const thumb = e.target.closest('.list-item__link');

  if (!thumb) {
    return;
  }
  showThumb(thumb.href, thumb.title);
  event.preventDefault();
};

function showThumb(href, title) {
  largeImg.src = href;
  largeImg.alt = title;
}
