module RailsChart
  class Engine < Rails::Engine
    initializer 'rails_chart.view_helpers' do
      ActionView::Base.send :include, ViewHelpers
    end
  end
end