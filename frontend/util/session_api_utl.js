

const login = user => (
    $.ajax({
        method: "POST",
        url: "api/session",
        data: { user }
    })
)

const singup = user => (
    $.ajax({
        method: "POST",
        url: "api/user",
        data: { user }
    })
)

const logout = () => (
    $.ajax({
        method: "DELETE",
        url: "api/session"
    })
)