class Thumbnail < ApplicationRecord
  validates_presence_of :data
  validates_presence_of :media_type

  belongs_to :game
end
