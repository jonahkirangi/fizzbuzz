(1...101).each do |i|
  if (i % 3) == 0 && (i % 5) == 0
    puts "FizzBuzz"
  elsif (i % 3) == 0
    puts "Fizz"
  elsif (i % 5) == 0
    puts "Buzz"
  else
    puts i if (i % 3) != 0 && (i % 5) != 0
  end
end
