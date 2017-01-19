class Game < ApplicationRecord
  validates_presence_of :name
  validates_presence_of :icon
  
  has_many :thumbnails
  has_many :category_games
  has_many :categories, through: :category_games

  has_many :collection_items
  has_many :collections, through: :collection_items
end
