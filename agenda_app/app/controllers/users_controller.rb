class UsersController < ApplicationController
    def index
        render json: { Text: "user" }
      end
end
