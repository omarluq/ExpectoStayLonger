
import * as listingApi from "../util/listings_api_util"


export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS"
export const RECEIVE_LISTING = "RECEIVE_LISTING"
export const REMOVE_LISTING = "REMOVE_LISTING"



const receiveListings = listings => ({
    type: RECEIVE_LISTINGS,
    listings
})

const receiveListing = listing => ({
    type: RECEIVE_LISTING,
    listing
})

const removeListing = listingId => ({
    type: REMOVE_LISTING,
    listingId
})


export const fetchListings = (city) => dispatch => (
    listingApi.fetchListings(city).then(listings => dispatch(receiveListings(listings)))
)

export const fetchListing = listingId => dispatch => (
    listingApi.fetchListing(listingId).then(listing => dispatch(receiveListing(listing)))
)

export const createListing = listing => dispatch => (
    listingApi.createListing(listing).then(listing=> dispatch(receiveListing(listing)))
)

export const editListing = listing => dispatch => (
    listingApi.editListing(listing).then(listing=> dispatch(receiveListing(listing)))
)

export const deleteListing = listingId => dispatch => (
    listingApi.deleteListing(listingId).then(()=>dispatch(removeListing(listingId)))
)