class Listing < ApplicationRecord
    validates :title, :description, :host_id, :street_address, :city, :country, :postcode, :price, :num_of_beds, :house_elf, :owl_friendly, presence: true
    validates :owl_friendly, :house_elf, inclusion: {in: [true, false] }
    validates :host_id, uniqueness: true
    belongs_to :user, foreign_key: :host_id, class_name: :User


end
