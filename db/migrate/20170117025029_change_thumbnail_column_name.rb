class ChangeThumbnailColumnName < ActiveRecord::Migration[5.0]
  def up
    rename_column :thumbnails, :type, :media_type
  end

  def down
    rename_column :thumbnails, :media_type, :type
  end
end
