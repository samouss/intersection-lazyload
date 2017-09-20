# Intersection Lazyload

[![npm version](https://badge.fury.io/js/intersection-lazyload.svg)](https://badge.fury.io/js/intersection-lazyload)

## Installation

```
npm install --save intersection-lazyload
```

**Note:** This library is based on the [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) API, it's not yet widely supported.  
Check the [compatibility table](http://caniuse.com/#feat=intersectionobserver) and add a [Polyfill](https://github.com/w3c/IntersectionObserver/tree/gh-pages/polyfill) to your needs!

## Usage

Import the module in your application:

```js
// From ES6
import lazyload from 'intersection-lazyload'

// From CJS
const lazyload = require('intersection-lazyload').default;

// From global
const lazyload = IntersectionLazyload.default;
```

Then use it juste like that:

```html
<img class="--lazyload" data-src="your-picture.png">
```

```js
lazyload();
```

## Run the test

```
npm test
```

## Example

Check out the [documentation](example).
