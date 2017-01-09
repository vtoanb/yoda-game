Rails.application.routes.draw do
  root to: 'home_page#index'

  get 'hello_world', to: 'hello_world#index'
  resources :users
  # root to: 'visitors#index'
  get '/auth/:provider/callback' => 'sessions#create'
  get '/signin' => 'sessions#new', :as => :signin
  get '/signout' => 'sessions#destroy', :as => :signout
  get '/auth/failure' => 'sessions#failure'
end
