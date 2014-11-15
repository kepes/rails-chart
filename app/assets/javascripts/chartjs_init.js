//= require chartJs_defaults
$(document).ready(function() {
  $("canvas").each(function(k,v) {
    id = $(v).attr('id');
    dataset = $(v).attr('dataset');

    if (dataset) {
      $.getJSON( dataset, {id: id} )
        .done(function( json ) {
          // Small timeout to wait for final layout
          // without timeout chartjs may have wrong width or height
          setTimeout(function () {
            obj = $('canvas#' + json.id).get(0)
            charttype = $(obj).attr('charttype');

            options = $(obj).attr('options');
            if (typeof options == 'undefined') {
              options = {}
            } else {
              options = JSON.parse(options);
            }

            ctx = obj.getContext("2d");
            chart = new Chart(ctx)

            switch (charttype) {
              case 'bar':
                opts = chartjs_merge_datasets(json, options);
                chart.Bar(json, opts);
                break;
              case 'polararea':
                opts = chartjs_merge_one_dataset(json, options);
                chart.PolarArea(json.dataset, opts);
                break;
              case 'doughnut':
                opts = chartjs_merge_one_dataset(json, options);
                chart.Doughnut(json.dataset, opts);
                break;
              case 'pie':
                opts = chartjs_merge_one_dataset(json, options);
                chart.Pie(json.dataset, opts);
                break;
              case 'radar':
                opts = chartjs_merge_datasets(json, options);
                chart.Radar(json, opts);
                break;
              default:
                opts = chartjs_merge_datasets(json, options);
                chart.Line(json, opts);
                break;
            }
          }, 100);
        })
        .fail(function( jqxhr, textStatus, error ) {
          var err = textStatus + ", " + error;
          console.log( "Request Failed: " + err )
        });
    }
  });
});

function chartjs_merge_datasets(json, options) {
  $.each(json.datasets, function(k,v) {
    color = k%chartjs_default_dataset_colors.length;
    colors = {
      fillColor: chartjs_default_dataset_colors[color]['paint'],
      strokeColor: chartjs_default_dataset_colors[color]['stroke'],
      pointColor: chartjs_default_dataset_colors[color]['paint'],
      pointStrokeColor: chartjs_default_dataset_colors[color]['stroke'],
      pointHighlightFill: chartjs_default_dataset_colors[color]['highlight_paint'],
      pointHighlightStroke: chartjs_default_dataset_colors[color]['highlight_stroke']
    }
    json.datasets[k] = $.extend({}, chartjs_default_dataset_options, colors, json.datasets[k]);
  });
  return $.extend({}, chartjs_default_options, options);
}

function chartjs_merge_one_dataset(json, options) {
  $.each(json.dataset, function(k,v) {
    color = k%chartjs_default_dataset_colors.length;
    colors = {
      color: chartjs_default_dataset_colors[color]['paint'],
      highlight: chartjs_default_dataset_colors[color]['highlight_paint'],
    }
    json.dataset[k] = $.extend({}, colors, json.dataset[k]);
  });
  return $.extend({}, chartjs_default_options, options);
}
