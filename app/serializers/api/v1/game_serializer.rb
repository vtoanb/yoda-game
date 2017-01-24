class Api::V1::GameSerializer < Api::V1::BaseSerializer
  attributes :name, :icon

  has_many :thumbnails
end
