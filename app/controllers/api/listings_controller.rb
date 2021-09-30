class Api::ListingsController < ApplicationController



    def create 
        @listing = Listing.create!(listing_params)
        if @listing
            render :show
        else 
            render json: @listing.errors.full_messages, status: 422
        end 
    end

    def show 
        @listing = Listing.with_attached_photos.find(params[:id])
    end

    def update 
        @listing = Listing.find(params[:id])
        if @listing.update
            render :show
        else 
            render json: @listing.errors.full_messages
        end

    end


    def destroy
        @listing = Listing.find(params[:id])
        @listing.destroy
    end

    def index 
        
        if params[:city] 
            city = params[:city].split(' ').map{|word| word.capitalize()}.join(' ')
            @listings = Listing.with_attached_photos.find_by_city(city)
            render :index
          
        else 
            @listings = Listing.with_attached_photos.all
            render :index 
        end
        
    end

    private 
    def listing_params 
        params.require(:listing).permit(:host_id, :title, :description, :street_address, :city, :country, :postcode, :price, :num_of_beds, :house_elf, :owl_friendly, :longitude, :latitude, photos: [])
    end
end
