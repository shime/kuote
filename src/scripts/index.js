import '../styles/index.scss';
import domtoimage from 'dom-to-image';
import quotes from './../data/quotes.json';

const wrapper = document.querySelectorAll('[data-js-quote-wrapper]')[0];
const quote = document.querySelectorAll('[data-js-quote]')[0];
const author = document.querySelectorAll('[data-js-quote-author]')[0];
const book = document.querySelectorAll('[data-js-quote-book]')[0];
const portrait = document.querySelectorAll('[data-js-author-portrait]')[0];
const portraitUploader = document.querySelectorAll('[data-js-portrait-uploader]')[0];
const scale = 750 / wrapper.offsetWidth;
const uploadButtonWrapper = document.querySelectorAll('[data-js-upload-button-wrapper]')[0];
const mobileNotice = document.querySelectorAll('[data-js-mobile-notice]')[0];

const iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

if (iOS) {
  mobileNotice.classList.remove("hidden");
  uploadButtonWrapper.classList.add("hidden");
}

window.download = () => {
  if (!portrait.getAttribute("data-js-modified")) {
    portrait.classList.add("hidden");
    uploadButtonWrapper.classList.add("hidden");
  }

  [quote, author, book].forEach((el) => {
    if (el.value === '') {
      el.classList.add("hidden");
    }
  });

  domtoimage.toPng(wrapper, {
    height: wrapper.offsetHeight * scale,
    width: wrapper.offsetWidth * scale,
    style: {
      transform: "scale(" + scale + ")",
      transformOrigin: "top left",
      width: wrapper.offsetWidth + "px",
      height: wrapper.offsetHeight + "px"
    }}).then((dataUrl) => {
    const link = document.createElement('a');
    link.download = 'quote.png';
    link.href = dataUrl;
    link.click();

     [quote, author, book].forEach((el, i) => {
       el.classList.remove("hidden");
     });

    if (!portrait.getAttribute("data-js-modified")) {
      portrait.classList.remove("hidden");
    uploadButtonWrapper.classList.remove("hidden");
    }
  }).catch(function (error) {
    console.error('oops, something went wrong!', error);
  });

};

window.upload = () => {
  const input = portraitUploader;

  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      portrait.src = e.target.result;
      portrait.setAttribute("data-js-modified", true);
    };

    reader.readAsDataURL(input.files[0]);
  }
};

window.adjustHeight = (element) => {
  element.style.height = "";
  element.style.height = element.scrollHeight + "px";
};

window.generate = () => {
  const randomQuote = quotes[Math.floor(Math.random()*quotes.length)];

  author.value = randomQuote.author;
  book.value = randomQuote.book ? randomQuote.book : "";
  quote.value = randomQuote.quote;

  [author, book, quote].forEach((el) => adjustHeight(el));
};

document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    quote.focus();
  }
};

