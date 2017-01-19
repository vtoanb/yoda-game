class CreateCategoryGames < ActiveRecord::Migration[5.0]
  def change
    create_table :category_games do |t|
      t.references :game, foreign_key: true
      t.references :category, foreign_key: true

      t.timestamps
    end
  end
end
