set -e
clean() {
  rm -f *.pdf
  rm -f *.out
  rm -f *.aux
  rm -f *.dvi
  rm -f *.log
  rm -f *.svg
  rm -f *.out
  rm -f *_*
}

clean
cd paper/
clean
