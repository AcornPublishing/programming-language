#! /usr/bin/ruby
# Example 6.42

ARGV.length() == 1 or begin
    $stderr.print("usage: #{$0} pattern\n"); exit(1)
end
key = ARGV[0]

def searchFile(fname, pattern)
    file = File.open(fname)
    file.each {|line|
        throw :found, line if line =~ /#{pattern}/
            # throw to catch for "found", provide "line" as result
            # if line matches desired pattern
    }
end

match = catch :found do
    searchFile("f1", key)
    searchFile("f2", key)
    searchFile("f3", key)
    "not found\n"
end
print match
