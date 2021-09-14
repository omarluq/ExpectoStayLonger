class Listing < ApplicationRecord
    validates :title, :description, :host_id, :street_address, :city, :country, :postcode, :price, :num_of_beds, presence: true
    belongs_to :user, foreign_key: :host_id, class_name: :User
    has_many_attached :photos
    has_many :reservations, foreign_key: :listing_id, class_name: :Reservation
    has_many :reviews, foreign_key: :listing_id, class_name: :Review


end
