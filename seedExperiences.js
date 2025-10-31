// seedExperiences.js
require('dotenv').config();
const mongoose = require("mongoose");
const Experience = require("./models/Experience");
const experiencesData = [
  {
    "id": 1,
    "title": "Sunset Kayaking at Halong Bay",
    "location": "Vietnam",
    "description": "Paddle through the emerald waters of Halong Bay at sunset, exploring limestone caves and hidden lagoons.",
    "price": 65,
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "slots": [
      { "date": "09:00", "available": 6 },
      { "date": "11:00", "available": 2 },
      { "date": "15:00", "available": 5 }
    ],
    "rating": 4.8,
    "category": "Adventure"
  },
  {
    "id": 2,
    "title": "Tokyo Street Food Tour",
    "location": "Tokyo, Japan",
    "description": "Savor authentic Japanese flavors on a guided tour through Tokyo's bustling food alleys and hidden eateries.",
    "price": 90,
    "image": "https://images.pexels.com/photos/1510595/pexels-photo-1510595.jpeg?_gl=1*151n631*_ga*MjA3NjkwMTkxMi4xNzYxOTMyOTEz*_ga_8JE65Q40S6*czE3NjE5MzI5MTIkbzEkZzEkdDE3NjE5MzMxMzUkajE2JGwwJGgw",
    "slots": [
      { "date": "10:00", "available": 5 },
      { "date": "13:00", "available": 5 },
      { "date": "17:00", "available": 4 }
    ],
    "rating": 4.9,
    "category": "Food & Culture"
  },
  {
    "id": 3,
    "title": "Bali Temple & Rice Terrace Tour",
    "location": "Bali, Indonesia",
    "description": "A full-day exploration of Bali's stunning temples, rice terraces, and traditional villages with a local guide.",
    "price": 80,
    "image": "https://images.unsplash.com/photo-1604999333679-b86d54738315?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1325",
    "slots": [
      { "date": "08:00", "available": 10 },
      { "date": "12:00", "available": 6 }
    ],
    "rating": 4.7,
    "category": "Sightseeing"
  },
  {
    "id": 4,
    "title": "Paris Wine & Cheese Tasting",
    "location": "Paris, France",
    "description": "Indulge in artisanal French wines and cheeses while learning pairing techniques from local sommeliers.",
    "price": 110,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFyaXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900",
    "slots": [
      { "date": "16:00", "available": 8 },
      { "date": "19:00", "available": 3 }
    ],
    "rating": 4.9,
    "category": "Food & Drink"
  },
  {
    "id": 5,
    "title": "Desert Safari with BBQ Dinner",
    "location": "Dubai, UAE",
    "description": "Enjoy dune bashing, camel rides, and a traditional Arabic BBQ dinner under the desert stars.",
    "price": 95,
    "image": "https://images.unsplash.com/photo-1554369369-2efa1c2be9d6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    "slots": [
      { "date": "16:00", "available": 12 },
      { "date": "18:00", "available": 0 }
    ],
    "rating": 4.6,
    "category": "Adventure"
  },
  {
    "id": 6,
    "title": "Northern Lights Photography Tour",
    "location": "Reykjavik, Iceland",
    "description": "Chase the aurora borealis and learn night photography tips from a professional guide.",
    "price": 150,
    "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    "slots": [
      { "date": "20:00", "available": 4 },
      { "date": "22:00", "available": 7 }
    ],
    "rating": 5.0,
    "category": "Nature"
  },
  {
    "id": 7,
    "title": "New York City Skyline Helicopter Ride",
    "location": "New York, USA",
    "description": "Get a bird's-eye view of Manhattan, Central Park, and the Statue of Liberty from above.",
    "price": 200,
    "image": "https://images.unsplash.com/photo-1534447677768-be436bb09401",
    "slots": [
      { "date": "10:00", "available": 3 },
      { "date": "12:00", "available": 5 },
      { "date": "14:00", "available": 4 }
    ],
    "rating": 4.8,
    "category": "Adventure"
  },
  {
    "id": 8,
    "title": "Cooking Class with Local Chef",
    "location": "Rome, Italy",
    "description": "Learn to make authentic pasta from scratch in a hands-on workshop with an Italian chef.",
    "price": 70,
    "image": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
    "slots": [
      { "date": "11:00", "available": 6 },
      { "date": "14:00", "available": 4 },
      { "date": "17:00", "available": 5 }
    ],
    "rating": 4.9,
    "category": "Food & Drink"
  },
  {
    "id": 9,
    "title": "Safari in Masai Mara",
    "location": "Kenya",
    "description": "Experience the African wilderness and spot the Big Five on a guided safari adventure.",
    "price": 320,
    "image": "https://images.unsplash.com/photo-1508672019048-805c876b67e2",
    "slots": [
      { "date": "06:00", "available": 5 },
      { "date": "09:00", "available": 7 }
    ],
    "rating": 4.9,
    "category": "Wildlife"
  },
  {
    "id": 10,
    "title": "Hot Air Balloon Ride Over Cappadocia",
    "location": "Turkey",
    "description": "Float over the surreal landscapes of Cappadocia at sunrise with breathtaking panoramic views.",
    "price": 180,
    "image": "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92",
    "slots": [
      { "date": "05:30", "available": 8 },
      { "date": "07:00", "available": 5 }
    ],
    "rating": 5.0,
    "category": "Adventure"
  },
  {
    "id": 11,
    "title": "Snorkeling with Sea Turtles",
    "location": "Maui, Hawaii",
    "description": "Explore crystal-clear waters and swim alongside sea turtles in a protected marine reserve.",
    "price": 120,
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "slots": [
      { "date": "09:00", "available": 10 },
      { "date": "11:00", "available": 4 }
    ],
    "rating": 4.7,
    "category": "Water Activities"
  },
  {
    "id": 12,
    "title": "Mountain Biking in the Swiss Alps",
    "location": "Interlaken, Switzerland",
    "description": "Ride through scenic alpine trails with expert guides and enjoy panoramic mountain views.",
    "price": 130,
    "image": "https://images.unsplash.com/photo-1655980396392-000adcc3fc6c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1374",
    "slots": [
      { "date": "08:00", "available": 7 },
      { "date": "11:00", "available": 5 }
    ],
    "rating": 4.6,
    "category": "Adventure"
  },
  {
    "id": 13,
    "title": "Whale Watching Cruise",
    "location": "Sydney, Australia",
    "description": "Cruise along Sydney's coastline and witness majestic humpback whales in their natural habitat.",
    "price": 85,
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "slots": [
      { "date": "10:00", "available": 12 },
      { "date": "13:00", "available": 9 }
    ],
    "rating": 4.5,
    "category": "Wildlife"
  },
  {
    "id": 14,
    "title": "Photography Walk Through Old Havana",
    "location": "Havana, Cuba",
    "description": "Capture the vibrant streets and colonial architecture of Havana with guidance from a local photographer.",
    "price": 60,
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "slots": [
      { "date": "09:00", "available": 6 },
      { "date": "15:00", "available": 8 }
    ],
    "rating": 4.8,
    "category": "Culture"
  },
  {
    "id": 15,
    "title": "Salsa Dancing Workshop",
    "location": "Barcelona, Spain",
    "description": "Learn the passionate moves of salsa dancing from professional instructors in the heart of Barcelona.",
    "price": 55,
    "image": "https://images.unsplash.com/photo-1509475826633-fed577a2c71b",
    "slots": [
      { "date": "17:00", "available": 8 },
      { "date": "19:00", "available": 6 }
    ],
    "rating": 4.7,
    "category": "Culture"
  },
  {
    "id": 16,
    "title": "Hiking the Great Wall of China",
    "location": "Beijing, China",
    "description": "Hike along an ancient section of the Great Wall with stunning mountain vistas and historical insight.",
    "price": 140,
    "image": "https://images.unsplash.com/photo-1668333140103-4255aad7e927?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdhbGwlMjBvZiUyMGNoaW5hfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900",
    "slots": [
      { "date": "08:00", "available": 9 },
      { "date": "10:00", "available": 7 }
    ],
    "rating": 4.8,
    "category": "Adventure"
  },
  {
    "id": 17,
    "title": "Street Art Tour in Berlin",
    "location": "Berlin, Germany",
    "description": "Discover Berlin's vibrant street art scene and learn the stories behind the murals from a local guide.",
    "price": 45,
    "image": "https://images.unsplash.com/photo-1587330979470-3595ac045ab0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlcmxpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
    "slots": [
      { "date": "10:00", "available": 10 },
      { "date": "13:00", "available": 5 }
    ],
    "rating": 4.5,
    "category": "Culture"
  },
  {
    "id": 18,
    "title": "Ziplining Through Costa Rican Rainforest",
    "location": "Costa Rica",
    "description": "Soar through lush canopies and waterfalls on an exhilarating zipline adventure in the rainforest.",
    "price": 100,
    "image": "https://images.unsplash.com/photo-1675259113512-db50297ce326?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8emlwbGluaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900",
    "slots": [
      { "date": "09:00", "available": 5 },
      { "date": "11:00", "available": 7 },
      { "date": "14:00", "available": 6 }
    ],
    "rating": 4.9,
    "category": "Adventure"
  },
  {
    "id": 19,
    "title": "Private Wine Tour in Napa Valley",
    "location": "California, USA",
    "description": "Sample premium wines and explore boutique vineyards with a personal sommelier guide.",
    "price": 175,
    "image": "https://images.unsplash.com/photo-1509057199576-632a47484ece",
    "slots": [
      { "date": "10:00", "available": 4 },
      { "date": "14:00", "available": 2 },
      { "date": "16:00", "available": 6 }
    ],
    "rating": 4.8,
    "category": "Food & Drink"
  },
  {
    "id": 20,
    "title": "Aurora Cabin Stay in Lapland",
    "location": "Finland",
    "description": "Stay overnight in a glass-roof cabin and watch the northern lights dance across the Arctic sky.",
    "price": 350,
    "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    "slots": [
      { "date": "18:00", "available": 3 },
      { "date": "20:00", "available": 2 },
      { "date": "22:00", "available": 5 }
    ],
    "rating": 5.0,
    "category": "Nature"
  }
]

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));
