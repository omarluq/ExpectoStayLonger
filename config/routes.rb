Rails.application.routes.draw do
  root "state_pages#root"
  namespace :api, defaults: {format: :json} do 
    resources :user, only: [:create, :update, :show]
    resource :session, only: [:create, :destroy, :show]
  end
end
