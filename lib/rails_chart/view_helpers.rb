module RailsChart
  # View helpers for RailsChart
  module ViewHelpers
    def chartjs(id, dataset, html_attributes = {}, options = {})
      attr = html_attributes.map{|k,v| "#{k}='#{v}'"}.join(' ').html_safe
      render partial: 'rails_chart/chartjs', locals: {id: id, dataset: dataset, attributes: attr, options: options}
    end
  end
end