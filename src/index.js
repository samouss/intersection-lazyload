const defaultLoaderImplementation = element => {
  // eslint-disable-next-line no-param-reassign
  element.src = element.dataset.src;
};

const onIntersection = loader => (entries, observer) => {
  entries.forEach(entry => {
    const { isIntersecting, target } = entry;

    if (isIntersecting) {
      loader(target);
      observer.unobserve(target);
    }
  });
};

const lazyload = (
  {
    selector = '.--lazyload',
    loader = defaultLoaderImplementation,
    ...options
  } = {},
) => {
  const observer = new IntersectionObserver(onIntersection(loader), options);

  [].slice.call(document.querySelectorAll(selector)).forEach(element => {
    observer.observe(element);
  });
};

export default lazyload;
