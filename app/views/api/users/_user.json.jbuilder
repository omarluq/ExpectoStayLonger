json.extract! user, :id, :email, :name, :bio
json.user_listing user.listings.each do |listing| 
    json.extract! listing, :id, :host_id, :title, :description, :street_address, :city, :country, :postcode, :price, :num_of_beds, :house_elf, :owl_friendly, :longitude, :latitude
    json.photos listing.photos.map {|photo| url_for(photo)}
end