const sampleListings = [
  {
    "title": "Cozy Loft in Zermatt",
    "description": "A loft nestled in the heart of Zermatt, Switzerland. Perfect for travelers looking to soak in local culture and stunning views.",
    "image": {
      "filename": "intl_listingimage_1",
      "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
    },
    "price": 3500,
    "location": "Zermatt",
    "country": "Switzerland",
    "geometry": {
      "type": "Point",
      "coordinates": [
        7.7191,
        46.0007
      ]
    },
    "category": "Mountains"
  },
  {
    "title": "Charming Studio in Aspen",
    "description": "Escape to this beautiful studio in Aspen, USA, offering comfort, charm, and unforgettable scenery just steps away.",
    "image": {
      "filename": "intl_listingimage_2",
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    },
    "price": 3673,
    "location": "Aspen",
    "country": "USA",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.8375,
        39.1811
      ]
    },
    "category": "Mountains"
  },
  {
    "title": "Luxurious Bungalow in Chamonix",
    "description": "Experience the magic of Chamonix, France from this thoughtfully designed bungalow, ideal for a relaxing getaway.",
    "image": {
      "filename": "intl_listingimage_3",
      "url": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
    },
    "price": 3846,
    "location": "Chamonix",
    "country": "France",
    "geometry": {
      "type": "Point",
      "coordinates": [
        6.8594,
        45.9237
      ]
    },
    "category": "Mountains"
  },
  {
    "title": "Rustic Chalet in Queenstown",
    "description": "This chalet in Queenstown, New Zealand combines modern comfort with the natural beauty of its surroundings.",
    "image": {
      "filename": "intl_listingimage_4",
      "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
    },
    "price": 4019,
    "location": "Queenstown",
    "country": "New Zealand",
    "geometry": {
      "type": "Point",
      "coordinates": [
        168.6626,
        -45.0212
      ]
    },
    "category": "Mountains"
  },
  {
    "title": "Modern Suite in Banff",
    "description": "Wake up to incredible views in Banff, Canada. This suite is perfect for couples, families, or solo adventurers alike.",
    "image": {
      "filename": "intl_listingimage_5",
      "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
    },
    "price": 4192,
    "location": "Banff",
    "country": "Canada",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -115.5608,
        51.1984
      ]
    },
    "category": "Mountains"
  },
  {
    "title": "Serene Hideaway in Interlaken",
    "description": "Tucked away in Interlaken, Switzerland, this hideaway offers a rare mix of privacy, luxury, and adventure at your doorstep.",
    "image": {
      "filename": "intl_listingimage_6",
      "url": "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    },
    "price": 4365,
    "location": "Interlaken",
    "country": "Switzerland",
    "geometry": {
      "type": "Point",
      "coordinates": [
        7.8832,
        46.6663
      ]
    },
    "category": "Mountains"
  },
  {
    "title": "Elegant Manor in Innsbruck",
    "description": "A manor nestled in the heart of Innsbruck, Austria. Perfect for travelers looking to soak in local culture and stunning views.",
    "image": {
      "filename": "intl_listingimage_7",
      "url": "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
    },
    "price": 4538,
    "location": "Innsbruck",
    "country": "Austria",
    "geometry": {
      "type": "Point",
      "coordinates": [
        11.4341,
        47.2592
      ]
    },
    "category": "Mountains"
  },
  {
    "title": "Secluded House in Patagonia",
    "description": "Escape to this beautiful house in Patagonia, Argentina, offering comfort, charm, and unforgettable scenery just steps away.",
    "image": {
      "filename": "intl_listingimage_8",
      "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
    },
    "price": 4711,
    "location": "Patagonia",
    "country": "Argentina",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -71.33,
        -50.9423
      ]
    },
    "category": "Mountains"
  },
  {
    "title": "Breathtaking Apartment in Dolomites",
    "description": "Experience the magic of Dolomites, Italy from this thoughtfully designed apartment, ideal for a relaxing getaway.",
    "image": {
      "filename": "intl_listingimage_9",
      "url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9"
    },
    "price": 4884,
    "location": "Dolomites",
    "country": "Italy",
    "geometry": {
      "type": "Point",
      "coordinates": [
        11.83,
        46.4202
      ]
    },
    "category": "Mountains"
  },
  {
    "title": "Stunning Lodge in Whistler",
    "description": "This lodge in Whistler, Canada combines modern comfort with the natural beauty of its surroundings.",
    "image": {
      "filename": "intl_listingimage_10",
      "url": "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8"
    },
    "price": 5057,
    "location": "Whistler",
    "country": "Canada",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.9674,
        50.1363
      ]
    },
    "category": "Mountains"
  },
  {
    "title": "Peaceful Getaway in Nagano",
    "description": "Wake up to incredible views in Nagano, Japan. This getaway is perfect for couples, families, or solo adventurers alike.",
    "image": {
      "filename": "intl_listingimage_11",
      "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
    },
    "price": 5230,
    "location": "Nagano",
    "country": "Japan",
    "geometry": {
      "type": "Point",
      "coordinates": [
        138.181,
        36.6313
      ]
    },
    "category": "Mountains"
  },
  {
    "title": "Vibrant Penthouse in Verbier",
    "description": "Tucked away in Verbier, Switzerland, this penthouse offers a rare mix of privacy, luxury, and adventure at your doorstep.",
    "image": {
      "filename": "intl_listingimage_12",
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    },
    "price": 5403,
    "location": "Verbier",
    "country": "Switzerland",
    "geometry": {
      "type": "Point",
      "coordinates": [
        7.2386,
        46.0867
      ]
    },
    "category": "Mountains"
  },
  {
    "title": "Chic Cottage in Paris",
    "description": "A cottage nestled in the heart of Paris, France. Perfect for travelers looking to soak in local culture and stunning views.",
    "image": {
      "filename": "intl_listingimage_13",
      "url": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
    },
    "price": 5576,
    "location": "Paris",
    "country": "France",
    "geometry": {
      "type": "Point",
      "coordinates": [
        2.3722,
        48.8566
      ]
    },
    "category": "Iconic Cities"
  },
  {
    "title": "Idyllic Villa in New York",
    "description": "Escape to this beautiful villa in New York, USA, offering comfort, charm, and unforgettable scenery just steps away.",
    "image": {
      "filename": "intl_listingimage_14",
      "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
    },
    "price": 5749,
    "location": "New York",
    "country": "USA",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -73.9557,
        40.7584
      ]
    },
    "category": "Iconic Cities"
  },
  {
    "title": "Picturesque Retreat in Tokyo",
    "description": "Experience the magic of Tokyo, Japan from this thoughtfully designed retreat, ideal for a relaxing getaway.",
    "image": {
      "filename": "intl_listingimage_15",
      "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
    },
    "price": 5922,
    "location": "Tokyo",
    "country": "Japan",
    "geometry": {
      "type": "Point",
      "coordinates": [
        139.6617,
        35.7095
      ]
    },
    "category": "Iconic Cities"
  },
  {
    "title": "Enchanting Cabin in Rome",
    "description": "This cabin in Rome, Italy combines modern comfort with the natural beauty of its surroundings.",
    "image": {
      "filename": "intl_listingimage_16",
      "url": "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    },
    "price": 6095,
    "location": "Rome",
    "country": "Italy",
    "geometry": {
      "type": "Point",
      "coordinates": [
        12.4764,
        41.8828
      ]
    },
    "category": "Iconic Cities"
  },
  {
    "title": "Majestic Loft in Barcelona",
    "description": "Wake up to incredible views in Barcelona, Spain. This loft is perfect for couples, families, or solo adventurers alike.",
    "image": {
      "filename": "intl_listingimage_17",
      "url": "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
    },
    "price": 6268,
    "location": "Barcelona",
    "country": "Spain",
    "geometry": {
      "type": "Point",
      "coordinates": [
        2.1634,
        41.3751
      ]
    },
    "category": "Iconic Cities"
  },
  {
    "title": "Cozy Studio in Dubai",
    "description": "Tucked away in Dubai, UAE, this studio offers a rare mix of privacy, luxury, and adventure at your doorstep.",
    "image": {
      "filename": "intl_listingimage_18",
      "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
    },
    "price": 6441,
    "location": "Dubai",
    "country": "UAE",
    "geometry": {
      "type": "Point",
      "coordinates": [
        55.2708,
        25.2048
      ]
    },
    "category": "Iconic Cities"
  },
  {
    "title": "Charming Bungalow in London",
    "description": "A bungalow nestled in the heart of London, United Kingdom. Perfect for travelers looking to soak in local culture and stunning views.",
    "image": {
      "filename": "intl_listingimage_19",
      "url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9"
    },
    "price": 6614,
    "location": "London",
    "country": "United Kingdom",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -0.1176,
        51.5174
      ]
    },
    "category": "Iconic Cities"
  },
  {
    "title": "Luxurious Chalet in Singapore",
    "description": "Escape to this beautiful chalet in Singapore, Singapore, offering comfort, charm, and unforgettable scenery just steps away.",
    "image": {
      "filename": "intl_listingimage_20",
      "url": "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8"
    },
    "price": 6787,
    "location": "Singapore",
    "country": "Singapore",
    "geometry": {
      "type": "Point",
      "coordinates": [
        103.8398,
        1.3721
      ]
    },
    "category": "Iconic Cities"
  },
  {
    "title": "Rustic Suite in Prague",
    "description": "Experience the magic of Prague, Czech Republic from this thoughtfully designed suite, ideal for a relaxing getaway.",
    "image": {
      "filename": "intl_listingimage_21",
      "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
    },
    "price": 6960,
    "location": "Prague",
    "country": "Czech Republic",
    "geometry": {
      "type": "Point",
      "coordinates": [
        14.4678,
        50.0555
      ]
    },
    "category": "Iconic Cities"
  },
  {
    "title": "Modern Hideaway in Istanbul",
    "description": "This hideaway in Istanbul, Turkey combines modern comfort with the natural beauty of its surroundings.",
    "image": {
      "filename": "intl_listingimage_22",
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    },
    "price": 7133,
    "location": "Istanbul",
    "country": "Turkey",
    "geometry": {
      "type": "Point",
      "coordinates": [
        28.9484,
        40.9982
      ]
    },
    "category": "Iconic Cities"
  },
  {
    "title": "Serene Manor in Marrakech",
    "description": "Wake up to incredible views in Marrakech, Morocco. This manor is perfect for couples, families, or solo adventurers alike.",
    "image": {
      "filename": "intl_listingimage_23",
      "url": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
    },
    "price": 7306,
    "location": "Marrakech",
    "country": "Morocco",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -8.0011,
        31.6295
      ]
    },
    "category": "Iconic Cities"
  },
  {
    "title": "Elegant House in Bangkok",
    "description": "Tucked away in Bangkok, Thailand, this house offers a rare mix of privacy, luxury, and adventure at your doorstep.",
    "image": {
      "filename": "intl_listingimage_24",
      "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
    },
    "price": 7479,
    "location": "Bangkok",
    "country": "Thailand",
    "geometry": {
      "type": "Point",
      "coordinates": [
        100.4918,
        13.7663
      ]
    },
    "category": "Iconic Cities"
  },
  {
    "title": "Secluded Apartment in Vienna",
    "description": "A apartment nestled in the heart of Vienna, Austria. Perfect for travelers looking to soak in local culture and stunning views.",
    "image": {
      "filename": "intl_listingimage_25",
      "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
    },
    "price": 7652,
    "location": "Vienna",
    "country": "Austria",
    "geometry": {
      "type": "Point",
      "coordinates": [
        16.3738,
        48.2282
      ]
    },
    "category": "Iconic Cities"
  },
  {
    "title": "Breathtaking Lodge in Hong Kong",
    "description": "Escape to this beautiful lodge in Hong Kong, China, offering comfort, charm, and unforgettable scenery just steps away.",
    "image": {
      "filename": "intl_listingimage_26",
      "url": "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    },
    "price": 7825,
    "location": "Hong Kong",
    "country": "China",
    "geometry": {
      "type": "Point",
      "coordinates": [
        114.1794,
        22.2993
      ]
    },
    "category": "Iconic Cities"
  },
  {
    "title": "Stunning Getaway in Sydney",
    "description": "Experience the magic of Sydney, Australia from this thoughtfully designed getaway, ideal for a relaxing getaway.",
    "image": {
      "filename": "intl_listingimage_27",
      "url": "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
    },
    "price": 7998,
    "location": "Sydney",
    "country": "Australia",
    "geometry": {
      "type": "Point",
      "coordinates": [
        151.2293,
        -33.8788
      ]
    },
    "category": "Iconic Cities"
  },
  {
    "title": "Peaceful Penthouse in Seoul",
    "description": "This penthouse in Seoul, South Korea combines modern comfort with the natural beauty of its surroundings.",
    "image": {
      "filename": "intl_listingimage_28",
      "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
    },
    "price": 8171,
    "location": "Seoul",
    "country": "South Korea",
    "geometry": {
      "type": "Point",
      "coordinates": [
        127.008,
        37.5665
      ]
    },
    "category": "Iconic Cities"
  },
  {
    "title": "Vibrant Cottage in Neuschwanstein",
    "description": "Wake up to incredible views in Neuschwanstein, Germany. This cottage is perfect for couples, families, or solo adventurers alike.",
    "image": {
      "filename": "intl_listingimage_29",
      "url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9"
    },
    "price": 8344,
    "location": "Neuschwanstein",
    "country": "Germany",
    "geometry": {
      "type": "Point",
      "coordinates": [
        10.7198,
        47.5676
      ]
    },
    "category": "Castles"
  },
  {
    "title": "Chic Villa in Edinburgh",
    "description": "Tucked away in Edinburgh, United Kingdom, this villa offers a rare mix of privacy, luxury, and adventure at your doorstep.",
    "image": {
      "filename": "intl_listingimage_30",
      "url": "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8"
    },
    "price": 8517,
    "location": "Edinburgh",
    "country": "United Kingdom",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -3.2083,
        55.9733
      ]
    },
    "category": "Castles"
  },
  {
    "title": "Idyllic Retreat in Loire Valley",
    "description": "A retreat nestled in the heart of Loire Valley, France. Perfect for travelers looking to soak in local culture and stunning views.",
    "image": {
      "filename": "intl_listingimage_31",
      "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
    },
    "price": 8690,
    "location": "Loire Valley",
    "country": "France",
    "geometry": {
      "type": "Point",
      "coordinates": [
        0.6789,
        47.5743
      ]
    },
    "category": "Castles"
  },
  {
    "title": "Picturesque Cabin in Bran",
    "description": "Escape to this beautiful cabin in Bran, Romania, offering comfort, charm, and unforgettable scenery just steps away.",
    "image": {
      "filename": "intl_listingimage_32",
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    },
    "price": 8863,
    "location": "Bran",
    "country": "Romania",
    "geometry": {
      "type": "Point",
      "coordinates": [
        25.3672,
        45.5049
      ]
    },
    "category": "Castles"
  },
  {
    "title": "Enchanting Loft in Windsor",
    "description": "Experience the magic of Windsor, United Kingdom from this thoughtfully designed loft, ideal for a relaxing getaway.",
    "image": {
      "filename": "intl_listingimage_33",
      "url": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
    },
    "price": 9036,
    "location": "Windsor",
    "country": "United Kingdom",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -0.5998,
        51.4839
      ]
    },
    "category": "Castles"
  },
  {
    "title": "Majestic Studio in Alnwick",
    "description": "This studio in Alnwick, United Kingdom combines modern comfort with the natural beauty of its surroundings.",
    "image": {
      "filename": "intl_listingimage_34",
      "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
    },
    "price": 9209,
    "location": "Alnwick",
    "country": "United Kingdom",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -1.6848,
        55.4253
      ]
    },
    "category": "Castles"
  },
  {
    "title": "Cozy Bungalow in Hohenzollern",
    "description": "Wake up to incredible views in Hohenzollern, Germany. This bungalow is perfect for couples, families, or solo adventurers alike.",
    "image": {
      "filename": "intl_listingimage_35",
      "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
    },
    "price": 9382,
    "location": "Hohenzollern",
    "country": "Germany",
    "geometry": {
      "type": "Point",
      "coordinates": [
        8.9979,
        48.3435
      ]
    },
    "category": "Castles"
  },
  {
    "title": "Charming Chalet in Bled",
    "description": "Tucked away in Bled, Slovenia, this chalet offers a rare mix of privacy, luxury, and adventure at your doorstep.",
    "image": {
      "filename": "intl_listingimage_36",
      "url": "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    },
    "price": 9555,
    "location": "Bled",
    "country": "Slovenia",
    "geometry": {
      "type": "Point",
      "coordinates": [
        14.0846,
        46.3483
      ]
    },
    "category": "Castles"
  },
  {
    "title": "Luxurious Suite in Chambord",
    "description": "A suite nestled in the heart of Chambord, France. Perfect for travelers looking to soak in local culture and stunning views.",
    "image": {
      "filename": "intl_listingimage_37",
      "url": "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
    },
    "price": 9728,
    "location": "Chambord",
    "country": "France",
    "geometry": {
      "type": "Point",
      "coordinates": [
        1.4969,
        47.6061
      ]
    },
    "category": "Castles"
  },
  {
    "title": "Rustic Hideaway in Segovia",
    "description": "Escape to this beautiful hideaway in Segovia, Spain, offering comfort, charm, and unforgettable scenery just steps away.",
    "image": {
      "filename": "intl_listingimage_38",
      "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
    },
    "price": 9901,
    "location": "Segovia",
    "country": "Spain",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -4.1281,
        40.9429
      ]
    },
    "category": "Castles"
  },
  {
    "title": "Modern Manor in Santorini",
    "description": "Experience the magic of Santorini, Greece from this thoughtfully designed manor, ideal for a relaxing getaway.",
    "image": {
      "filename": "intl_listingimage_39",
      "url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9"
    },
    "price": 10074,
    "location": "Santorini",
    "country": "Greece",
    "geometry": {
      "type": "Point",
      "coordinates": [
        25.4615,
        36.4032
      ]
    },
    "category": "Amazing Pools"
  },
  {
    "title": "Serene House in Ibiza",
    "description": "This house in Ibiza, Spain combines modern comfort with the natural beauty of its surroundings.",
    "image": {
      "filename": "intl_listingimage_40",
      "url": "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8"
    },
    "price": 10247,
    "location": "Ibiza",
    "country": "Spain",
    "geometry": {
      "type": "Point",
      "coordinates": [
        1.4306,
        38.9267
      ]
    },
    "category": "Amazing Pools"
  },
  {
    "title": "Elegant Apartment in Cancun",
    "description": "Wake up to incredible views in Cancun, Mexico. This apartment is perfect for couples, families, or solo adventurers alike.",
    "image": {
      "filename": "intl_listingimage_41",
      "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
    },
    "price": 10420,
    "location": "Cancun",
    "country": "Mexico",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -86.8315,
        21.1419
      ]
    },
    "category": "Amazing Pools"
  },
  {
    "title": "Secluded Lodge in Phuket",
    "description": "Tucked away in Phuket, Thailand, this lodge offers a rare mix of privacy, luxury, and adventure at your doorstep.",
    "image": {
      "filename": "intl_listingimage_42",
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    },
    "price": 10593,
    "location": "Phuket",
    "country": "Thailand",
    "geometry": {
      "type": "Point",
      "coordinates": [
        98.4223,
        7.8704
      ]
    },
    "category": "Amazing Pools"
  },
  {
    "title": "Breathtaking Getaway in Maldives",
    "description": "A getaway nestled in the heart of Maldives, Maldives. Perfect for travelers looking to soak in local culture and stunning views.",
    "image": {
      "filename": "intl_listingimage_43",
      "url": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
    },
    "price": 10766,
    "location": "Maldives",
    "country": "Maldives",
    "geometry": {
      "type": "Point",
      "coordinates": [
        73.1907,
        3.2028
      ]
    },
    "category": "Amazing Pools"
  },
  {
    "title": "Stunning Penthouse in Marbella",
    "description": "Escape to this beautiful penthouse in Marbella, Spain, offering comfort, charm, and unforgettable scenery just steps away.",
    "image": {
      "filename": "intl_listingimage_44",
      "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
    },
    "price": 10939,
    "location": "Marbella",
    "country": "Spain",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -4.905,
        36.5199
      ]
    },
    "category": "Amazing Pools"
  },
  {
    "title": "Peaceful Cottage in Bali",
    "description": "Experience the magic of Bali, Indonesia from this thoughtfully designed cottage, ideal for a relaxing getaway.",
    "image": {
      "filename": "intl_listingimage_45",
      "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
    },
    "price": 11112,
    "location": "Bali",
    "country": "Indonesia",
    "geometry": {
      "type": "Point",
      "coordinates": [
        115.1789,
        -8.3895
      ]
    },
    "category": "Amazing Pools"
  },
  {
    "title": "Vibrant Villa in Mykonos",
    "description": "This villa in Mykonos, Greece combines modern comfort with the natural beauty of its surroundings.",
    "image": {
      "filename": "intl_listingimage_46",
      "url": "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    },
    "price": 11285,
    "location": "Mykonos",
    "country": "Greece",
    "geometry": {
      "type": "Point",
      "coordinates": [
        25.3289,
        37.4267
      ]
    },
    "category": "Amazing Pools"
  },
  {
    "title": "Chic Retreat in Los Cabos",
    "description": "Wake up to incredible views in Los Cabos, Mexico. This retreat is perfect for couples, families, or solo adventurers alike.",
    "image": {
      "filename": "intl_listingimage_47",
      "url": "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
    },
    "price": 11458,
    "location": "Los Cabos",
    "country": "Mexico",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.9067,
        22.8805
      ]
    },
    "category": "Amazing Pools"
  },
  {
    "title": "Idyllic Cabin in Positano",
    "description": "Tucked away in Positano, Italy, this cabin offers a rare mix of privacy, luxury, and adventure at your doorstep.",
    "image": {
      "filename": "intl_listingimage_48",
      "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
    },
    "price": 11631,
    "location": "Positano",
    "country": "Italy",
    "geometry": {
      "type": "Point",
      "coordinates": [
        14.5049,
        40.628
      ]
    },
    "category": "Amazing Pools"
  },
  {
    "title": "Picturesque Loft in Yosemite",
    "description": "A loft nestled in the heart of Yosemite, USA. Perfect for travelers looking to soak in local culture and stunning views.",
    "image": {
      "filename": "intl_listingimage_49",
      "url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9"
    },
    "price": 11804,
    "location": "Yosemite",
    "country": "USA",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -119.5083,
        37.8751
      ]
    },
    "category": "Camping"
  },
  {
    "title": "Enchanting Studio in Lake District",
    "description": "Escape to this beautiful studio in Lake District, United Kingdom, offering comfort, charm, and unforgettable scenery just steps away.",
    "image": {
      "filename": "intl_listingimage_50",
      "url": "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8"
    },
    "price": 11977,
    "location": "Lake District",
    "country": "United Kingdom",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -3.1672,
        54.4809
      ]
    },
    "category": "Camping"
  },
  {
    "title": "Majestic Bungalow in Moab",
    "description": "Experience the magic of Moab, USA from this thoughtfully designed bungalow, ideal for a relaxing getaway.",
    "image": {
      "filename": "intl_listingimage_51",
      "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
    },
    "price": 12150,
    "location": "Moab",
    "country": "USA",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.5698,
        38.5533
      ]
    },
    "category": "Camping"
  },
  {
    "title": "Cozy Chalet in Torres del Paine",
    "description": "This chalet in Torres del Paine, Chile combines modern comfort with the natural beauty of its surroundings.",
    "image": {
      "filename": "intl_listingimage_52",
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    },
    "price": 12323,
    "location": "Torres del Paine",
    "country": "Chile",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -73.0492,
        -51.01
      ]
    },
    "category": "Camping"
  },
  {
    "title": "Charming Suite in Kruger",
    "description": "Wake up to incredible views in Kruger, South Africa. This suite is perfect for couples, families, or solo adventurers alike.",
    "image": {
      "filename": "intl_listingimage_53",
      "url": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
    },
    "price": 12496,
    "location": "Kruger",
    "country": "South Africa",
    "geometry": {
      "type": "Point",
      "coordinates": [
        31.5547,
        -24.9947
      ]
    },
    "category": "Camping"
  },
  {
    "title": "Luxurious Hideaway in Great Barrier Reef",
    "description": "Tucked away in Great Barrier Reef, Australia, this hideaway offers a rare mix of privacy, luxury, and adventure at your doorstep.",
    "image": {
      "filename": "intl_listingimage_54",
      "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
    },
    "price": 12669,
    "location": "Great Barrier Reef",
    "country": "Australia",
    "geometry": {
      "type": "Point",
      "coordinates": [
        145.71,
        -18.2771
      ]
    },
    "category": "Camping"
  },
  {
    "title": "Rustic Manor in Serengeti",
    "description": "A manor nestled in the heart of Serengeti, Tanzania. Perfect for travelers looking to soak in local culture and stunning views.",
    "image": {
      "filename": "intl_listingimage_55",
      "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
    },
    "price": 12842,
    "location": "Serengeti",
    "country": "Tanzania",
    "geometry": {
      "type": "Point",
      "coordinates": [
        34.8533,
        -2.3133
      ]
    },
    "category": "Camping"
  },
  {
    "title": "Modern House in Jasper",
    "description": "Escape to this beautiful house in Jasper, Canada, offering comfort, charm, and unforgettable scenery just steps away.",
    "image": {
      "filename": "intl_listingimage_56",
      "url": "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    },
    "price": 13015,
    "location": "Jasper",
    "country": "Canada",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -118.0408,
        52.8537
      ]
    },
    "category": "Camping"
  },
  {
    "title": "Serene Apartment in Fiordland",
    "description": "Experience the magic of Fiordland, New Zealand from this thoughtfully designed apartment, ideal for a relaxing getaway.",
    "image": {
      "filename": "intl_listingimage_57",
      "url": "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
    },
    "price": 13188,
    "location": "Fiordland",
    "country": "New Zealand",
    "geometry": {
      "type": "Point",
      "coordinates": [
        167.7033,
        -45.4267
      ]
    },
    "category": "Camping"
  },
  {
    "title": "Elegant Lodge in Black Forest",
    "description": "This lodge in Black Forest, Germany combines modern comfort with the natural beauty of its surroundings.",
    "image": {
      "filename": "intl_listingimage_58",
      "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
    },
    "price": 13361,
    "location": "Black Forest",
    "country": "Germany",
    "geometry": {
      "type": "Point",
      "coordinates": [
        8.18,
        48.2
      ]
    },
    "category": "Camping"
  },
  {
    "title": "Secluded Getaway in Tuscany",
    "description": "Wake up to incredible views in Tuscany, Italy. This getaway is perfect for couples, families, or solo adventurers alike.",
    "image": {
      "filename": "intl_listingimage_59",
      "url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9"
    },
    "price": 13534,
    "location": "Tuscany",
    "country": "Italy",
    "geometry": {
      "type": "Point",
      "coordinates": [
        11.0923,
        43.7811
      ]
    },
    "category": "Farms"
  },
  {
    "title": "Breathtaking Penthouse in Provence",
    "description": "Tucked away in Provence, France, this penthouse offers a rare mix of privacy, luxury, and adventure at your doorstep.",
    "image": {
      "filename": "intl_listingimage_60",
      "url": "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8"
    },
    "price": 13707,
    "location": "Provence",
    "country": "France",
    "geometry": {
      "type": "Point",
      "coordinates": [
        5.4474,
        43.9552
      ]
    },
    "category": "Farms"
  },
  {
    "title": "Stunning Cottage in Napa Valley",
    "description": "A cottage nestled in the heart of Napa Valley, USA. Perfect for travelers looking to soak in local culture and stunning views.",
    "image": {
      "filename": "intl_listingimage_61",
      "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
    },
    "price": 13880,
    "location": "Napa Valley",
    "country": "USA",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.2769,
        38.4825
      ]
    },
    "category": "Farms"
  },
  {
    "title": "Peaceful Villa in Cotswolds",
    "description": "Escape to this beautiful villa in Cotswolds, United Kingdom, offering comfort, charm, and unforgettable scenery just steps away.",
    "image": {
      "filename": "intl_listingimage_62",
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    },
    "price": 14053,
    "location": "Cotswolds",
    "country": "United Kingdom",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -1.8597,
        51.823
      ]
    },
    "category": "Farms"
  },
  {
    "title": "Vibrant Retreat in Mendoza",
    "description": "Experience the magic of Mendoza, Argentina from this thoughtfully designed retreat, ideal for a relaxing getaway.",
    "image": {
      "filename": "intl_listingimage_63",
      "url": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
    },
    "price": 14226,
    "location": "Mendoza",
    "country": "Argentina",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -68.7972,
        -32.8908
      ]
    },
    "category": "Farms"
  },
  {
    "title": "Chic Cabin in Yorkshire Dales",
    "description": "This cabin in Yorkshire Dales, United Kingdom combines modern comfort with the natural beauty of its surroundings.",
    "image": {
      "filename": "intl_listingimage_64",
      "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
    },
    "price": 14399,
    "location": "Yorkshire Dales",
    "country": "United Kingdom",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -2.19,
        54.2461
      ]
    },
    "category": "Farms"
  },
  {
    "title": "Idyllic Loft in Stellenbosch",
    "description": "Wake up to incredible views in Stellenbosch, South Africa. This loft is perfect for couples, families, or solo adventurers alike.",
    "image": {
      "filename": "intl_listingimage_65",
      "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
    },
    "price": 14572,
    "location": "Stellenbosch",
    "country": "South Africa",
    "geometry": {
      "type": "Point",
      "coordinates": [
        18.8402,
        -33.9121
      ]
    },
    "category": "Farms"
  },
  {
    "title": "Picturesque Studio in Marlborough",
    "description": "Tucked away in Marlborough, New Zealand, this studio offers a rare mix of privacy, luxury, and adventure at your doorstep.",
    "image": {
      "filename": "intl_listingimage_66",
      "url": "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    },
    "price": 14745,
    "location": "Marlborough",
    "country": "New Zealand",
    "geometry": {
      "type": "Point",
      "coordinates": [
        173.95,
        -41.5333
      ]
    },
    "category": "Farms"
  },
  {
    "title": "Enchanting Bungalow in Douro Valley",
    "description": "A bungalow nestled in the heart of Douro Valley, Portugal. Perfect for travelers looking to soak in local culture and stunning views.",
    "image": {
      "filename": "intl_listingimage_67",
      "url": "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
    },
    "price": 14918,
    "location": "Douro Valley",
    "country": "Portugal",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -7.7833,
        41.1567
      ]
    },
    "category": "Farms"
  },
  {
    "title": "Majestic Chalet in Loire Farms",
    "description": "Escape to this beautiful chalet in Loire Farms, France, offering comfort, charm, and unforgettable scenery just steps away.",
    "image": {
      "filename": "intl_listingimage_68",
      "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
    },
    "price": 15091,
    "location": "Loire Farms",
    "country": "France",
    "geometry": {
      "type": "Point",
      "coordinates": [
        0.3492,
        47.39
      ]
    },
    "category": "Farms"
  },
  {
    "title": "Cozy Suite in Tromso",
    "description": "Experience the magic of Tromso, Norway from this thoughtfully designed suite, ideal for a relaxing getaway.",
    "image": {
      "filename": "intl_listingimage_69",
      "url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9"
    },
    "price": 15264,
    "location": "Tromso",
    "country": "Norway",
    "geometry": {
      "type": "Point",
      "coordinates": [
        18.9753,
        69.6592
      ]
    },
    "category": "Arctic"
  },
  {
    "title": "Charming Hideaway in Svalbard",
    "description": "This hideaway in Svalbard, Norway combines modern comfort with the natural beauty of its surroundings.",
    "image": {
      "filename": "intl_listingimage_70",
      "url": "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8"
    },
    "price": 15437,
    "location": "Svalbard",
    "country": "Norway",
    "geometry": {
      "type": "Point",
      "coordinates": [
        15.6649,
        78.2432
      ]
    },
    "category": "Arctic"
  },
  {
    "title": "Luxurious Manor in Reykjavik",
    "description": "Wake up to incredible views in Reykjavik, Iceland. This manor is perfect for couples, families, or solo adventurers alike.",
    "image": {
      "filename": "intl_listingimage_71",
      "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
    },
    "price": 15610,
    "location": "Reykjavik",
    "country": "Iceland",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -21.8474,
        64.1065
      ]
    },
    "category": "Arctic"
  },
  {
    "title": "Rustic House in Rovaniemi",
    "description": "Tucked away in Rovaniemi, Finland, this house offers a rare mix of privacy, luxury, and adventure at your doorstep.",
    "image": {
      "filename": "intl_listingimage_72",
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    },
    "price": 15783,
    "location": "Rovaniemi",
    "country": "Finland",
    "geometry": {
      "type": "Point",
      "coordinates": [
        25.7282,
        66.4939
      ]
    },
    "category": "Arctic"
  },
  {
    "title": "Modern Apartment in Yellowknife",
    "description": "A apartment nestled in the heart of Yellowknife, Canada. Perfect for travelers looking to soak in local culture and stunning views.",
    "image": {
      "filename": "intl_listingimage_73",
      "url": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
    },
    "price": 15956,
    "location": "Yellowknife",
    "country": "Canada",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.3818,
        62.454
      ]
    },
    "category": "Arctic"
  },
  {
    "title": "Serene Lodge in Fairbanks",
    "description": "Escape to this beautiful lodge in Fairbanks, USA, offering comfort, charm, and unforgettable scenery just steps away.",
    "image": {
      "filename": "intl_listingimage_74",
      "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
    },
    "price": 16129,
    "location": "Fairbanks",
    "country": "USA",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -147.7164,
        64.8478
      ]
    },
    "category": "Arctic"
  },
  {
    "title": "Elegant Getaway in Ilulissat",
    "description": "Experience the magic of Ilulissat, Greenland from this thoughtfully designed getaway, ideal for a relaxing getaway.",
    "image": {
      "filename": "intl_listingimage_75",
      "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
    },
    "price": 16302,
    "location": "Ilulissat",
    "country": "Greenland",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -51.09,
        69.2367
      ]
    },
    "category": "Arctic"
  },
  {
    "title": "Secluded Penthouse in Abisko",
    "description": "This penthouse in Abisko, Sweden combines modern comfort with the natural beauty of its surroundings.",
    "image": {
      "filename": "intl_listingimage_76",
      "url": "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    },
    "price": 16475,
    "location": "Abisko",
    "country": "Sweden",
    "geometry": {
      "type": "Point",
      "coordinates": [
        18.8486,
        68.3294
      ]
    },
    "category": "Arctic"
  },
  {
    "title": "Breathtaking Cottage in Amsterdam",
    "description": "Wake up to incredible views in Amsterdam, Netherlands. This cottage is perfect for couples, families, or solo adventurers alike.",
    "image": {
      "filename": "intl_listingimage_77",
      "url": "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
    },
    "price": 16648,
    "location": "Amsterdam",
    "country": "Netherlands",
    "geometry": {
      "type": "Point",
      "coordinates": [
        4.9341,
        52.3576
      ]
    },
    "category": "Rooms"
  },
  {
    "title": "Stunning Villa in Lisbon",
    "description": "Tucked away in Lisbon, Portugal, this villa offers a rare mix of privacy, luxury, and adventure at your doorstep.",
    "image": {
      "filename": "intl_listingimage_78",
      "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
    },
    "price": 16821,
    "location": "Lisbon",
    "country": "Portugal",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -9.1693,
        38.7223
      ]
    },
    "category": "Rooms"
  },
  {
    "title": "Peaceful Retreat in Berlin",
    "description": "A retreat nestled in the heart of Berlin, Germany. Perfect for travelers looking to soak in local culture and stunning views.",
    "image": {
      "filename": "intl_listingimage_79",
      "url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9"
    },
    "price": 16994,
    "location": "Berlin",
    "country": "Germany",
    "geometry": {
      "type": "Point",
      "coordinates": [
        13.385,
        52.53
      ]
    },
    "category": "Rooms"
  },
  {
    "title": "Vibrant Cabin in Kyiv",
    "description": "Escape to this beautiful cabin in Kyiv, Ukraine, offering comfort, charm, and unforgettable scenery just steps away.",
    "image": {
      "filename": "intl_listingimage_80",
      "url": "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8"
    },
    "price": 17167,
    "location": "Kyiv",
    "country": "Ukraine",
    "geometry": {
      "type": "Point",
      "coordinates": [
        30.5138,
        50.4701
      ]
    },
    "category": "Rooms"
  },
  {
    "title": "Chic Loft in Toronto",
    "description": "Experience the magic of Toronto, Canada from this thoughtfully designed loft, ideal for a relaxing getaway.",
    "image": {
      "filename": "intl_listingimage_81",
      "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
    },
    "price": 17340,
    "location": "Toronto",
    "country": "Canada",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -79.3832,
        43.6332
      ]
    },
    "category": "Rooms"
  },
  {
    "title": "Idyllic Studio in Copenhagen",
    "description": "This studio in Copenhagen, Denmark combines modern comfort with the natural beauty of its surroundings.",
    "image": {
      "filename": "intl_listingimage_82",
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    },
    "price": 17513,
    "location": "Copenhagen",
    "country": "Denmark",
    "geometry": {
      "type": "Point",
      "coordinates": [
        12.5783,
        55.6661
      ]
    },
    "category": "Rooms"
  },
  {
    "title": "Picturesque Bungalow in Brussels",
    "description": "Wake up to incredible views in Brussels, Belgium. This bungalow is perfect for couples, families, or solo adventurers alike.",
    "image": {
      "filename": "intl_listingimage_83",
      "url": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
    },
    "price": 17686,
    "location": "Brussels",
    "country": "Belgium",
    "geometry": {
      "type": "Point",
      "coordinates": [
        4.3717,
        50.8503
      ]
    },
    "category": "Rooms"
  },
  {
    "title": "Enchanting Chalet in Budapest",
    "description": "Tucked away in Budapest, Hungary, this chalet offers a rare mix of privacy, luxury, and adventure at your doorstep.",
    "image": {
      "filename": "intl_listingimage_84",
      "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
    },
    "price": 17859,
    "location": "Budapest",
    "country": "Hungary",
    "geometry": {
      "type": "Point",
      "coordinates": [
        19.0702,
        47.5079
      ]
    },
    "category": "Rooms"
  },
  {
    "title": "Majestic Suite in Zurich",
    "description": "A suite nestled in the heart of Zurich, Switzerland. Perfect for travelers looking to soak in local culture and stunning views.",
    "image": {
      "filename": "intl_listingimage_85",
      "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
    },
    "price": 18032,
    "location": "Zurich",
    "country": "Switzerland",
    "geometry": {
      "type": "Point",
      "coordinates": [
        8.5117,
        47.3969
      ]
    },
    "category": "Rooms"
  },
  {
    "title": "Cozy Hideaway in Helsinki",
    "description": "Escape to this beautiful hideaway in Helsinki, Finland, offering comfort, charm, and unforgettable scenery just steps away.",
    "image": {
      "filename": "intl_listingimage_86",
      "url": "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    },
    "price": 18205,
    "location": "Helsinki",
    "country": "Finland",
    "geometry": {
      "type": "Point",
      "coordinates": [
        24.9184,
        60.1499
      ]
    },
    "category": "Rooms"
  },
  {
    "title": "Charming Manor in Bora Bora",
    "description": "Experience the magic of Bora Bora, French Polynesia from this thoughtfully designed manor, ideal for a relaxing getaway.",
    "image": {
      "filename": "intl_listingimage_87",
      "url": "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
    },
    "price": 18378,
    "location": "Bora Bora",
    "country": "French Polynesia",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -151.7515,
        -16.5104
      ]
    },
    "category": "Trending"
  },
  {
    "title": "Luxurious House in Cape Town",
    "description": "This house in Cape Town, South Africa combines modern comfort with the natural beauty of its surroundings.",
    "image": {
      "filename": "intl_listingimage_88",
      "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
    },
    "price": 18551,
    "location": "Cape Town",
    "country": "South Africa",
    "geometry": {
      "type": "Point",
      "coordinates": [
        18.4241,
        -33.9249
      ]
    },
    "category": "Trending"
  },
  {
    "title": "Rustic Apartment in Rio de Janeiro",
    "description": "Wake up to incredible views in Rio de Janeiro, Brazil. This apartment is perfect for couples, families, or solo adventurers alike.",
    "image": {
      "filename": "intl_listingimage_89",
      "url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9"
    },
    "price": 18724,
    "location": "Rio de Janeiro",
    "country": "Brazil",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -43.1629,
        -22.8968
      ]
    },
    "category": "Trending"
  },
  {
    "title": "Modern Lodge in Lake Como",
    "description": "Tucked away in Lake Como, Italy, this lodge offers a rare mix of privacy, luxury, and adventure at your doorstep.",
    "image": {
      "filename": "intl_listingimage_90",
      "url": "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8"
    },
    "price": 18897,
    "location": "Lake Como",
    "country": "Italy",
    "geometry": {
      "type": "Point",
      "coordinates": [
        9.2771,
        46.011
      ]
    },
    "category": "Trending"
  },
  {
    "title": "Serene Getaway in Kyoto",
    "description": "A getaway nestled in the heart of Kyoto, Japan. Perfect for travelers looking to soak in local culture and stunning views.",
    "image": {
      "filename": "intl_listingimage_91",
      "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
    },
    "price": 19070,
    "location": "Kyoto",
    "country": "Japan",
    "geometry": {
      "type": "Point",
      "coordinates": [
        135.7981,
        34.9916
      ]
    },
    "category": "Trending"
  },
  {
    "title": "Elegant Penthouse in Amalfi Coast",
    "description": "Escape to this beautiful penthouse in Amalfi Coast, Italy, offering comfort, charm, and unforgettable scenery just steps away.",
    "image": {
      "filename": "intl_listingimage_92",
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    },
    "price": 19243,
    "location": "Amalfi Coast",
    "country": "Italy",
    "geometry": {
      "type": "Point",
      "coordinates": [
        14.5727,
        40.624
      ]
    },
    "category": "Trending"
  },
  {
    "title": "Secluded Cottage in Queenstown Lakefront",
    "description": "Experience the magic of Queenstown Lakefront, New Zealand from this thoughtfully designed cottage, ideal for a relaxing getaway.",
    "image": {
      "filename": "intl_listingimage_93",
      "url": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
    },
    "price": 19416,
    "location": "Queenstown Lakefront",
    "country": "New Zealand",
    "geometry": {
      "type": "Point",
      "coordinates": [
        168.6426,
        -45.0312
      ]
    },
    "category": "Trending"
  },
  {
    "title": "Breathtaking Villa in Seychelles",
    "description": "This villa in Seychelles, Seychelles combines modern comfort with the natural beauty of its surroundings.",
    "image": {
      "filename": "intl_listingimage_94",
      "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
    },
    "price": 19589,
    "location": "Seychelles",
    "country": "Seychelles",
    "geometry": {
      "type": "Point",
      "coordinates": [
        55.482,
        -4.6696
      ]
    },
    "category": "Trending"
  },
  {
    "title": "Stunning Retreat in Zermatt",
    "description": "Wake up to incredible views in Zermatt, Switzerland. This retreat is perfect for couples, families, or solo adventurers alike.",
    "image": {
      "filename": "intl_listingimage_95",
      "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
    },
    "price": 19762,
    "location": "Zermatt",
    "country": "Switzerland",
    "geometry": {
      "type": "Point",
      "coordinates": [
        7.7491,
        46.0407
      ]
    },
    "category": "Mountains"
  },
  {
    "title": "Peaceful Cabin in Aspen",
    "description": "Tucked away in Aspen, USA, this cabin offers a rare mix of privacy, luxury, and adventure at your doorstep.",
    "image": {
      "filename": "intl_listingimage_96",
      "url": "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    },
    "price": 19935,
    "location": "Aspen",
    "country": "USA",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.8075,
        39.1711
      ]
    },
    "category": "Mountains"
  },
  {
    "title": "Vibrant Loft in Chamonix",
    "description": "A loft nestled in the heart of Chamonix, France. Perfect for travelers looking to soak in local culture and stunning views.",
    "image": {
      "filename": "intl_listingimage_97",
      "url": "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
    },
    "price": 20108,
    "location": "Chamonix",
    "country": "France",
    "geometry": {
      "type": "Point",
      "coordinates": [
        6.8894,
        45.9137
      ]
    },
    "category": "Mountains"
  },
  {
    "title": "Chic Studio in Queenstown",
    "description": "Escape to this beautiful studio in Queenstown, New Zealand, offering comfort, charm, and unforgettable scenery just steps away.",
    "image": {
      "filename": "intl_listingimage_98",
      "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
    },
    "price": 20281,
    "location": "Queenstown",
    "country": "New Zealand",
    "geometry": {
      "type": "Point",
      "coordinates": [
        168.6926,
        -45.0312
      ]
    },
    "category": "Mountains"
  },
  {
    "title": "Idyllic Bungalow in Banff",
    "description": "Experience the magic of Banff, Canada from this thoughtfully designed bungalow, ideal for a relaxing getaway.",
    "image": {
      "filename": "intl_listingimage_99",
      "url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9"
    },
    "price": 20454,
    "location": "Banff",
    "country": "Canada",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -115.6008,
        51.1884
      ]
    },
    "category": "Mountains"
  },
  {
    "title": "Picturesque Chalet in Interlaken",
    "description": "This chalet in Interlaken, Switzerland combines modern comfort with the natural beauty of its surroundings.",
    "image": {
      "filename": "intl_listingimage_100",
      "url": "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8"
    },
    "price": 20627,
    "location": "Interlaken",
    "country": "Switzerland",
    "geometry": {
      "type": "Point",
      "coordinates": [
        7.8432,
        46.7063
      ]
    },
    "category": "Mountains"
  },

  {
    "title": "Cozy Studio in Manali",
    "description": "A studio nestled in the heart of Manali, India. Perfect for travelers looking to soak in local culture and stunning views.",
    "image": {
      "filename": "india_listingimage_1",
      "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
    },
    "price": 1200,
    "location": "Manali",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        77.1592,
        32.2232
      ]
    },
    "category": "Mountains"
  },
  {
    "title": "Charming Bungalow in Shimla",
    "description": "Escape to this beautiful bungalow in Shimla, India, offering comfort, charm, and unforgettable scenery just steps away.",
    "image": {
      "filename": "india_listingimage_2",
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    },
    "price": 1311,
    "location": "Shimla",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        77.1534,
        31.0948
      ]
    },
    "category": "Mountains"
  },
  {
    "title": "Luxurious Haveli in Darjeeling",
    "description": "Experience the magic of Darjeeling, India from this thoughtfully designed haveli, ideal for a relaxing getaway.",
    "image": {
      "filename": "india_listingimage_3",
      "url": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
    },
    "price": 1422,
    "location": "Darjeeling",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        88.2536,
        27.041
      ]
    },
    "category": "Mountains"
  },
  {
    "title": "Rustic Suite in Leh",
    "description": "This suite in Leh, India combines modern comfort with rich local heritage and natural beauty.",
    "image": {
      "filename": "india_listingimage_4",
      "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
    },
    "price": 1533,
    "location": "Leh",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        77.5771,
        34.1626
      ]
    },
    "category": "Mountains"
  },
  {
    "title": "Modern Hideaway in Gangtok",
    "description": "Wake up to incredible views in Gangtok, India. This hideaway is perfect for couples, families, or solo travelers alike.",
    "image": {
      "filename": "india_listingimage_5",
      "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
    },
    "price": 1644,
    "location": "Gangtok",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        88.6165,
        27.3589
      ]
    },
    "category": "Mountains"
  },
  {
    "title": "Serene Farmhouse in Munnar",
    "description": "Tucked away in Munnar, India, this farmhouse offers a rare mix of privacy, culture, and adventure at your doorstep.",
    "image": {
      "filename": "india_listingimage_6",
      "url": "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    },
    "price": 1755,
    "location": "Munnar",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        77.0795,
        10.0689
      ]
    },
    "category": "Mountains"
  },
  {
    "title": "Elegant House in Nainital",
    "description": "A house nestled in the heart of Nainital, India. Perfect for travelers looking to soak in local culture and stunning views.",
    "image": {
      "filename": "india_listingimage_7",
      "url": "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
    },
    "price": 1866,
    "location": "Nainital",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        79.4936,
        29.3819
      ]
    },
    "category": "Mountains"
  },
  {
    "title": "Secluded Apartment in Mussoorie",
    "description": "Escape to this beautiful apartment in Mussoorie, India, offering comfort, charm, and unforgettable scenery just steps away.",
    "image": {
      "filename": "india_listingimage_8",
      "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
    },
    "price": 1977,
    "location": "Mussoorie",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        78.0521,
        30.4598
      ]
    },
    "category": "Mountains"
  },
  {
    "title": "Breathtaking Lodge in Coorg",
    "description": "Experience the magic of Coorg, India from this thoughtfully designed lodge, ideal for a relaxing getaway.",
    "image": {
      "filename": "india_listingimage_9",
      "url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9"
    },
    "price": 2088,
    "location": "Coorg",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        75.7869,
        12.3475
      ]
    },
    "category": "Mountains"
  },
  {
    "title": "Stunning Getaway in Auli",
    "description": "This getaway in Auli, India combines modern comfort with rich local heritage and natural beauty.",
    "image": {
      "filename": "india_listingimage_10",
      "url": "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8"
    },
    "price": 2199,
    "location": "Auli",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        79.551,
        30.5471
      ]
    },
    "category": "Mountains"
  },
  {
    "title": "Peaceful Resort in Kasol",
    "description": "Wake up to incredible views in Kasol, India. This resort is perfect for couples, families, or solo travelers alike.",
    "image": {
      "filename": "india_listingimage_11",
      "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
    },
    "price": 2310,
    "location": "Kasol",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        77.3145,
        31.99
      ]
    },
    "category": "Mountains"
  },
  {
    "title": "Vibrant Cottage in Ooty",
    "description": "Tucked away in Ooty, India, this cottage offers a rare mix of privacy, culture, and adventure at your doorstep.",
    "image": {
      "filename": "india_listingimage_12",
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    },
    "price": 2421,
    "location": "Ooty",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        76.705,
        11.3964
      ]
    },
    "category": "Mountains"
  },
  {
    "title": "Chic Villa in Jaipur",
    "description": "A villa nestled in the heart of Jaipur, India. Perfect for travelers looking to soak in local culture and stunning views.",
    "image": {
      "filename": "india_listingimage_13",
      "url": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
    },
    "price": 2532,
    "location": "Jaipur",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        75.8073,
        26.9124
      ]
    },
    "category": "Iconic Cities"
  },
  {
    "title": "Idyllic Retreat in Mumbai",
    "description": "Escape to this beautiful retreat in Mumbai, India, offering comfort, charm, and unforgettable scenery just steps away.",
    "image": {
      "filename": "india_listingimage_14",
      "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
    },
    "price": 2643,
    "location": "Mumbai",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        72.9077,
        19.086
      ]
    },
    "category": "Iconic Cities"
  },
  {
    "title": "Picturesque Cabin in Delhi",
    "description": "Experience the magic of Delhi, India from this thoughtfully designed cabin, ideal for a relaxing getaway.",
    "image": {
      "filename": "india_listingimage_15",
      "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
    },
    "price": 2754,
    "location": "Delhi",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        77.0725,
        28.7241
      ]
    },
    "category": "Iconic Cities"
  },
  {
    "title": "Traditional Homestay in Agra",
    "description": "This homestay in Agra, India combines modern comfort with rich local heritage and natural beauty.",
    "image": {
      "filename": "india_listingimage_16",
      "url": "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    },
    "price": 2865,
    "location": "Agra",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        77.9881,
        27.1567
      ]
    },
    "category": "Iconic Cities"
  },
  {
    "title": "Heritage Studio in Varanasi",
    "description": "Wake up to incredible views in Varanasi, India. This studio is perfect for couples, families, or solo travelers alike.",
    "image": {
      "filename": "india_listingimage_17",
      "url": "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
    },
    "price": 2976,
    "location": "Varanasi",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        82.99,
        25.3076
      ]
    },
    "category": "Iconic Cities"
  },
  {
    "title": "Cozy Bungalow in Kolkata",
    "description": "Tucked away in Kolkata, India, this bungalow offers a rare mix of privacy, culture, and adventure at your doorstep.",
    "image": {
      "filename": "india_listingimage_18",
      "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
    },
    "price": 3087,
    "location": "Kolkata",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        88.3639,
        22.5726
      ]
    },
    "category": "Iconic Cities"
  },
  {
    "title": "Charming Haveli in Udaipur",
    "description": "A haveli nestled in the heart of Udaipur, India. Perfect for travelers looking to soak in local culture and stunning views.",
    "image": {
      "filename": "india_listingimage_19",
      "url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9"
    },
    "price": 3198,
    "location": "Udaipur",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        73.7225,
        24.5954
      ]
    },
    "category": "Iconic Cities"
  },
  {
    "title": "Luxurious Suite in Hyderabad",
    "description": "Escape to this beautiful suite in Hyderabad, India, offering comfort, charm, and unforgettable scenery just steps away.",
    "image": {
      "filename": "india_listingimage_20",
      "url": "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8"
    },
    "price": 3309,
    "location": "Hyderabad",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        78.5067,
        17.405
      ]
    },
    "category": "Iconic Cities"
  },
  {
    "title": "Rustic Hideaway in Chennai",
    "description": "Experience the magic of Chennai, India from this thoughtfully designed hideaway, ideal for a relaxing getaway.",
    "image": {
      "filename": "india_listingimage_21",
      "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
    },
    "price": 3420,
    "location": "Chennai",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        80.3007,
        13.0627
      ]
    },
    "category": "Iconic Cities"
  },
  {
    "title": "Modern Farmhouse in Bengaluru",
    "description": "This farmhouse in Bengaluru, India combines modern comfort with rich local heritage and natural beauty.",
    "image": {
      "filename": "india_listingimage_22",
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    },
    "price": 3531,
    "location": "Bengaluru",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        77.5646,
        12.9616
      ]
    },
    "category": "Iconic Cities"
  },
  {
    "title": "Serene House in Amritsar",
    "description": "Wake up to incredible views in Amritsar, India. This house is perfect for couples, families, or solo travelers alike.",
    "image": {
      "filename": "india_listingimage_23",
      "url": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
    },
    "price": 3642,
    "location": "Amritsar",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        74.8523,
        31.634
      ]
    },
    "category": "Iconic Cities"
  },
  {
    "title": "Elegant Apartment in Jodhpur",
    "description": "Tucked away in Jodhpur, India, this apartment offers a rare mix of privacy, culture, and adventure at your doorstep.",
    "image": {
      "filename": "india_listingimage_24",
      "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
    },
    "price": 3753,
    "location": "Jodhpur",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        73.0143,
        26.2489
      ]
    },
    "category": "Iconic Cities"
  },
  {
    "title": "Secluded Lodge in Mehrangarh Fort, Jodhpur",
    "description": "A lodge nestled in the heart of Mehrangarh Fort, Jodhpur, India. Perfect for travelers looking to soak in local culture and stunning views.",
    "image": {
      "filename": "india_listingimage_25",
      "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
    },
    "price": 3864,
    "location": "Mehrangarh Fort, Jodhpur",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        73.0186,
        26.3179
      ]
    },
    "category": "Castles"
  },
  {
    "title": "Breathtaking Getaway in Amber Fort, Jaipur",
    "description": "Escape to this beautiful getaway in Amber Fort, Jaipur, India, offering comfort, charm, and unforgettable scenery just steps away.",
    "image": {
      "filename": "india_listingimage_26",
      "url": "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    },
    "price": 3975,
    "location": "Amber Fort, Jaipur",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        75.8613,
        26.9655
      ]
    },
    "category": "Castles"
  },
  {
    "title": "Stunning Resort in Chittorgarh Fort",
    "description": "Experience the magic of Chittorgarh Fort, India from this thoughtfully designed resort, ideal for a relaxing getaway.",
    "image": {
      "filename": "india_listingimage_27",
      "url": "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
    },
    "price": 4086,
    "location": "Chittorgarh Fort",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        74.6655,
        24.8787
      ]
    },
    "category": "Castles"
  },
  {
    "title": "Peaceful Cottage in City Palace, Udaipur",
    "description": "This cottage in City Palace, Udaipur, India combines modern comfort with rich local heritage and natural beauty.",
    "image": {
      "filename": "india_listingimage_28",
      "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
    },
    "price": 4197,
    "location": "City Palace, Udaipur",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        73.7136,
        24.5764
      ]
    },
    "category": "Castles"
  },
  {
    "title": "Vibrant Villa in Gwalior Fort",
    "description": "Wake up to incredible views in Gwalior Fort, India. This villa is perfect for couples, families, or solo travelers alike.",
    "image": {
      "filename": "india_listingimage_29",
      "url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9"
    },
    "price": 4308,
    "location": "Gwalior Fort",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        78.139,
        26.2395
      ]
    },
    "category": "Castles"
  },
  {
    "title": "Chic Retreat in Neemrana Fort",
    "description": "Tucked away in Neemrana Fort, India, this retreat offers a rare mix of privacy, culture, and adventure at your doorstep.",
    "image": {
      "filename": "india_listingimage_30",
      "url": "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8"
    },
    "price": 4419,
    "location": "Neemrana Fort",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        76.3656,
        28.0066
      ]
    },
    "category": "Castles"
  },
  {
    "title": "Idyllic Cabin in Kumbhalgarh Fort",
    "description": "A cabin nestled in the heart of Kumbhalgarh Fort, India. Perfect for travelers looking to soak in local culture and stunning views.",
    "image": {
      "filename": "india_listingimage_31",
      "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
    },
    "price": 4530,
    "location": "Kumbhalgarh Fort",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        73.5754,
        25.1287
      ]
    },
    "category": "Castles"
  },
  {
    "title": "Picturesque Homestay in Junagarh Fort, Bikaner",
    "description": "Escape to this beautiful homestay in Junagarh Fort, Bikaner, India, offering comfort, charm, and unforgettable scenery just steps away.",
    "image": {
      "filename": "india_listingimage_32",
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    },
    "price": 4641,
    "location": "Junagarh Fort, Bikaner",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        73.3119,
        28.0129
      ]
    },
    "category": "Castles"
  },
  {
    "title": "Traditional Studio in Golconda Fort, Hyderabad",
    "description": "Experience the magic of Golconda Fort, Hyderabad, India from this thoughtfully designed studio, ideal for a relaxing getaway.",
    "image": {
      "filename": "india_listingimage_33",
      "url": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
    },
    "price": 4752,
    "location": "Golconda Fort, Hyderabad",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        78.4111,
        17.3833
      ]
    },
    "category": "Castles"
  },
  {
    "title": "Heritage Bungalow in Red Fort, Delhi",
    "description": "This bungalow in Red Fort, Delhi, India combines modern comfort with rich local heritage and natural beauty.",
    "image": {
      "filename": "india_listingimage_34",
      "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
    },
    "price": 4863,
    "location": "Red Fort, Delhi",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        77.261,
        28.6662
      ]
    },
    "category": "Castles"
  },
  {
    "title": "Cozy Haveli in Goa",
    "description": "Wake up to incredible views in Goa, India. This haveli is perfect for couples, families, or solo travelers alike.",
    "image": {
      "filename": "india_listingimage_35",
      "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
    },
    "price": 4974,
    "location": "Goa",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        73.8867,
        15.3193
      ]
    },
    "category": "Amazing Pools"
  },
  {
    "title": "Charming Suite in Udaipur Lakeside Resort",
    "description": "Tucked away in Udaipur Lakeside Resort, India, this suite offers a rare mix of privacy, culture, and adventure at your doorstep.",
    "image": {
      "filename": "india_listingimage_36",
      "url": "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    },
    "price": 5085,
    "location": "Udaipur Lakeside Resort",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        73.66,
        24.57
      ]
    },
    "category": "Amazing Pools"
  },
  {
    "title": "Luxurious Hideaway in Alibaug",
    "description": "A hideaway nestled in the heart of Alibaug, India. Perfect for travelers looking to soak in local culture and stunning views.",
    "image": {
      "filename": "india_listingimage_37",
      "url": "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
    },
    "price": 5196,
    "location": "Alibaug",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        72.8522,
        18.6314
      ]
    },
    "category": "Amazing Pools"
  },
  {
    "title": "Rustic Farmhouse in Lonavala",
    "description": "Escape to this beautiful farmhouse in Lonavala, India, offering comfort, charm, and unforgettable scenery just steps away.",
    "image": {
      "filename": "india_listingimage_38",
      "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
    },
    "price": 5307,
    "location": "Lonavala",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        73.3964,
        18.7546
      ]
    },
    "category": "Amazing Pools"
  },
  {
    "title": "Modern House in Pondicherry",
    "description": "Experience the magic of Pondicherry, India from this thoughtfully designed house, ideal for a relaxing getaway.",
    "image": {
      "filename": "india_listingimage_39",
      "url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9"
    },
    "price": 5418,
    "location": "Pondicherry",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        79.8083,
        11.9516
      ]
    },
    "category": "Amazing Pools"
  },
  {
    "title": "Serene Apartment in Vagator, Goa",
    "description": "This apartment in Vagator, Goa, India combines modern comfort with rich local heritage and natural beauty.",
    "image": {
      "filename": "india_listingimage_40",
      "url": "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8"
    },
    "price": 5529,
    "location": "Vagator, Goa",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        73.7433,
        15.6183
      ]
    },
    "category": "Amazing Pools"
  },
  {
    "title": "Elegant Lodge in Coorg Resort",
    "description": "Wake up to incredible views in Coorg Resort, India. This lodge is perfect for couples, families, or solo travelers alike.",
    "image": {
      "filename": "india_listingimage_41",
      "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
    },
    "price": 5640,
    "location": "Coorg Resort",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        75.87,
        12.4
      ]
    },
    "category": "Amazing Pools"
  },
  {
    "title": "Secluded Getaway in Andaman Islands",
    "description": "Tucked away in Andaman Islands, India, this getaway offers a rare mix of privacy, culture, and adventure at your doorstep.",
    "image": {
      "filename": "india_listingimage_42",
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    },
    "price": 5751,
    "location": "Andaman Islands",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        92.6886,
        11.7301
      ]
    },
    "category": "Amazing Pools"
  },
  {
    "title": "Breathtaking Resort in Rishikesh",
    "description": "A resort nestled in the heart of Rishikesh, India. Perfect for travelers looking to soak in local culture and stunning views.",
    "image": {
      "filename": "india_listingimage_43",
      "url": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
    },
    "price": 5862,
    "location": "Rishikesh",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        78.2376,
        30.0869
      ]
    },
    "category": "Camping"
  },
  {
    "title": "Stunning Cottage in Spiti Valley",
    "description": "Escape to this beautiful cottage in Spiti Valley, India, offering comfort, charm, and unforgettable scenery just steps away.",
    "image": {
      "filename": "india_listingimage_44",
      "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
    },
    "price": 5973,
    "location": "Spiti Valley",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        78.0149,
        32.2561
      ]
    },
    "category": "Camping"
  },
  {
    "title": "Peaceful Villa in Jim Corbett",
    "description": "Experience the magic of Jim Corbett, India from this thoughtfully designed villa, ideal for a relaxing getaway.",
    "image": {
      "filename": "india_listingimage_45",
      "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
    },
    "price": 6084,
    "location": "Jim Corbett",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        79.11,
        29.55
      ]
    },
    "category": "Camping"
  },
  {
    "title": "Vibrant Retreat in Pangong Lake",
    "description": "This retreat in Pangong Lake, India combines modern comfort with rich local heritage and natural beauty.",
    "image": {
      "filename": "india_listingimage_46",
      "url": "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    },
    "price": 6195,
    "location": "Pangong Lake",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        78.0064,
        33.7292
      ]
    },
    "category": "Camping"
  },
  {
    "title": "Chic Cabin in Wayanad",
    "description": "Wake up to incredible views in Wayanad, India. This cabin is perfect for couples, families, or solo travelers alike.",
    "image": {
      "filename": "india_listingimage_47",
      "url": "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
    },
    "price": 6306,
    "location": "Wayanad",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        76.1419,
        11.6754
      ]
    },
    "category": "Camping"
  },
  {
    "title": "Idyllic Homestay in Bandhavgarh",
    "description": "Tucked away in Bandhavgarh, India, this homestay offers a rare mix of privacy, culture, and adventure at your doorstep.",
    "image": {
      "filename": "india_listingimage_48",
      "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
    },
    "price": 6417,
    "location": "Bandhavgarh",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        81.0533,
        23.7
      ]
    },
    "category": "Camping"
  },
  {
    "title": "Picturesque Studio in Chopta",
    "description": "A studio nestled in the heart of Chopta, India. Perfect for travelers looking to soak in local culture and stunning views.",
    "image": {
      "filename": "india_listingimage_49",
      "url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9"
    },
    "price": 6528,
    "location": "Chopta",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        79.0633,
        30.4933
      ]
    },
    "category": "Camping"
  },
  {
    "title": "Traditional Bungalow in Kutch",
    "description": "Escape to this beautiful bungalow in Kutch, India, offering comfort, charm, and unforgettable scenery just steps away.",
    "image": {
      "filename": "india_listingimage_50",
      "url": "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8"
    },
    "price": 6639,
    "location": "Kutch",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        69.8297,
        23.7537
      ]
    },
    "category": "Camping"
  },
  {
    "title": "Heritage Haveli in Nashik Vineyards",
    "description": "Experience the magic of Nashik Vineyards, India from this thoughtfully designed haveli, ideal for a relaxing getaway.",
    "image": {
      "filename": "india_listingimage_51",
      "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
    },
    "price": 6750,
    "location": "Nashik Vineyards",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        73.7698,
        19.9775
      ]
    },
    "category": "Farms"
  },
  {
    "title": "Cozy Suite in Coorg Coffee Estate",
    "description": "This suite in Coorg Coffee Estate, India combines modern comfort with rich local heritage and natural beauty.",
    "image": {
      "filename": "india_listingimage_52",
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    },
    "price": 6861,
    "location": "Coorg Coffee Estate",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        75.7282,
        12.4144
      ]
    },
    "category": "Farms"
  },
  {
    "title": "Charming Hideaway in Kerala Backwaters Farm",
    "description": "Wake up to incredible views in Kerala Backwaters Farm, India. This hideaway is perfect for couples, families, or solo travelers alike.",
    "image": {
      "filename": "india_listingimage_53",
      "url": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
    },
    "price": 6972,
    "location": "Kerala Backwaters Farm",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        76.3388,
        9.4981
      ]
    },
    "category": "Farms"
  },
  {
    "title": "Luxurious Farmhouse in Punjab Farmhouse",
    "description": "Tucked away in Punjab Farmhouse, India, this farmhouse offers a rare mix of privacy, culture, and adventure at your doorstep.",
    "image": {
      "filename": "india_listingimage_54",
      "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
    },
    "price": 7083,
    "location": "Punjab Farmhouse",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        75.3512,
        31.1571
      ]
    },
    "category": "Farms"
  },
  {
    "title": "Rustic House in Darjeeling Tea Estate",
    "description": "A house nestled in the heart of Darjeeling Tea Estate, India. Perfect for travelers looking to soak in local culture and stunning views.",
    "image": {
      "filename": "india_listingimage_55",
      "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
    },
    "price": 7194,
    "location": "Darjeeling Tea Estate",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        88.2827,
        27.056
      ]
    },
    "category": "Farms"
  },
  {
    "title": "Modern Apartment in Sikkim Organic Farm",
    "description": "Escape to this beautiful apartment in Sikkim Organic Farm, India, offering comfort, charm, and unforgettable scenery just steps away.",
    "image": {
      "filename": "india_listingimage_56",
      "url": "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    },
    "price": 7305,
    "location": "Sikkim Organic Farm",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        88.5422,
        27.513
      ]
    },
    "category": "Farms"
  },
  {
    "title": "Serene Lodge in Wayanad Spice Farm",
    "description": "Experience the magic of Wayanad Spice Farm, India from this thoughtfully designed lodge, ideal for a relaxing getaway.",
    "image": {
      "filename": "india_listingimage_57",
      "url": "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
    },
    "price": 7416,
    "location": "Wayanad Spice Farm",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        76.05,
        11.6
      ]
    },
    "category": "Farms"
  },
  {
    "title": "Elegant Getaway in Nilgiris Tea Estate",
    "description": "This getaway in Nilgiris Tea Estate, India combines modern comfort with rich local heritage and natural beauty.",
    "image": {
      "filename": "india_listingimage_58",
      "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
    },
    "price": 7527,
    "location": "Nilgiris Tea Estate",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        76.68,
        11.41
      ]
    },
    "category": "Farms"
  },
  {
    "title": "Secluded Resort in Gulmarg",
    "description": "Wake up to incredible views in Gulmarg, India. This resort is perfect for couples, families, or solo travelers alike.",
    "image": {
      "filename": "india_listingimage_59",
      "url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9"
    },
    "price": 7638,
    "location": "Gulmarg",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        74.37,
        34.0584
      ]
    },
    "category": "Arctic"
  },
  {
    "title": "Breathtaking Cottage in Sonamarg",
    "description": "Tucked away in Sonamarg, India, this cottage offers a rare mix of privacy, culture, and adventure at your doorstep.",
    "image": {
      "filename": "india_listingimage_60",
      "url": "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8"
    },
    "price": 7749,
    "location": "Sonamarg",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        75.2926,
        34.3233
      ]
    },
    "category": "Arctic"
  },
  {
    "title": "Stunning Villa in Zanskar Valley",
    "description": "A villa nestled in the heart of Zanskar Valley, India. Perfect for travelers looking to soak in local culture and stunning views.",
    "image": {
      "filename": "india_listingimage_61",
      "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
    },
    "price": 7860,
    "location": "Zanskar Valley",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        77.0306,
        33.36
      ]
    },
    "category": "Arctic"
  },
  {
    "title": "Peaceful Retreat in Nubra Valley",
    "description": "Escape to this beautiful retreat in Nubra Valley, India, offering comfort, charm, and unforgettable scenery just steps away.",
    "image": {
      "filename": "india_listingimage_62",
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    },
    "price": 7971,
    "location": "Nubra Valley",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        77.5947,
        34.6701
      ]
    },
    "category": "Arctic"
  },
  {
    "title": "Vibrant Cabin in Kedarnath",
    "description": "Experience the magic of Kedarnath, India from this thoughtfully designed cabin, ideal for a relaxing getaway.",
    "image": {
      "filename": "india_listingimage_63",
      "url": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
    },
    "price": 8082,
    "location": "Kedarnath",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        79.0969,
        30.7346
      ]
    },
    "category": "Arctic"
  },
  {
    "title": "Chic Homestay in Rohtang Pass",
    "description": "This homestay in Rohtang Pass, India combines modern comfort with rich local heritage and natural beauty.",
    "image": {
      "filename": "india_listingimage_64",
      "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
    },
    "price": 8193,
    "location": "Rohtang Pass",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        77.218,
        32.3828
      ]
    },
    "category": "Arctic"
  },
  {
    "title": "Idyllic Studio in Pune",
    "description": "Wake up to incredible views in Pune, India. This studio is perfect for couples, families, or solo travelers alike.",
    "image": {
      "filename": "india_listingimage_65",
      "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
    },
    "price": 8304,
    "location": "Pune",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        73.8367,
        18.5404
      ]
    },
    "category": "Rooms"
  },
  {
    "title": "Picturesque Bungalow in Ahmedabad",
    "description": "Tucked away in Ahmedabad, India, this bungalow offers a rare mix of privacy, culture, and adventure at your doorstep.",
    "image": {
      "filename": "india_listingimage_66",
      "url": "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    },
    "price": 8415,
    "location": "Ahmedabad",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        72.5614,
        23.0025
      ]
    },
    "category": "Rooms"
  },
  {
    "title": "Traditional Haveli in Indore",
    "description": "A haveli nestled in the heart of Indore, India. Perfect for travelers looking to soak in local culture and stunning views.",
    "image": {
      "filename": "india_listingimage_67",
      "url": "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
    },
    "price": 8526,
    "location": "Indore",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        75.8577,
        22.7096
      ]
    },
    "category": "Rooms"
  },
  {
    "title": "Heritage Suite in Chandigarh",
    "description": "Escape to this beautiful suite in Chandigarh, India, offering comfort, charm, and unforgettable scenery just steps away.",
    "image": {
      "filename": "india_listingimage_68",
      "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
    },
    "price": 8637,
    "location": "Chandigarh",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        76.7894,
        30.7333
      ]
    },
    "category": "Rooms"
  },
  {
    "title": "Cozy Hideaway in Lucknow",
    "description": "Experience the magic of Lucknow, India from this thoughtfully designed hideaway, ideal for a relaxing getaway.",
    "image": {
      "filename": "india_listingimage_69",
      "url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9"
    },
    "price": 8748,
    "location": "Lucknow",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        80.9662,
        26.8567
      ]
    },
    "category": "Rooms"
  },
  {
    "title": "Charming Farmhouse in Bhopal",
    "description": "This farmhouse in Bhopal, India combines modern comfort with rich local heritage and natural beauty.",
    "image": {
      "filename": "india_listingimage_70",
      "url": "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8"
    },
    "price": 8859,
    "location": "Bhopal",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        77.4426,
        23.2799
      ]
    },
    "category": "Rooms"
  },
  {
    "title": "Luxurious House in Kochi",
    "description": "Wake up to incredible views in Kochi, India. This house is perfect for couples, families, or solo travelers alike.",
    "image": {
      "filename": "india_listingimage_71",
      "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
    },
    "price": 8970,
    "location": "Kochi",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        76.2373,
        9.9112
      ]
    },
    "category": "Rooms"
  },
  {
    "title": "Rustic Apartment in Surat",
    "description": "Tucked away in Surat, India, this apartment offers a rare mix of privacy, culture, and adventure at your doorstep.",
    "image": {
      "filename": "india_listingimage_72",
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    },
    "price": 9081,
    "location": "Surat",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        72.8111,
        21.1602
      ]
    },
    "category": "Rooms"
  },
  {
    "title": "Modern Lodge in Kasol Riverside",
    "description": "A lodge nestled in the heart of Kasol Riverside, India. Perfect for travelers looking to soak in local culture and stunning views.",
    "image": {
      "filename": "india_listingimage_73",
      "url": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
    },
    "price": 9192,
    "location": "Kasol Riverside",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        77.3045,
        32.01
      ]
    },
    "category": "Trending"
  },
  {
    "title": "Serene Getaway in Alleppey Houseboats",
    "description": "Escape to this beautiful getaway in Alleppey Houseboats, India, offering comfort, charm, and unforgettable scenery just steps away.",
    "image": {
      "filename": "india_listingimage_74",
      "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
    },
    "price": 9303,
    "location": "Alleppey Houseboats",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        76.3388,
        9.5081
      ]
    },
    "category": "Trending"
  },
  {
    "title": "Elegant Resort in Rann of Kutch",
    "description": "Experience the magic of Rann of Kutch, India from this thoughtfully designed resort, ideal for a relaxing getaway.",
    "image": {
      "filename": "india_listingimage_75",
      "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
    },
    "price": 9414,
    "location": "Rann of Kutch",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        69.8697,
        23.7537
      ]
    },
    "category": "Trending"
  },
  {
    "title": "Secluded Cottage in Hampi",
    "description": "This cottage in Hampi, India combines modern comfort with rich local heritage and natural beauty.",
    "image": {
      "filename": "india_listingimage_76",
      "url": "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    },
    "price": 9525,
    "location": "Hampi",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        76.48,
        15.315
      ]
    },
    "category": "Trending"
  },
  {
    "title": "Breathtaking Villa in Mahabalipuram",
    "description": "Wake up to incredible views in Mahabalipuram, India. This villa is perfect for couples, families, or solo travelers alike.",
    "image": {
      "filename": "india_listingimage_77",
      "url": "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
    },
    "price": 9636,
    "location": "Mahabalipuram",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        80.2228,
        12.6108
      ]
    },
    "category": "Trending"
  },
  {
    "title": "Stunning Retreat in Rishikesh Riverside Camp",
    "description": "Tucked away in Rishikesh Riverside Camp, India, this retreat offers a rare mix of privacy, culture, and adventure at your doorstep.",
    "image": {
      "filename": "india_listingimage_78",
      "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
    },
    "price": 9747,
    "location": "Rishikesh Riverside Camp",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        78.2376,
        30.0869
      ]
    },
    "category": "Trending"
  },
  {
    "title": "Peaceful Cabin in Andaman Beach Resort",
    "description": "A cabin nestled in the heart of Andaman Beach Resort, India. Perfect for travelers looking to soak in local culture and stunning views.",
    "image": {
      "filename": "india_listingimage_79",
      "url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9"
    },
    "price": 9858,
    "location": "Andaman Beach Resort",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        92.6386,
        11.7501
      ]
    },
    "category": "Trending"
  },
  {
    "title": "Vibrant Homestay in Khajuraho",
    "description": "Escape to this beautiful homestay in Khajuraho, India, offering comfort, charm, and unforgettable scenery just steps away.",
    "image": {
      "filename": "india_listingimage_80",
      "url": "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8"
    },
    "price": 9969,
    "location": "Khajuraho",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        79.9099,
        24.8518
      ]
    },
    "category": "Trending"
  },
  {
    "title": "Chic Studio in Manali",
    "description": "Experience the magic of Manali, India from this thoughtfully designed studio, ideal for a relaxing getaway.",
    "image": {
      "filename": "india_listingimage_81",
      "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
    },
    "price": 10080,
    "location": "Manali",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        77.1892,
        32.2232
      ]
    },
    "category": "Mountains"
  },
  {
    "title": "Idyllic Bungalow in Shimla",
    "description": "This bungalow in Shimla, India combines modern comfort with rich local heritage and natural beauty.",
    "image": {
      "filename": "india_listingimage_82",
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    },
    "price": 10191,
    "location": "Shimla",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        77.1834,
        31.0948
      ]
    },
    "category": "Mountains"
  },
  {
    "title": "Picturesque Haveli in Darjeeling",
    "description": "Wake up to incredible views in Darjeeling, India. This haveli is perfect for couples, families, or solo travelers alike.",
    "image": {
      "filename": "india_listingimage_83",
      "url": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
    },
    "price": 10302,
    "location": "Darjeeling",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        88.2836,
        27.041
      ]
    },
    "category": "Mountains"
  },
  {
    "title": "Traditional Suite in Leh",
    "description": "Tucked away in Leh, India, this suite offers a rare mix of privacy, culture, and adventure at your doorstep.",
    "image": {
      "filename": "india_listingimage_84",
      "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
    },
    "price": 10413,
    "location": "Leh",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        77.6071,
        34.1626
      ]
    },
    "category": "Mountains"
  },
  {
    "title": "Heritage Hideaway in Gangtok",
    "description": "A hideaway nestled in the heart of Gangtok, India. Perfect for travelers looking to soak in local culture and stunning views.",
    "image": {
      "filename": "india_listingimage_85",
      "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
    },
    "price": 10524,
    "location": "Gangtok",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        88.5765,
        27.3589
      ]
    },
    "category": "Mountains"
  },
  {
    "title": "Cozy Farmhouse in Munnar",
    "description": "Escape to this beautiful farmhouse in Munnar, India, offering comfort, charm, and unforgettable scenery just steps away.",
    "image": {
      "filename": "india_listingimage_86",
      "url": "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    },
    "price": 10635,
    "location": "Munnar",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        77.0395,
        10.0689
      ]
    },
    "category": "Mountains"
  },
  {
    "title": "Charming House in Nainital",
    "description": "Experience the magic of Nainital, India from this thoughtfully designed house, ideal for a relaxing getaway.",
    "image": {
      "filename": "india_listingimage_87",
      "url": "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
    },
    "price": 10746,
    "location": "Nainital",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        79.4536,
        29.3819
      ]
    },
    "category": "Mountains"
  },
  {
    "title": "Luxurious Apartment in Mussoorie",
    "description": "This apartment in Mussoorie, India combines modern comfort with rich local heritage and natural beauty.",
    "image": {
      "filename": "india_listingimage_88",
      "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
    },
    "price": 10857,
    "location": "Mussoorie",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        78.0821,
        30.4598
      ]
    },
    "category": "Mountains"
  },
  {
    "title": "Rustic Lodge in Coorg",
    "description": "Wake up to incredible views in Coorg, India. This lodge is perfect for couples, families, or solo travelers alike.",
    "image": {
      "filename": "india_listingimage_89",
      "url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9"
    },
    "price": 10968,
    "location": "Coorg",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        75.8169,
        12.3475
      ]
    },
    "category": "Mountains"
  },
  {
    "title": "Modern Getaway in Auli",
    "description": "Tucked away in Auli, India, this getaway offers a rare mix of privacy, culture, and adventure at your doorstep.",
    "image": {
      "filename": "india_listingimage_90",
      "url": "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8"
    },
    "price": 11079,
    "location": "Auli",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        79.581,
        30.5471
      ]
    },
    "category": "Mountains"
  },
  {
    "title": "Serene Resort in Kasol",
    "description": "A resort nestled in the heart of Kasol, India. Perfect for travelers looking to soak in local culture and stunning views.",
    "image": {
      "filename": "india_listingimage_91",
      "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
    },
    "price": 11190,
    "location": "Kasol",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        77.3445,
        31.99
      ]
    },
    "category": "Mountains"
  },
  {
    "title": "Elegant Cottage in Ooty",
    "description": "Escape to this beautiful cottage in Ooty, India, offering comfort, charm, and unforgettable scenery just steps away.",
    "image": {
      "filename": "india_listingimage_92",
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    },
    "price": 11301,
    "location": "Ooty",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        76.665,
        11.3964
      ]
    },
    "category": "Mountains"
  },
  {
    "title": "Secluded Villa in Jaipur",
    "description": "Experience the magic of Jaipur, India from this thoughtfully designed villa, ideal for a relaxing getaway.",
    "image": {
      "filename": "india_listingimage_93",
      "url": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
    },
    "price": 11412,
    "location": "Jaipur",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        75.7673,
        26.9124
      ]
    },
    "category": "Iconic Cities"
  },
  {
    "title": "Breathtaking Retreat in Mumbai",
    "description": "This retreat in Mumbai, India combines modern comfort with rich local heritage and natural beauty.",
    "image": {
      "filename": "india_listingimage_94",
      "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
    },
    "price": 11523,
    "location": "Mumbai",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        72.8677,
        19.086
      ]
    },
    "category": "Iconic Cities"
  },
  {
    "title": "Stunning Cabin in Delhi",
    "description": "Wake up to incredible views in Delhi, India. This cabin is perfect for couples, families, or solo travelers alike.",
    "image": {
      "filename": "india_listingimage_95",
      "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
    },
    "price": 11634,
    "location": "Delhi",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        77.1025,
        28.7241
      ]
    },
    "category": "Iconic Cities"
  },
  {
    "title": "Peaceful Homestay in Agra",
    "description": "Tucked away in Agra, India, this homestay offers a rare mix of privacy, culture, and adventure at your doorstep.",
    "image": {
      "filename": "india_listingimage_96",
      "url": "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    },
    "price": 11745,
    "location": "Agra",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        78.0181,
        27.1567
      ]
    },
    "category": "Iconic Cities"
  },
  {
    "title": "Vibrant Studio in Varanasi",
    "description": "A studio nestled in the heart of Varanasi, India. Perfect for travelers looking to soak in local culture and stunning views.",
    "image": {
      "filename": "india_listingimage_97",
      "url": "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
    },
    "price": 11856,
    "location": "Varanasi",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        83.02,
        25.3076
      ]
    },
    "category": "Iconic Cities"
  },
  {
    "title": "Chic Bungalow in Kolkata",
    "description": "Escape to this beautiful bungalow in Kolkata, India, offering comfort, charm, and unforgettable scenery just steps away.",
    "image": {
      "filename": "india_listingimage_98",
      "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
    },
    "price": 11967,
    "location": "Kolkata",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        88.3939,
        22.5726
      ]
    },
    "category": "Iconic Cities"
  },
  {
    "title": "Idyllic Haveli in Udaipur",
    "description": "Experience the magic of Udaipur, India from this thoughtfully designed haveli, ideal for a relaxing getaway.",
    "image": {
      "filename": "india_listingimage_99",
      "url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9"
    },
    "price": 12078,
    "location": "Udaipur",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        73.6825,
        24.5954
      ]
    },
    "category": "Iconic Cities"
  },
  {
    "title": "Picturesque Suite in Hyderabad",
    "description": "This suite in Hyderabad, India combines modern comfort with rich local heritage and natural beauty.",
    "image": {
      "filename": "india_listingimage_100",
      "url": "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8"
    },
    "price": 12189,
    "location": "Hyderabad",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        78.4667,
        17.405
      ]
    },
    "category": "Iconic Cities"
  }



];

module.exports = { data: sampleListings };