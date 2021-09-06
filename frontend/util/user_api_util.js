


export const fetchUser = userId => ({
    method: "GET",
    url: `api/users/${userId}`
})