# OOPSLA 2012 submission

This is an attempt to put something together for submission before the April 13th deadline. It's more of an excercise to learn LaTeX and the process than anything else.

## Contents

The submission is a translation of my blog article on the appliation of category theory to JavaScript and jQuery. It focuses less on the category theory as it's center piece and more on the results, choosin to view the category theory as a rigorous proof of the properties needed for the performance optimization. It includes a semi-automatic performance optimization library for jQuery.

## Compiling

On Ubuntu after installing the texlive distrubution with

    $ apt-get install texlive

The document can be compiled to `.dvi` and viewed with

    $ latex oopsla-2012.tex
    $ evince oopsla-2012.dvi

or to `.pdf` with

    $ pdflatex oopsla-2012.tex
    $ evince oopsla-2012.pdf
