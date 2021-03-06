Rails.application.routes.draw do
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :update, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :listings, except: [:edit, :new]
    resources :reservations, only: [:create, :destroy, :show]
    resources :reviews, except: [:edit, :new]
  end
end
