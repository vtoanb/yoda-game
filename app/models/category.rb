class Category < ApplicationRecord
  validates_presence_of :name

  has_many :category_games
  has_many :games, through: :category_games
end
