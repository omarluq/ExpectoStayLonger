class Api::ReservationsController < ApplicationController

    def create 
        @reservation = Reservation.create!(reservation_params)
        if @reservation 
            # render :shows
        end
    end

    def destroy
        @reservation = Reservation.find(params[:id])
        @reservation.destroy
    end

    def show 
        @reservation = Reservation.find(params[:id])
    end


    private 
    def reservation_params 
        params.require(:reservation).permit(:start_date, :end_date, :listing_id, :guest_id, :total_price)
    end
end
