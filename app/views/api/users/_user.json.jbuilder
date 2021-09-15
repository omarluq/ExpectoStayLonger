json.extract! user, :id, :email, :name, :bio
json.user_listing user.listings.with_attached_photos.each do |listing| 
    json.extract! listing, :id, :host_id, :title, :description, :street_address, :city, :country, :postcode, :price, :num_of_beds, :house_elf, :owl_friendly, :longitude, :latitude
    json.photos listing.photos.map {|photo| url_for(photo)}
end
json.user_reservations user.reservations.each do |reservation|
    json.extract! reservation, :start_date, :end_date, :total_price, :id
    json.res_listing reservation.listing, :id, :title, :city
    json.photo reservation.listing.photos.map{|photo| url_for(photo)}
end