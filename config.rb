# Reload the browser automatically whenever files change

###
# Helpers
###
helpers do
  def get_url
    absolute_prefix + url_prefix
  end
end

###
# Config
###
set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'
set :url_prefix, '/'
set :absolute_prefix, 'http://localhost:4567'

# Autoprefixer
activate :autoprefixer do |config|
  config.browsers = ['last 2 versions']
end

# Build-specific configuration
configure :build do
  puts "local build"
  set :url_prefix, ""
  set :absolute_prefix, ""
  activate :asset_hash
  activate :minify_javascript
  activate :minify_css
end

# Proxy a dynamic page for each report
# 
data.reports.each do |report|
  proxy "/prototype/report/#{report[:id]}", "prototype/report/index.html", :locals => { :report => report }
end

# npm_prefix = `npm bin`.strip

# activate :external_pipeline,
#   name: :webpack,
#   command: build? ? "#{npm_prefix}/webpack" : "#{npm_prefix}/webpack --watch -d",
#   source: './source/javascripts',
#   latency: 1