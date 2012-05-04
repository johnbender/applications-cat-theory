# OOPSLA 2012

OOPSLA 2012 submissions around automatic loop fusion and optimization detection in jQuery method chains.

## Poster

The poster is the much more likely candidate of the two pieces of work included in the repository. It's an introduction to the ideas, the library and the "standards" proposal to allow users to optimize their jQuery chains where appropriate. The poster can be viewed from the gh-pages branch at:

http://johnbender.github.com/auto-jquery-optimization-paper

## Paper

This is an attempt to put something together for submission before the April 13th deadline. It's more of an exercises to learn LaTeX and the process than anything else.

### Contents

The submission is a translation of my [blog article](http://johnbender.us/2012/02/29/faster-javascript-through-category-theory/) on the application of category theory to JavaScript and jQuery. It focuses less on the category theory as it's center piece and more on the results, choosing to view the category theory as a rigorous proof of the properties needed for the performance optimization. It includes a failed attempt at a semi-automatic performance optimization library (see [here](/johnbender/jquery-lazy-proxy)) for jQuery, and it's more pragmatic cousin, a library to alert developers to possible areas for optimization.

### Compiling

On Ubuntu after installing the texlive distribution with

    $ apt-get install texlive

The document can be compiled to `.dvi` and viewed with

    $ cd paper
    $ latex oopsla-2012.tex
    $ evince oopsla-2012.dvi

or to `.pdf` with

    $ cd paper
    $ pdflatex oopsla-2012.tex
    $ evince oopsla-2012.pdf
