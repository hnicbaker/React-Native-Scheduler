class AppointmentsController < ApplicationController
    def index
        @appointments = Appointment.all
        render json: {
          appointments: @appointments
        }
      end
    
      def show
          @appointment = Appointment.find(params[:id])
          render json: {
          appointment: @appointment
        }
      end

      def new
        @appointment = Appointment.new
      end
    
      def create
        appointment = Appointment.new(appointment_params)
    
        if appointment.save
          redirect_to appointment
        end
      end
    
      def edit
        @appointment = Appointment.find(params[:id])
      end
    
      def update
        appointment = Appointment.find(params[:id])
        appointment.update_attributes(appointment_params)
        redirect_to appointment
      end
    
      def destroy
        @appointment = Appointment.destroy(params[:id])
          redirect_to appointment_path
      end
    
      private
      def appointment_params
       params.require(:appointment).permit(:name, :time, :date, :description, :calendar)
      end
    
end
