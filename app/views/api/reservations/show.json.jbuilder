json.extract! @reservation, :id, :start_date, :end_date, :total_price, :guest_id
json.listing @reservation.listing 
json.photos @reservation.listing.photos.map {|photo| url_for(photo)}
