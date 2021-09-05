# json.extract! @user, :id, :email, :name, :bio
json.partial! "api/users/user", user: @user
