module RailsChart
  class Engine < ::Rails::Engine
    initializer 'RailsChart.view_helpers' do
      ActionView::Base.send :include, ViewHelpers
    end
  end
end