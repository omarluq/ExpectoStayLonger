class Api::ListingsController < ApplicationController



    def create 
        @listing = Listing.create!(listing_params)
        if @listing 
            render :show
        else 
            render json: @listing.errors.full_messages
        end 

    end

    def show 
        @listing = Listing.find(params[:id])
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
        @listings = Listing.all
        if params[:city]
            @listings = Listing.where(city: params[:city])
            render :index
        else 
            render :index
        end
        
    end

    private 
    def listing_params 
        params.require(:listing).permit(:host_id, :title, :description, :street_address, :city, :country, :postcode, :price, :num_of_beds, :house_elf, :owl_friendly, :longitude, :latitude)
    end
end
