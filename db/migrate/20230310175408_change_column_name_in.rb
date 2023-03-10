class ChangeColumnNameIn < ActiveRecord::Migration[7.0]
  def change
    rename_column :animals, :type, :taxonomic
  end
end
