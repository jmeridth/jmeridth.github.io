`git grep "jasonmeridth/files"`.split('\n').each do |line|
  line.gsub!(/.*?(?=jasonmeridth.*png)/, '')
  line.gsub!(/jasonmeridth\/files\/2011\/03/, 'jasonmeridth/files/2011/03/')
  line.gsub!(/\)/, '')
  x = line.split(' ')
  x.each do |y|
    next unless y.include?('jasonmeridth')
    y.gsub!(/j+asonmeridth/, 'jasonmeridth')
    z = y.gsub(/jasonmeridth.*03/, '')
    z.gsub!(/\//, '_')
    `wget https://lostechies.com/#{y} -O ~/dev/jmeridth.github.io/assets/images/#{z}`
  end
end
