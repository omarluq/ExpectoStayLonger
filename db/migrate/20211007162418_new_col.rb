class NewCol < ActiveRecord::Migration[6.1]
  def change
    add_column :reservations, :num_of_guests, :integer
  end
end
