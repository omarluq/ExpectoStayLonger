


export const createReservation = (reservation) => (
    $.ajax({
        method: "POST",
        url: "api/reservations",
        data: { reservation }
    })
)


export const deleteReservation = resId => (
    $.ajax({
        method: "DELETE",
        url: `api/reservations/${resId}`
    })
)


export const fetchReservation = (resId) => (
    $.ajax({
        method: "GET",
        url: `api/reservations/${resId}`
    })
)