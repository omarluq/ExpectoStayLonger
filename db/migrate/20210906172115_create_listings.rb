class CreateListings < ActiveRecord::Migration[6.1]
  def change
    create_table :listings do |t|
      t.string :title, null: false
      t.text :description, null: false 
      t.integer :host_id, null: false, index: {unique: true}
      t.string :street_address, null: false
      t.string :city, null: false
      t.string :country, null: false
      t.integer :postcode, null: false
      t.integer :longitude, null: false
      t.integer :latitude, null: false
      t.integer :price, null: false
      t.integer :num_of_beds, null: false
      t.boolean :house_elf , null: false
      t.boolean :owl_friendly, null: false
      t.timestamps
    end
  end
end
