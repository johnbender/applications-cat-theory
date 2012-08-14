task :pdf, :output do |t, args|
  # note that pdflatex is run twice to make sure
  # references are sorted
  Kernel.exec(<<-CMD)
    bash bin/pdf.sh
  CMD
end

task :'gh-pages' => :pdf do
  Kernel.exec(<<-CMD)
    bash bin/gh-pages.sh
  CMD
end

task :clean do
  Kernel.exec(<<-CMD)
    bash bin/clean.sh
  CMD
end
