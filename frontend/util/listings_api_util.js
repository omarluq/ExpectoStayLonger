

export const fetchListings = (city) => (
    $.ajax({
        method: "GET",
        url: "api/listings",
        data: {city}
    })
)

export const fetchListing = listingId => (
    $.ajax({
        method: "GET",
        url: `api/listings/${listingId}`
    })
)

export const createListing = listing => {
   return $.ajax({
        method: "POST",
        url: "api/listings",
        data: listing,
        processData: false,
        contentType: false
    })


}









export const editListing = listing => (
    $.ajax({
        method: "PATCH",
        url: `api/listings/${listing.id}`,
        data: {listing}
    })
)

export const deleteListing = listingId => (
    $.ajax({
        method: "DELETE",
        url: `api/listings/${listingId}`
    })
)