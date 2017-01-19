class Collection < ApplicationRecord
  validates_presence_of :name

  has_many :collection_items
  has_many :games, through: :collection_items
end
