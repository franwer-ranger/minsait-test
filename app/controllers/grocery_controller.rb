class GroceryController < ApplicationController

  require 'net/http'
  require 'json'

  def index
    data = get_external_data
    render inertia: 'Grocery/Index', props: { products: data }
  end

  def get_external_data
    url = URI.parse('http://api:3001/grocery')
    response = Net::HTTP.get_response(url)
    JSON.parse(response.body)
  end
end