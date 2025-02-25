class DropAccountsTable < ActiveRecord::Migration[8.0]
  def up
    drop_table :accounts
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
