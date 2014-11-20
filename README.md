# RailsChart

Beautiful charts for Rails app with preconfigured Javascript, AJAX data load, clean HTML and helpers

## Installation

Add this line to your application's Gemfile:

    gem 'rails_chart'

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install rails_chart

Then add into `application.js`

    //= require chartjs_init

## Usage

### View

For AJAX request:

    <%= chartjs 'test_chart', chart_data_path(name: 'test_data'), height: '200', width: '500', charttype: :line %>

Dataset inside html:

    <%= chartjs 'test_chart', @dataset_hash, height: '200', charttype: :pie %>

### Controller

Load GraphJs data with AJAX for two charts from a controller.

```ruby
  # GET /home/chart_data/:name
  def chart_data
    if params[:name] == 'content_data'
      graphjs = { id: params[:id] }
       graphjs[:dataset] = [{value: 300, label: "App"},
         {value: 140, label: "Software"},
         {value: 200, label: "Laptop"}]

    else
      graphjs = { id: params[:id], labels: %w(Jan Feb Mar Apr), datasets: [] }

      (1..3).each do |line|
        d = { label: "label #{line}", data: [] }

        (1..4).each do |datapoint|
          d[:data] <<  Random.new.rand(100)
        end

        graphjs[:datasets] << d
      end
    end

    respond_to do |format|
      format.json { render json: graphjs }
    end
  end
```

Send dataset into view directly with Hash:

```ruby
  def index
    @dataset_hash = {dataset: [
      {value: 300, label: "App"},
      {value: 140, label: "Software"},
      {value: 200, label: "Laptop"}
    ]}
  end
```
## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
