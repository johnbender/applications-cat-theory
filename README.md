## Poster

The beginnings of a poster submission around the work. Built in HTML and converted to png using CutyCapt.

http://johnbender.github.com/applications-cat-theory

## Paper

The paper covers two main topics, the first is a possible method chain fusion performance improvement and the second is a proposed split in the DOM manipulation of jQuery. Both are inspired by blog posts that were written on the two subjects ([fusion](http://johnbender.us/2012/02/29/faster-javascript-through-category-theory/), [split](http://johnbender.us/2012/07/19/splitting-jquery-in-two-a-proposal/))

### Compiling

On linux after installing the tex-live distrubution and the necessary packages (found at the top of `paper/paper.text`) the document can be compiled to `.dvi` and viewed with

    $ cd paper
    $ latex oopsla-2012.tex
    $ evince oopsla-2012.dvi

or to `.pdf` with

    $ cd paper
    $ pdflatex oopsla-2012.tex
    $ evince oopsla-2012.pdf
