class Updatess < ActiveRecord::Migration[6.1]
  def change
    add_index :reservations, :guest_id
    add_index :reservations, :listing_id
  end
end
