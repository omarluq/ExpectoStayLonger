class Change < ActiveRecord::Migration[6.1]
  def change
    change_column :listings, :postcode, :string
  end
end
