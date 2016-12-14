class Post < ApplicationRecord
      belongs_to :user
      validates :image, presence: true
      validates :user_id, presence: true
      has_many :comments

      has_attached_file :image, styles: { medium: "640x640>", thumb: "100x100>" }
      validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/

end
