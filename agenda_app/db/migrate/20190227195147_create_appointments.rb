class CreateAppointments < ActiveRecord::Migration[5.2]
  def change
    create_table :appointments do |t|
      t.string :name
      t.time :time
      t.string :date
      t.string :description
      t.string :calendar

      t.timestamps
    end
  end
end
