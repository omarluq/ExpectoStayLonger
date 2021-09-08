class Updates < ActiveRecord::Migration[6.1]
  def change

    remove_column(:listings, :house_elf)
    remove_column(:listings, :owl_friendly)
    add_column :listings, :house_elf, :boolean, :null => false, :default => 'false'
    add_column :listings, :owl_friendly, :boolean, :null => false, :default => 'false'

  end
end
