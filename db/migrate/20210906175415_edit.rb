class Edit < ActiveRecord::Migration[6.1]
  def change
    remove_column(:listings, :longitude)
    remove_column(:listings, :latitude)
  end
end
