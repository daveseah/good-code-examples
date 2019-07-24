# Javascript in the Browser Examples

This is a set of source files that load Javascript.

1. `js-base` - inline js in the `<head>` only
2. `js-base-body` - inline js at the bottom of the `<body>` 
3. `js-base-file` - load external js (no loader libraries or module support)
4. `js-base-require` - load external js using AMD module format w/ RequireJS
5. `js-base-module` - load external js using ECMAscript modules

## Running 

[link to WIKI installation dev tools requirement]
```
cd good-code-examples
npm run js-base
```
The [Parcel] build tool will run and serve the HTML file in your default web browser. Type **ctrl-c** to quit the webserver.

## Appendix: Implementation Notes

There are some features I'm using that may be unfamiliar to casual developers;
I've included the approximate year when these features became broadly available for mainstream browser use.

* c2012 - For consistency across browsers, the base CSS is
  ["normalized"][normalized]
  by importing `normalize.css` via the main stylesheet `style.css`.

* c2014 - In Example 4, RequireJS is used load code modules defined with the [Asynchronous Model Definition][amd]. This is one of the [older runtime solutions][requirejs] for implementing modules in Javascript; prior to 2014, there was no standard for writing modular Javascript.

* c2018 - In Example 5, Javascript is loaded as an
  [ECMAscript-style
  module](https://jakearchibald.com/2017/es-modules-in-browsers) after
  `index.html` has completely loaded. Supported by modern web bundlers. Unlike Examples 1-4, this code example can't be run by opening the file directly in the browser due to `<script type="module">` security safeguards. Example 5 *must* be loaded from a web server.

[requirejs]:https://requirejs.org/docs/history.html
[amd]:https://github.com/amdjs/amdjs-api
[normalized]:http://nicolasgallagher.com/about-normalize-css#normalize-vs-reset
