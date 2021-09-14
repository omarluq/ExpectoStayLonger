class Api::ReviewsController < ApplicationController
    def create 
        @review = Review.create!(review_params)
        
    end

    def update 
        @review = Review.find(params[:id])
        @review.update(review_params)
    end

    def show 
        @review = Review.find(params[:id])
    end


    def destroy
        @review = Review.find(params[:id])
        @review.destroy
    end

    private 
    def review_params 
        params.require(:review).permit(:body, :rating, :reviewer_id, :listing_id)
    end


end
