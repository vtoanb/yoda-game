class HomePageController < ApplicationController
  def index
    @games = Game.includes(:thumbnails).all
  end
end
