class Game < ApplicationRecord
  validates_presence_of :name
  validates_presence_of :icon
  
  has_many :thumbnails
end
