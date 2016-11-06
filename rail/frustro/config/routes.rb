Rails.application.routes.draw do
  devise_for :users
  get 'welcome/index'
  resources :notes
  #authenticate :user do
  #   root 'welcome#index',as: "authenticated_root"
  #end
  root 'welcome#index'

end
