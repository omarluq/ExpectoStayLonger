json.extract! listing, :id, :host_id, :title, :description, :street_address, :city, :country, :postcode, :price, :num_of_beds, :house_elf, :owl_friendly, :longitude, :latitude
json.photos listing.photos.map {|photo| url_for(photo)}
json.reservations listing.reservations.map{|reservation| [reservation.start_date, reservation.end_date]}
json.reviews listing.reviews.map{|review| {id: review.id, body: review.body, rating: review.rating, author: review.user.name, author_id: review.reviewer_id}}