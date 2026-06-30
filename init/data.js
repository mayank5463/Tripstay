const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  // ─── India ───────────────────────────────────────────────────────────────────
  {
    title: "Royal Haveli in Jaisalmer",
    description:
      "Stay in a beautifully restored sandstone haveli in the golden city. Explore the Thar Desert and ancient forts right from your doorstep.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1599661046827-dacff0596e45?auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Jaisalmer",
    country: "India",
  },
  {
    title: "Heritage Homestay in Udaipur",
    description:
      "Experience royal Rajasthani hospitality in this lakeside heritage homestay. Stunning views of Lake Pichola await you.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=60",
    },
    price: 4200,
    location: "Udaipur",
    country: "India",
  },
  {
    title: "Houseboat on Dal Lake",
    description:
      "Float peacefully on the serene Dal Lake in a traditional Kashmiri wooden houseboat, surrounded by Himalayan peaks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Srinagar",
    country: "India",
  },
  {
    title: "Jungle Lodge in Jim Corbett",
    description:
      "Wake up to birdsong and wildlife in this cozy jungle lodge at the edge of Jim Corbett National Park. Tiger sightings are common.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Jim Corbett",
    country: "India",
  },
  {
    title: "Colonial Bungalow in Ooty",
    description:
      "A charming British-era bungalow nestled in the Nilgiri hills. Surrounded by tea gardens and cool misty mornings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Ooty",
    country: "India",
  },
  {
    title: "Beachfront Villa in Goa",
    description:
      "A whitewashed Portuguese-style villa steps from the beach. Enjoy sunsets, fresh seafood, and the laid-back Goan lifestyle.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "North Goa",
    country: "India",
  },
  {
    title: "Treehouse in Munnar",
    description:
      "Sleep among the treetops surrounded by endless tea plantations in the lush hills of Munnar, Kerala.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Munnar",
    country: "India",
  },
  {
    title: "Boutique Riad in Jaipur",
    description:
      "An intimate boutique stay in the Pink City, with courtyard gardens, rooftop dining, and easy access to Amber Fort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1477587458883-47145ed6736c?auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Jaipur",
    country: "India",
  },
  {
    title: "Backwaters Cottage in Alleppey",
    description:
      "A tranquil cottage by the Kerala backwaters. Cruise on a kettuvallam, watch toddy tappers, and eat fresh fish curry.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=60",
    },
    price: 2400,
    location: "Alleppey",
    country: "India",
  },
  {
    title: "Mountain Chalet in Manali",
    description:
      "A cozy alpine chalet with panoramic Himalayan views. Perfect for trekkers and snow lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Manali",
    country: "India",
  },
  {
    title: "Desert Camp in Rann of Kutch",
    description:
      "Spend nights under a blanket of stars in a luxury tent at the edge of the great white desert of Kutch.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1530866882193-0db3e43e9e97?auto=format&fit=crop&w=800&q=60",
    },
    price: 4500,
    location: "Rann of Kutch",
    country: "India",
  },
  {
    title: "Riverside Camp in Rishikesh",
    description:
      "Camp on the banks of the holy Ganges with yoga sessions, white-water rafting, and bonfire nights included.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Rishikesh",
    country: "India",
  },
  {
    title: "Spice Plantation Stay in Coorg",
    description:
      "Immerse yourself in the aroma of coffee and spices at this working plantation homestay in the Scotland of India.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=60",
    },
    price: 2600,
    location: "Coorg",
    country: "India",
  },
  {
    title: "Fort Cottage in Jodhpur",
    description:
      "Stay in a restored cottage within the old walled city of Jodhpur, with views of the magnificent Mehrangarh Fort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Jodhpur",
    country: "India",
  },
  {
    title: "Tea Garden Bungalow in Darjeeling",
    description:
      "A colonial planter's bungalow surrounded by the finest Darjeeling tea gardens with views of Kanchenjunga.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=800&q=60",
    },
    price: 3200,
    location: "Darjeeling",
    country: "India",
  },
  {
    title: "Beach Hut in Havelock Island",
    description:
      "A rustic yet comfortable beach hut at Radhanagar Beach, one of Asia's most beautiful beaches in the Andamans.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
    },
    price: 3800,
    location: "Andaman Islands",
    country: "India",
  },
  {
    title: "Palace Room in Mysore",
    description:
      "Stay in a room within a heritage palace property in the royal city of Mysore. Silk, sandalwood, and grandeur await.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=60",
    },
    price: 5500,
    location: "Mysore",
    country: "India",
  },
  {
    title: "Village Homestay in Hampi",
    description:
      "A simple, soulful stay among the boulder-strewn ruins of the Vijayanagara Empire. Sunrise over ancient temples is breathtaking.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Hampi",
    country: "India",
  },
  {
    title: "Eco Retreat in Wayanad",
    description:
      "A sustainable eco-resort deep in the forests of Wayanad. Home to elephants, leopards, and pristine waterfalls.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1455156218388-5e61b526818b?auto=format&fit=crop&w=800&q=60",
    },
    price: 3400,
    location: "Wayanad",
    country: "India",
  },
  {
    title: "Spiritual Retreat in Varanasi",
    description:
      "A peaceful guesthouse overlooking the sacred Ganges ghats in the world's oldest living city. Perfect for seekers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Varanasi",
    country: "India",
  },

  // ─── USA ─────────────────────────────────────────────────────────────────────
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat in Aspen",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Rustic Cabin by Lake Tahoe",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse in Los Angeles",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
  },
  {
    title: "Beachfront Paradise in Cancun",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },

  // ─── Europe ───────────────────────────────────────────────────────────────────
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Ski-In/Ski-Out Chalet in Swiss Alps",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Historic Canal House in Amsterdam",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
  },
  {
    title: "Cliffside Villa in Santorini",
    description:
      "A breathtaking cliffside villa with an infinity pool overlooking the Aegean Sea and the famous Santorini caldera.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=60",
    },
    price: 5500,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Vineyard Cottage in Bordeaux",
    description:
      "Stay in a charming stone cottage in the heart of France's most famous wine region. Tours and tastings included.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Bordeaux",
    country: "France",
  },
  {
    title: "Alpine Lodge in Innsbruck",
    description:
      "A traditional Tyrolean lodge surrounded by stunning Alpine scenery. Ski in winter, hike in summer.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Innsbruck",
    country: "Austria",
  },
  {
    title: "Apartment in Barcelona",
    description:
      "A modern apartment in the vibrant heart of Barcelona, walking distance from Sagrada Familia and Las Ramblas.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=800&q=60",
    },
    price: 1700,
    location: "Barcelona",
    country: "Spain",
  },
  {
    title: "Colosseum View Apartment in Rome",
    description:
      "Wake up to a view of the Colosseum in this beautifully appointed Roman apartment. History at your window.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Rome",
    country: "Italy",
  },
  {
    title: "Houseboat in Copenhagen",
    description:
      "A cozy houseboat moored in Copenhagen's colourful Nyhavn harbour. Unique, charming, and central.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=800&q=60",
    },
    price: 2100,
    location: "Copenhagen",
    country: "Denmark",
  },
  {
    title: "Lakeside Chalet in Lucerne",
    description:
      "A pristine chalet on the shores of Lake Lucerne with views of the Swiss Alps reflected in the water.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=60",
    },
    price: 3300,
    location: "Lucerne",
    country: "Switzerland",
  },
  {
    title: "Studio in Paris",
    description:
      "A romantic studio apartment steps from the Eiffel Tower. Perfect for couples exploring the city of love.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=60",
    },
    price: 2400,
    location: "Paris",
    country: "France",
  },

  // ─── Asia ─────────────────────────────────────────────────────────────────────
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    title: "Private Island Retreat in Fiji",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Eco-Friendly Treehouse in Costa Rica",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?auto=format&fit=crop&w=800&q=60",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Ryokan in Kyoto",
    description:
      "Experience authentic Japanese culture in a traditional ryokan. Tatami floors, hot spring baths, and kaiseki meals.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=800&q=60",
    },
    price: 3800,
    location: "Kyoto",
    country: "Japan",
  },
  {
    title: "Rainforest Lodge in Borneo",
    description:
      "Encounter orangutans and hornbills from your veranda in this immersive rainforest lodge in Sabah.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=60",
    },
    price: 2700,
    location: "Sabah",
    country: "Malaysia",
  },
  {
    title: "Floating Villa in Ha Long Bay",
    description:
      "A unique floating villa anchored in the emerald waters of Ha Long Bay, surrounded by limestone karsts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Ha Long Bay",
    country: "Vietnam",
  },
  {
    title: "Cliff House in Cappadocia",
    description:
      "A cave house carved into the volcanic rock of Cappadocia. Hot air balloon rides launch right outside.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=60",
    },
    price: 1900,
    location: "Cappadocia",
    country: "Turkey",
  },
  {
    title: "Boutique Hotel in Singapore",
    description:
      "A sleek and stylish boutique hotel in the heart of Singapore's cultural district, near Marina Bay.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=60",
    },
    price: 3200,
    location: "Singapore",
    country: "Singapore",
  },

  // ─── More India ───────────────────────────────────────────────────────────────
  {
    title: "Palace on Wheels Stay in Bikaner",
    description:
      "A lavishly decorated heritage haveli that once housed Rajput royalty. Camel safaris and folk music evenings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=60",
    },
    price: 4800,
    location: "Bikaner",
    country: "India",
  },
  {
    title: "Cliff Resort in Varkala",
    description:
      "A serene cliff-top resort above the Arabian Sea in Varkala, Kerala. Watch sunsets with a coconut in hand.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
    },
    price: 2100,
    location: "Varkala",
    country: "India",
  },
  {
    title: "Bamboo Cottage in Meghalaya",
    description:
      "Stay in a handcrafted bamboo cottage near the living root bridges of Meghalaya. Pure, untouched Northeast India.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1455156218388-5e61b526818b?auto=format&fit=crop&w=800&q=60",
    },
    price: 1400,
    location: "Cherrapunji",
    country: "India",
  },
  {
    title: "Havelock Hideout in Pushkar",
    description:
      "A quaint guesthouse beside the holy Pushkar Lake. Watch the aarti ceremonies at dusk from your rooftop.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1477587458883-47145ed6736c?auto=format&fit=crop&w=800&q=60",
    },
    price: 1300,
    location: "Pushkar",
    country: "India",
  },
  {
    title: "Plantation Bungalow in Chikmagalur",
    description:
      "A restored coffee planter's bungalow deep in the misty hills of Chikmagalur. Wake up to fresh-brewed estate coffee.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=800&q=60",
    },
    price: 2900,
    location: "Chikmagalur",
    country: "India",
  },
  {
    title: "Lakeside Camp in Nainital",
    description:
      "A luxury tent camp on the banks of Naini Lake in the Kumaon Himalayas. Boating and birding in the mornings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=60",
    },
    price: 2300,
    location: "Nainital",
    country: "India",
  },
  {
    title: "Rajasthani Tent Camp in Pushkar",
    description:
      "Luxury Swiss tents at the edge of Pushkar during the famous Camel Fair. A once-in-a-lifetime experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1530866882193-0db3e43e9e97?auto=format&fit=crop&w=800&q=60",
    },
    price: 3600,
    location: "Pushkar",
    country: "India",
  },
  {
    title: "Bamboo Beach Hut in Gokarna",
    description:
      "A back-to-basics bamboo hut on the pristine Om Beach in Gokarna. No crowds, just waves and stars.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Gokarna",
    country: "India",
  },
  {
    title: "Heritage Inn in Pondicherry",
    description:
      "A restored French colonial townhouse in Pondicherry's White Town. Cobblestoned streets and creole cuisine nearby.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=60",
    },
    price: 2700,
    location: "Pondicherry",
    country: "India",
  },
  {
    title: "Valley View Cottage in Bir Billing",
    description:
      "A cozy cottage in the paragliding capital of India. Soar over the Kangra Valley or just sip chai with a view.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=60",
    },
    price: 1700,
    location: "Bir Billing",
    country: "India",
  },

  // ─── Africa & Middle East ─────────────────────────────────────────────────────
  {
    title: "Overwater Bungalow in Zanzibar",
    description:
      "A romantic overwater bungalow on the turquoise waters of Zanzibar. Spice tours and dhow rides await.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Zanzibar",
    country: "Tanzania",
  },
  {
    title: "Desert Glamping in Morocco",
    description:
      "Sleep under the stars in a luxury Berber tent in the Sahara dunes near Merzouga. Camel trek at sunset.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=800&q=60",
    },
    price: 2600,
    location: "Merzouga",
    country: "Morocco",
  },
  {
    title: "Riad in Marrakech Medina",
    description:
      "A stunning traditional riad hidden behind an unassuming door in Marrakech's ancient medina. Rooftop plunge pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Marrakech",
    country: "Morocco",
  },
  {
    title: "Bush Camp in Okavango Delta",
    description:
      "An exclusive mobile camp in the heart of Botswana's Okavango Delta. Guided mokoro canoe safaris daily.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60",
    },
    price: 8000,
    location: "Okavango Delta",
    country: "Botswana",
  },
  {
    title: "Treehouse Lodge in Kenya",
    description:
      "Sleep in a treehouse above a watering hole in Kenya's Aberdare Forest. Watch elephants and rhinos at night.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=60",
    },
    price: 6500,
    location: "Aberdare",
    country: "Kenya",
  },

  // ─── Americas ─────────────────────────────────────────────────────────────────
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
  },
  {
    title: "Rainforest Cabin in Amazon",
    description:
      "Stay deep in the Amazon rainforest in a sustainable lodge. Night walks, pink dolphins, and indigenous culture.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=60",
    },
    price: 3200,
    location: "Manaus",
    country: "Brazil",
  },
  {
    title: "Boutique Hotel in Buenos Aires",
    description:
      "A stylish boutique hotel in Palermo Soho, the hippest neighbourhood of Buenos Aires. Tango and steakhouses nearby.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=800&q=60",
    },
    price: 1400,
    location: "Buenos Aires",
    country: "Argentina",
  },
  {
    title: "Jungle Bungalow in Tulum",
    description:
      "A chic eco-bungalow in the Tulum jungle, minutes from ancient Maya ruins and turquoise cenotes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Tulum",
    country: "Mexico",
  },
  {
    title: "Salt Flat Lodge in Bolivia",
    description:
      "A unique lodge built entirely from salt blocks on the Salar de Uyuni, the world's largest salt flat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1530866882193-0db3e43e9e97?auto=format&fit=crop&w=800&q=60",
    },
    price: 1900,
    location: "Uyuni",
    country: "Bolivia",
  },
  {
    title: "Volcanic Cabin in Iceland",
    description:
      "A glass-roofed cabin with views of the Northern Lights and Icelandic geysers. Hot tub on the terrace.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=60",
    },
    price: 4200,
    location: "Reykjavik",
    country: "Iceland",
  },
  {
    title: "Sheep Farm Stay in New Zealand",
    description:
      "Experience authentic Kiwi farm life in a cozy cottage on a working sheep station in the South Island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=60",
    },
    price: 1300,
    location: "Queenstown",
    country: "New Zealand",
  },
  {
    title: "Outback Station in Australia",
    description:
      "Experience the real Australian outback at this remote cattle station in the Red Centre.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Alice Springs",
    country: "Australia",
  },
  {
    title: "Beachside Shack in Byron Bay",
    description:
      "A boho beach shack steps from the most easterly point of Australia. Surf, yoga, and fresh açaí bowls.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
    },
    price: 1700,
    location: "Byron Bay",
    country: "Australia",
  },

  // ─── More India ───────────────────────────────────────────────────────────────
  {
    title: "Monk Hut in Spiti Valley",
    description:
      "A spartan but beautiful stone cottage in the remote Spiti Valley at 13,000 feet. Stargazing is unreal.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Spiti Valley",
    country: "India",
  },
  {
    title: "Palace Retreat in Orchha",
    description:
      "Stay in a restored room within an authentic Bundela palace in the hidden gem of Orchha, Madhya Pradesh.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1477587458883-47145ed6736c?auto=format&fit=crop&w=800&q=60",
    },
    price: 3100,
    location: "Orchha",
    country: "India",
  },
  {
    title: "Sundarbans Eco Camp",
    description:
      "An eco-camp at the edge of the Sundarbans mangrove delta. Boat rides to spot Royal Bengal Tigers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Sundarbans",
    country: "India",
  },
  {
    title: "Yoga Ashram in Mysore",
    description:
      "A peaceful ashram stay in the yoga capital of the world. Daily Ashtanga classes and organic meals.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Mysore",
    country: "India",
  },
  {
    title: "Lotus Houseboat in Srinagar",
    description:
      "A decorated cedar-wood houseboat on Dal Lake with a private shikara. Breakfast served on the lake.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=60",
    },
    price: 3200,
    location: "Srinagar",
    country: "India",
  },
  {
    title: "Tented Camp in Ranthambore",
    description:
      "A luxury tented camp just outside Ranthambore Tiger Reserve. Dawn jeep safaris with expert naturalists.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&w=800&q=60",
    },
    price: 5500,
    location: "Ranthambore",
    country: "India",
  },
  {
    title: "Bamboo Chalet in Kaziranga",
    description:
      "A comfortable bamboo chalet near Kaziranga National Park, home to the world's largest one-horned rhino population.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1455156218388-5e61b526818b?auto=format&fit=crop&w=800&q=60",
    },
    price: 3700,
    location: "Kaziranga",
    country: "India",
  },
  {
    title: "Cliff Cottage in Shillong",
    description:
      "A charming Scottish-style cottage in Shillong, the rock music capital of India. Waterfalls and pine forests surround you.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=60",
    },
    price: 1900,
    location: "Shillong",
    country: "India",
  },
  {
    title: "Heritage Hotel in Ahmedabad",
    description:
      "A beautifully restored 400-year-old pol house in the UNESCO-listed old city of Ahmedabad. Walking heritage tours included.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=60",
    },
    price: 2400,
    location: "Ahmedabad",
    country: "India",
  },
  {
    title: "Waterfall Cottage in Coorg",
    description:
      "A remote cottage next to a private waterfall in the coffee hills of Coorg. Complete silence and nature.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Coorg",
    country: "India",
  },

  // ─── More World ───────────────────────────────────────────────────────────────
  {
    title: "Glacier View Lodge in Alaska",
    description:
      "A remote wilderness lodge accessible only by floatplane. Watch glaciers calve into the sea from your deck.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=60",
    },
    price: 5500,
    location: "Juneau",
    country: "United States",
  },
  {
    title: "Farmhouse in Tuscany",
    description:
      "A working organic farmhouse in the Chianti hills. Cook pasta from scratch and drink wine from the estate.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
    },
    price: 2100,
    location: "Chianti",
    country: "Italy",
  },
  {
    title: "Bali Rice Terrace Villa",
    description:
      "A private villa perched above emerald rice terraces in Ubud. Infinity pool facing the jungle valley.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?auto=format&fit=crop&w=800&q=60",
    },
    price: 2700,
    location: "Ubud",
    country: "Indonesia",
  },
  {
    title: "Fjord Cabin in Norway",
    description:
      "A traditional red-painted cabin on the shores of Hardangerfjord. Midnight sun or Northern Lights depending on the season.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=800&q=60",
    },
    price: 2900,
    location: "Bergen",
    country: "Norway",
  },
  {
    title: "Treehouse Hotel in Costa Rica",
    description:
      "An elevated treehouse hotel in the cloud forests of Monteverde. Walk among the treetops on suspension bridges.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Monteverde",
    country: "Costa Rica",
  },
  {
    title: "Winery Cottage in Cape Winelands",
    description:
      "A Cape Dutch cottage on a working vineyard in Stellenbosch. Wine tastings, mountain biking, and whale watching.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Stellenbosch",
    country: "South Africa",
  },
  {
    title: "Penthouse in Hong Kong",
    description:
      "A dazzling penthouse with panoramic views over Victoria Harbour and the Hong Kong skyline. Pure urban energy.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=60",
    },
    price: 4500,
    location: "Hong Kong",
    country: "China",
  },
  {
    title: "Lakehouse in Queenstown",
    description:
      "A contemporary lakehouse on Lake Wakatipu with views of the Remarkables mountain range. Bungee jumping nearby.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=60",
    },
    price: 2400,
    location: "Queenstown",
    country: "New Zealand",
  },
  {
    title: "Converted Church in Dublin",
    description:
      "A stunning converted Victorian church in the heart of Dublin. Original stained glass windows and vaulted ceilings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60",
    },
    price: 2300,
    location: "Dublin",
    country: "Ireland",
  },
  {
    title: "Cliffside Cabin in Big Sur",
    description:
      "A dramatic cliffside cabin on California's Big Sur coast. Watch whales breach from your living room window.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",
    },
    price: 3800,
    location: "Big Sur",
    country: "United States",
  },
  {
    title: "Hacienda in Oaxaca",
    description:
      "A colonial hacienda in the mezcal heartland of Mexico. Weaving workshops, mole cooking classes, and ancient ruins.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=800&q=60",
    },
    price: 1700,
    location: "Oaxaca",
    country: "Mexico",
  },
  {
    title: "Arctic Igloo in Finland",
    description:
      "Sleep in a glass igloo under the Northern Lights in Finnish Lapland. Reindeer sleigh rides at dawn.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=800&q=60",
    },
    price: 5200,
    location: "Rovaniemi",
    country: "Finland",
  },
  {
    title: "Loft in Berlin Mitte",
    description:
      "A sprawling industrial loft in Berlin's creative heart. Art galleries, techno clubs, and history on every corner.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Berlin",
    country: "Germany",
  },
  {
    title: "Jungle Villa in Sri Lanka",
    description:
      "A secluded jungle villa near Sigiriya Lion Rock. Ancient frescoes, leopards, and ayurvedic spa treatments.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?auto=format&fit=crop&w=800&q=60",
    },
    price: 2600,
    location: "Sigiriya",
    country: "Sri Lanka",
  },
  {
    title: "Floating Bamboo Villa in Thailand",
    description:
      "A floating bamboo villa on a forest lake in Khao Sok National Park. Kayaking through jungle caves.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Khao Sok",
    country: "Thailand",
  },
  {
    title: "Andean Farmhouse in Peru",
    description:
      "A stone farmhouse in the Sacred Valley near Machu Picchu. Trek the Inca Trail from your doorstep.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Sacred Valley",
    country: "Peru",
  },
  {
    title: "Overwater Lodge in Palawan",
    description:
      "An overwater bungalow in the UNESCO-listed Bacuit Bay, Palawan. World-class snorkelling right off the deck.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=800&q=60",
    },
    price: 3400,
    location: "Palawan",
    country: "Philippines",
  },
  {
    title: "Mud House in Auroville",
    description:
      "A minimalist earth-built home in the experimental township of Auroville near Pondicherry. Sustainable living at its purest.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Auroville",
    country: "India",
  },
  {
    title: "Palace Suite in Jaipur",
    description:
      "A palace suite in a converted Rajput palace hotel in Jaipur. Elephant rides, polo lawns, and candlelit dinners.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1599661046827-dacff0596e45?auto=format&fit=crop&w=800&q=60",
    },
    price: 7500,
    location: "Jaipur",
    country: "India",
  },
  {
    title: "Farmstay in Punjab",
    description:
      "A joyful farmstay on a wheat and sugarcane farm in the heartland of Punjab. Bhangra evenings and mustard fields.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1477587458883-47145ed6736c?auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Amritsar",
    country: "India",
  },
  {
    title: "Tribal Homestay in Nagaland",
    description:
      "Live with a Naga tribe in a traditional morung. Experience the Hornbill Festival, warrior dances, and smoked pork feasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1455156218388-5e61b526818b?auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Kohima",
    country: "India",
  },
  {
    title: "Riverfront Bungalow in Kaziranga",
    description:
      "A peaceful bungalow on the banks of the Brahmaputra river. Elephant-back safaris into the national park at dawn.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=60",
    },
    price: 2900,
    location: "Kaziranga",
    country: "India",
  },
  ,
  // ─── More India & World to reach 150+ ────────────────────────────────────────
  {
    title: "Bamboo Riverside Hut in Majuli",
    description:
      "Stay on Majuli, the world's largest river island in Assam. Sattriya dance, mask-making, and the Brahmaputra at sunset.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Majuli Island",
    country: "India",
  },
  {
    title: "Dune Bungalow in Mandvi",
    description:
      "A comfortable bungalow on the pristine beaches of Mandvi in Kutch, Gujarat. Ship-building yards and local crafts nearby.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Mandvi",
    country: "India",
  },
  {
    title: "Colonial Inn in Shimla",
    description:
      "A British-era colonial inn on the Mall Road of Shimla. Tudor architecture, log fires, and mountain views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=800&q=60",
    },
    price: 2600,
    location: "Shimla",
    country: "India",
  },
  {
    title: "Lake Camp in Pangong Tso",
    description:
      "A tented camp on the banks of the surreal blue Pangong Lake at 14,000 feet in Ladakh. No words, only wonder.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1530866882193-0db3e43e9e97?auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Ladakh",
    country: "India",
  },
  {
    title: "Lighthouse Cottage in Diu",
    description:
      "A whitewashed cottage next to the Portuguese lighthouse in Diu. Quiet beaches, fossil cliffs, and fresh lobster.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=60",
    },
    price: 1700,
    location: "Diu",
    country: "India",
  },
  {
    title: "Rooftop Room in Old Delhi",
    description:
      "A characterful rooftop room in the heart of Chandni Chowk. Spice markets, Jama Masjid, and street food paradise below.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=60",
    },
    price: 1300,
    location: "Delhi",
    country: "India",
  },
  {
    title: "Tea Plantation Stay in Assam",
    description:
      "Bungalow on a century-old Assam tea estate. Walk the tea rows at dawn, watch women pluck, and drink the finest second flush.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Jorhat",
    country: "India",
  },
  {
    title: "Glass Cabin in Swiss Alps",
    description:
      "A stunning glass cabin above the clouds in Grindelwald. The Eiger North Face fills your window at breakfast.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=60",
    },
    price: 4800,
    location: "Grindelwald",
    country: "Switzerland",
  },
  {
    title: "Adobe Villa in Santa Fe",
    description:
      "A traditional adobe villa in New Mexico's art capital. Georgia O'Keeffe country with red rocks and turquoise skies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Santa Fe",
    country: "United States",
  },
  {
    title: "Converted Train Car in Rajasthan",
    description:
      "Sleep in a lovingly converted vintage train compartment on the grounds of a desert haveli in Rajasthan.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1599661046827-dacff0596e45?auto=format&fit=crop&w=800&q=60",
    },
    price: 2900,
    location: "Jaisalmer",
    country: "India",
  },
  {
    title: "Mangrove Cottage in Goa",
    description:
      "A serene cottage tucked into the mangroves of South Goa. Kayaking, birdwatching, and pristine beaches nearby.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=60",
    },
    price: 1900,
    location: "South Goa",
    country: "India",
  },
  {
    title: "Sky Villa in Mumbai",
    description:
      "A contemporary sky villa high above Bandra with panoramic views of the Mumbai coastline and sea link.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=60",
    },
    price: 6500,
    location: "Mumbai",
    country: "India",
  },
  {
    title: "Jungle Cottage in Pench",
    description:
      "A charming cottage at the gate of Pench Tiger Reserve in MP — inspiration for Kipling's Jungle Book. Spot wolves at dusk.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&w=800&q=60",
    },
    price: 4200,
    location: "Pench",
    country: "India",
  },
  {
    title: "Hilltop Bungalow in Kodaikanal",
    description:
      "A misty hilltop bungalow in Kodaikanal, the Princess of Hill Stations. Boating on the star-shaped lake included.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=800&q=60",
    },
    price: 2100,
    location: "Kodaikanal",
    country: "India",
  },
  {
    title: "Haveli Suite in Bikaner",
    description:
      "A painted Marwari haveli with intricate frescoes and a rooftop camel corral. Rajasthani folk performances at dinner.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1477587458883-47145ed6736c?auto=format&fit=crop&w=800&q=60",
    },
    price: 3400,
    location: "Bikaner",
    country: "India",
  },
  // ─── Final batch to reach 150+ ────────────────────────────────────────────────
  {
    title: "Rice Boat Stay in Kumarakom",
    description:
      "A traditional kettuvallam rice boat converted into a floating bedroom, drifting through Kerala's backwater canals.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Kumarakom",
    country: "India",
  },
  {
    title: "Cave Hotel in Cappadocia",
    description:
      "A luxury cave suite carved into the volcanic tuff of Göreme valley. Hot air balloons drift past at sunrise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=60",
    },
    price: 2400,
    location: "Göreme",
    country: "Turkey",
  },
  {
    title: "Treehouse in Black Forest Germany",
    description:
      "A romantic treehouse in the dense Black Forest. Cuckoo clocks, cuckoo trails, and Black Forest cake.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Freiburg",
    country: "Germany",
  },
  {
    title: "Island Hut in Lakshadweep",
    description:
      "A simple yet idyllic beach hut on the coral atolls of Lakshadweep. Untouched reefs and no crowds.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=800&q=60",
    },
    price: 4500,
    location: "Lakshadweep",
    country: "India",
  },
  {
    title: "Floating Cabin in Dal Lake",
    description:
      "A cedar wood floating cabin with hand-painted papier-mâché interiors on the still waters of Dal Lake, Kashmir.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Srinagar",
    country: "India",
  },
  {
    title: "Beachfront Cottage in Tarkarli",
    description:
      "A cozy cottage on the white sand beaches of Tarkarli in coastal Maharashtra. Snorkelling and kokum sherbet.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Tarkarli",
    country: "India",
  },
  {
    title: "Cliffside Retreat in Mahabaleshwar",
    description:
      "A colonial-era retreat perched on the cliffs of Mahabaleshwar with views of the Sahyadri mountains and strawberry fields.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=60",
    },
    price: 2300,
    location: "Mahabaleshwar",
    country: "India",
  },
  {
    title: "Fort View Room in Chittorgarh",
    description:
      "A simple guesthouse with unobstructed views of the massive Chittorgarh Fort, the pride of Rajput chivalry.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=60",
    },
    price: 1400,
    location: "Chittorgarh",
    country: "India",
  },
  {
    title: "Surf Shack in Kovalam",
    description:
      "A breezy surf shack steps from Kovalam's famous Lighthouse Beach in Kerala. Surfing lessons at dawn.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=60",
    },
    price: 1300,
    location: "Kovalam",
    country: "India",
  },
  {
    title: "Glacier Hike Base Camp in Gangotri",
    description:
      "A comfortable base camp lodge at Gangotri, the source of the Ganges. Trek to the Gangotri Glacier and feel the divine.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Gangotri",
    country: "India",
  },
  {
    title: "Mud Hut in Kutch Salt Flats",
    description:
      "A traditional Bhunga mud hut decorated with mirror-work and embroidery in the salt flats of Kutch. Pure artisanal India.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1530866882193-0db3e43e9e97?auto=format&fit=crop&w=800&q=60",
    },
    price: 1700,
    location: "Bhuj",
    country: "India",
  },
  {
    title: "Rainforest Cabin in Periyar",
    description:
      "A cabin on the edge of Periyar Tiger Reserve in Kerala. Boat safari on Periyar Lake at 6am to spot tuskers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1455156218388-5e61b526818b?auto=format&fit=crop&w=800&q=60",
    },
    price: 3200,
    location: "Thekkady",
    country: "India",
  },
  {
    title: "Ancient Temple Town Stay in Madurai",
    description:
      "A heritage guesthouse with a rooftop view of the Meenakshi Amman Temple gopurams. Jasmine and incense fill the air.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=800&q=60",
    },
    price: 1400,
    location: "Madurai",
    country: "India",
  },
  {
    title: "Beach House in Radhanagar",
    description:
      "A private beach house on Radhanagar Beach in the Andamans — voted one of Asia's best beaches. Nothing but ocean and stars.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Havelock Island",
    country: "India",
  },
  {
    title: "Organic Farm Cottage in Sikkim",
    description:
      "A sustainable organic farm cottage in the Eastern Himalayas of Sikkim. Cardamom forests, prayer flags, and Kanchenjunga views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Gangtok",
    country: "India",
  },
  {
    title: "Fisherman's Cottage in Kochi",
    description:
      "A converted fisherman's cottage on Willingdon Island in Kochi. Chinese fishing nets, Fort Kochi heritage walks, and fresh Kerala prawns.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Kochi",
    country: "India",
  },
  {
    title: "Crater Lake Hut in Lonar",
    description:
      "A basic but fascinating hut beside the ancient Lonar meteorite crater lake in Maharashtra. One of the oldest impact craters on Earth.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lonar",
    country: "India",
  },
  {
    title: "Penthouse in Bengaluru",
    description:
      "A sleek tech-city penthouse in Indiranagar, Bengaluru. Craft beer pubs, art cafés, and startup culture all around.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=60",
    },
    price: 4800,
    location: "Bengaluru",
    country: "India",
  },
  {
    title: "Croft House in Scottish Highlands",
    description:
      "A whitewashed croft on the Isle of Skye with views of the Cuillins. Deer on the hillside and peat fires indoors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?auto=format&fit=crop&w=800&q=60",
    },
    price: 1900,
    location: "Isle of Skye",
    country: "United Kingdom",
  },
  {
    title: "Eco Lodge in Coorg Coffee Estate",
    description:
      "An eco-lodge powered entirely by solar energy in a private 200-acre coffee estate in Coorg. Guided nature walks at dusk.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=60",
    },
    price: 3300,
    location: "Coorg",
    country: "India",
  },
];

module.exports = { data: sampleListings };
