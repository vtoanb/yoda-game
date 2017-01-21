class AddYearToCollections < ActiveRecord::Migration[5.0]
  def change
    add_column :collections, :year, :integer
  end
end
