class CreateAnimals < ActiveRecord::Migration[7.0]
  def change
    create_table :animals do |t|
      t.string :name
      t.string :nombre
      t.string :type
      t.string :image
      t.boolean :threatened

      t.timestamps
    end
  end
end
