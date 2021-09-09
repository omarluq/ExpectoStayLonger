class Listing < ApplicationRecord
    validates :title, :description, :host_id, :street_address, :city, :country, :postcode, :price, :num_of_beds, presence: true
    belongs_to :user, foreign_key: :host_id, class_name: :User
    has_many_attached :photos


end
