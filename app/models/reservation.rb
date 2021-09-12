class Reservation < ApplicationRecord
    validates :start_date, :end_date, :guest_id, :listing_id, :total_price, presence: true
    belongs_to :guest, foreign_key: :guest_id, class_name: :User
    belongs_to :listing, foreign_key: :listing_id, class_name: :Listing
end
