class CreateTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.references :job, index: true
      t.string :name

      t.timestamps
    end
  end
end
