task :pdf do
  `bash bin/pdf.sh`
end

task :"gh-pages" => :pdf do
  `bash bin/gh-pages.sh`
end

task :clean do
  `bash bin/clean.sh`
end
