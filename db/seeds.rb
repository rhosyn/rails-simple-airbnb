puts 'Creating flats...'
flats = [
  {
    name: 'Light & Spacious Garden Flat London',
    address: '10 Clifton Gardens London W9 1DT',
    description: 'A lovely summer feel for this spacious garden flat. Two double bedrooms, open plan living area, large kitchen and a beautiful conservatory',
    price_per_night: 75,
    number_of_guests: 3
  },
  {
    name: 'Luxury Gold Coast Hinterland Villa',
    address: 'Mount Nathan, Queensland, Australia',
    description: 'Stunning views over the hinterland. Luxurious villa sleeping 10 persons in a loft style room. Property spreads over 10 acres. Horses and dogs are welcome. Hot tub with open fireplace and 25m lap pool equipped with a pavillion for dive in movies',
    price_per_night: 2750,
    number_of_guests: 10
  },
  {
    name: 'Loft studio in central Moscow',
    address: 'Central Moscow, Russia',
    description: 'A great studio in the central areal of Moscow suitable both for travellers and businessmen. It is fully equipped with all you might need and freshly renovated.',
    price_per_night: 100,
    number_of_guests: 2
  }
]
Flat.create!(flats)
puts 'Finished!'
