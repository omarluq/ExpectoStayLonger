json.extract! listing, :id, :host_id, :title, :description, :street_address, :city, :country, :postcode, :price, :num_of_beds, :house_elf, :owl_friendly, :longitude, :latitude
json.photo url_for(listing.photo)
