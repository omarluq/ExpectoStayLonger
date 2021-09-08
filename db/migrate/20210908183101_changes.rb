class Changes < ActiveRecord::Migration[6.1]
  def change
    remove_index :listings, :host_id
    add_index :listings, :host_id
  end
end
