class CreateThumbnails < ActiveRecord::Migration[5.0]
  def change
    create_table :thumbnails do |t|
      t.string :type
      t.string :data
      t.references :game, foreign_key: true, index: true

      t.timestamps
    end
  end
end
