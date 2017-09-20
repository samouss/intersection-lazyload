import lazyload from 'intersection-lazyload';
import './index.css';

lazyload({
  selector: '.--lazyload-src',
});

lazyload({
  selector: '.--lazyload-background-image',
  loader: element => {
    // eslint-disable-next-line no-param-reassign
    element.style.backgroundImage = `url("${element.dataset.backgroundImage}")`;
  },
});
