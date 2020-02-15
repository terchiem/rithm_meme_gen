const gallery = document.getElementById('gallery');
const create = document.getElementById('create');
const error = document.getElementById('error');
const form = {
  top: document.getElementById('top-text'),
  bottom: document.getElementById('bottom-text'),
  image: document.getElementById('image-link')
}

create.addEventListener('click', (e) => {
  e.preventDefault();

  // ensure image url is not empty
  if (form.image.value === '') {
    error.innerHTML = '* Required *'
    return;
  }

  const meme = createMeme();
  gallery.appendChild(meme);
  meme.scrollIntoView();

  // reset form
  form.top.value = '';
  form.bottom.value = '';
  form.image.value = '';
  error.innerHTML = '';
});

function createMeme() {
  const meme = document.createElement('div');
  meme.classList.add('meme');
  meme.innerHTML = `
    <button class="delete" onclick="gallery.removeChild(this.parentNode)">x</button>
    <div class="top text">${form.top.value}</div>
    <div class="bottom text">${form.bottom.value}</div>
    <img src="${form.image.value}" alt="">
  `;

  return meme;
}