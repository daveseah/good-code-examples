# Single Page Model-View-Controller Example

Model-View-Controller (aka [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)) is one of the important _architectural patterns_ for software that has a graphical user interface.

This example uses a set of source files based on Tania Rascia's [A simple MVC application in plain JavaScript](https://github.com/taniarascia/mvc/) tutorial. I've also modified the project to work with my Parcel build configuration.

Current available examples:

- `js01-mvc` - the as-implemented version of Tania Rascia's source from August 4, 2019.

## Running

_PREREQUISITE: Make sure to [install](https://github.com/daveseah/good-code-examples/#installation) the build tools._

Use the `npm run <script>` command from the terminal at the repo root. Example:

```
cd good-code-examples
npm run js01-mvc
```

The [Parcel][parceljs] build tool will transpile, run, then serve the HTML file in your default web browser. Type **ctrl-c** to quit the webserver.

## Appendix: Implementation Notes

- At the time of preparing this example, Tania's code uses [class properties](https://github.com/tc39/proposal-class-fields), which are not yet officially part of Javascript. To make this work, [Parcel's Babel config](https://parceljs.org/javascript.html#babel) needs to have the [@babel/plugin-proposal-class-properties](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) plugin added. This is added to the babel config inside `package.json` (which also has it as a `devDependency`). The documentation for the plugin describes how to install it.

[parceljs]: https://parceljs.org
