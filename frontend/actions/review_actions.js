import * as reviewAPI from '../util/review_api_util'

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW'

export const DELETE_REVIEW = 'DELETE_REVIEW'


const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
})

const removeReview = revId => ({
    type: DELETE_REVIEW,
    revId
})


export const createReview = review => dispatch => (
    reviewAPI.createReview(review).then(review=> dispatch(receiveReview(review)))
)

export const editReview = review => dispatch => (
    reviewAPI.editReview(review).then(review => dispatch(receiveReview(review)))
)

export const deleteReview = revId => dispatch => (
    reviewAPI.deleteReview(revId).then(revId => dispatch(removeReview(revId)))
)