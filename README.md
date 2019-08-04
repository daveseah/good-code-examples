## About Good Code Examples

This is a collection of **code examples** for my own reference. Although I am
starting with Javascript, I'd like it to include good code examples from all
environments that I have used over the years.

A secondary goal is to provide a "new programmer" experience similar to the
instant-on, instant gratification of the Apple II in the early 1980s. The code
examples should be stand-alone and runnable in a form that is close to
production ready using modern tools and practice.

Target features:

- Examples will be self-contained, complete, and 'runnable' as-is.
- Examples will use modern language conventions and practices. Each convention will be dated and annotated as well in the source code.
- Examples will be documented in the source.
- Examples will be formatted with "tabs as spaces" and a wrapping line width of 80 characters for ease of printing.
- Examples will be as fully cross-platform as possible for recent Mac, Linux, and Windows systems.

The examples will be implemented as the simplest possible version for maximum code clarity. Each example will also:

- highlight **critical control** and **data** scopes in the source code.
- use a practical **modular approaches** to code organization.
- provide the steps for **installing the development tools** so you can run the code immediately.

### Installation

This project uses NodeJS, Git, and Visual Studio Code to run Javascript examples from the terminal.

- [Mac installation] walk through
- [Windows installation] walk through
- [Linux installation] walk through

Once you have these installed, you'll want to `git clone` this repo into your development directory from a terminal console by executing these commands

```
cd <your-development-folder>
git clone https://github.com/daveseah/good-code-examples.git
cd good-code-examples
npm ci
```

This will install the NodeJS prerequisites. **You only need to do this once** on your first clone. Newer version of the repo adds more dependencies; if you see an error complaining about missing node modules after pulling the most recent update, try running the `npm ci` command again.

## Running the Examples

Each folder in the `source` directory has a `README.md` file which has instructions on running the examples as well as additional trivia.

## Editingthe Examples

A Visual Studio Code workspace `code-examples.code-workspace` is included. You can edit the files and save them; if you are running the example via one of the `npm run` scripts, they will be _automatically recompile and update_ in a browser window!
