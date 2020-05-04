class SpotsController < ApplicationController

  def index
    @spots = Spot.all
  end

  def show
    @spot = Spot.find(params[:id])
  end

  def new
    @spot = Spot.new
  end

  def create
    @spot = Spot.new(spot_params)
    @spot.save

    redirect_to spot_path(@spot)
  end


private

  def spot_params
    params.require(:spot).permit(:name, :adress)
  end


end
