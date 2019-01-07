throw "resize.rb no longer in the process. Edit master/*.svg."
Dir.glob('src/*.svg') {|path|
  print "rsvg-convert -a -w 11 -f svg #{path} -o #{path.sub('src', 'src/11')}\n"
}
