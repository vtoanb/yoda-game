class Thumbnail < ApplicationRecord
  validates_presence_of :data
  validates_presence_of :type

  belongs_to :game
end
