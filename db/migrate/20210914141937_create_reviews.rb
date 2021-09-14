class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :reviewer_id, null: false, index: true
      t.integer :listing_id, null: false, index: true
      t.integer :rating, null: false 
      t.text :body, null: false
      t.timestamps
    end
  end
end
