# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'rails_chart/version'

Gem::Specification.new do |spec|
  spec.name          = "rails_chart"
  spec.version       = RailsChart::VERSION
  spec.authors       = ["Peter Kepes"]
  spec.email         = ["kepes.peter@codeplay.hu"]
  spec.description   = %q{Beautiful charts for Rails app with preconfigured Javascript, AJAX data load, clean HTML and helpers}
  spec.summary       = %q{Beautiful charts for Rails app}
  spec.homepage      = 'https://github.com/kepes/rails_chart'
  spec.license       = "MIT"

  spec.files         = `git ls-files`.split($/)
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.3"
  spec.add_development_dependency "rake"
end
