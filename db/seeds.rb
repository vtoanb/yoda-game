# loading particular seed file
load(Rails.root.join('db', 'seed', "categories.rb")) if ENV["categories"]
AdminUser.create!(
  email: 'admin@example.com',
  password: 'password',
  password_confirmation: 'password') if ENV["admin"]