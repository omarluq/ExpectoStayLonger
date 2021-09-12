class CreateReservations < ActiveRecord::Migration[6.1]
  def change
    create_table :reservations do |t|
      t.datetime :start_date, null: false
      t.datetime :end_date, null: false
      t.integer :guest_id, null: false
      t.integer :listing_id, null: false
      t.float :total_price, null: false
      t.timestamps
    end
  end
end
