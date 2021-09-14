class Review < ApplicationRecord
    validates :body, :rating, :reviewer_id, :listing_id, presence: true
    belongs_to :user, foreign_key: :reviewer_id, class_name: :User
    belongs_to :listing, foreign_key: :listing_id, class_name: :Listing

end
