class Add < ActiveRecord::Migration[6.1]
  def change
    add_column :listings, :longitude, :float, :null => false
    add_column :listings, :latitude, :float, :null => false
  end
end
