# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  name            :string           not null
#  email           :string           not null
#  bio             :text
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :name, :email, :password_digest, :session_token, presence: true
    validates :email, :session_token, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true}
    attr_reader :password
    after_initialize :ensure_session_token 
    has_many :listings, foreign_key: :host_id, class_name: :Listing
    has_many :reservations, foreign_key: :guest_id, class_name: :Reservation

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.is_password?(password) 
            user 
        else 
            nil
        end
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end
    def generate_session_token 
        self.session_token = SecureRandom.urlsafe_base64
    end
    def ensure_session_token
        self.session_token ||= self.generate_session_token
    end
    def reset_session_token 
        self.generate_session_token
        save!
        self.session_token
    end



    
end
