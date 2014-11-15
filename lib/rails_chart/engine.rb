module RailsChart
  class RailsChartEngine < Rails::Engine
    initializer 'RailsChart.view_helpers' do
      ActionView::Base.send :include, ViewHelpers
    end
  end
end