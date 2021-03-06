class Post < ApplicationRecord
  belongs_to :user
  has_attached_file :image, styles: {medium: "700*500#>", small: "350*250>"}
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
end
