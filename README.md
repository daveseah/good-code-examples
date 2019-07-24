## About Good Code Examples

This is a collection of **code examples** for my own reference. Although I am
starting with Javascript, I'd like it to include good code examples from all
environments that I have used.  

*This is a work in progress.*

Target features: 

* Examples will be self-contained, complete, and 'runnable' as-is.
* Examples will use modern language conventions and practices. Each convention will be dated and annotated as well in the source code.
* Examples will be documented in the source.
* Examples will be formatted with "tabs as spaces" and a wrapping line width of 80 characters for ease of printing.
* Examples will be as fully cross-platform as possible for recent Mac, Linux, and Windows systems.

The examples will be implemented as the simplest possible version for maximum code clarity. Each example will also:

* highlight **critical control** and **data** scopes in the source code.
* use a practical **modular approaches** to code organization.
* provide simple steps for **installing the development tools** so you can run the code immediately.

## Javascript Examples

*WORK IN PROGRESS*

### Installation

You will need to install NodeJS and Git (insert installation link).
```
git clone https://github.com/daveseah/good-code-examples.git
cd good-code-examples
npm ci
```

## Running

There is currently one example in `sources/browser-javascript/00-basic`. To run it and launch a browser window:
```
npm run browser-00
```
This will use [Parcel](https://parceljs.org/) to compile and launch the example in your browser. 

## Editing

A Visual Studio Code workspace `code-examples.code-workspace` is included. You can edit the files and save them; if you are running the example, they will be automatically recompiled and updated.
