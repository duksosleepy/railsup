require "test_helper"

class UserTest < ActiveSupport::TestCase
  test "name and email is stripped of spaces before saving" do
    @user = User.create(name: " John ", email: " johndoe@example.com ", password: "password")
    assert_equal "John", @user.name
    assert_equal "johndoe@example.com", @user.email
  end
end
