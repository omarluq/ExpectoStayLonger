# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_09_07_211648) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "listings", force: :cascade do |t|
    t.string "title", null: false
    t.text "description", null: false
    t.integer "host_id", null: false
    t.string "street_address", null: false
    t.string "city", null: false
    t.string "country", null: false
    t.string "postcode", null: false
    t.integer "price", null: false
    t.integer "num_of_beds", null: false
    t.boolean "house_elf", null: false
    t.boolean "owl_friendly", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.float "longitude", null: false
    t.float "latitude", null: false
    t.index ["host_id"], name: "index_listings_on_host_id", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.text "bio"
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["password_digest"], name: "index_users_on_password_digest"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
