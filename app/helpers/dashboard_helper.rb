module DashboardHelper
  def title
    return t("hello") unless content_for?(:title)
    "#{content_for(:title)} | #{t("hello")}"
  end
end
