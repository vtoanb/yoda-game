# loading particular seed file
load(Rails.root.join('db', 'seed', "categories.rb")) if ENV["categories"]
