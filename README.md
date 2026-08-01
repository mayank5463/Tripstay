# TripStay

A full-stack property rental platform inspired by Airbnb — built with Node.js, Express, MongoDB, and EJS. Users can browse, list, search, and review properties, with secure authentication, geolocation-based maps, and cloud-hosted images.

## Features

- **Authentication & Authorization** — Secure signup/login with Passport.js (local strategy); ownership-based middleware ensures only listing/review owners can edit or delete the content.
- **Listings CRUD** — Create, view, update, and delete property listings with server-side validation (Joi).
- **Image Uploads** — Listing images are uploaded and stored on Cloudinary via Multer, removing dependency on local server storage.
- **Geolocation & Maps** — Mapbox Geocoding API converts entered addresses into coordinates; interactive cluster maps display all listings, with a dedicated map on each listing's detail page.
- **Reviews & Ratings** — Users can leave star ratings and comments on listings; only the review's author can delete it.
- **Search & Filtering** — Search listings by city, and browse by curated categories (Trending, Mountains, Castles, Camping, and more) with themed landing pages.
- **Flash Messages** — Real-time success/error feedback using connect-flash.
- **Responsive UI** — Built with Bootstrap 5 and custom CSS, using EJS templating (ejs-mate) for reusable layouts and partials.

## Tech Stack

| Layer | Technology |
|---|---|
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Templating | EJS, ejs-mate |
| Styling | Bootstrap 5, CSS |
| Authentication | Passport.js, passport-local-mongoose |
| File Storage | Cloudinary, Multer |
| Maps & Geocoding | Mapbox GL JS, Mapbox Geocoding API |
| Validation | Joi |
| Session Management | express-session, connect-flash |

## Project Structure

```
Tripstay/
├── controllers/        # Route logic (listings, reviews, users)
├── models/              # Mongoose schemas (Listing, Review, User)
├── routes/              # Express routers
├── views/               # EJS templates (layouts, includes, pages)
├── public/              # Static assets (CSS, JS)
├── utils/               # ExpressError, wrapAsync helpers
├── middleware.js         # Auth, ownership, and validation middleware
├── cloudConfig.js         # Cloudinary + Multer storage setup
├── schema.js              # Joi validation schemas
├── app.js                 # App entry point
└── package.json
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB (local instance or MongoDB Atlas)
- Cloudinary account (for image storage)
- Mapbox account (for geocoding and maps)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/mayank5463/Tripstay.git
   cd Tripstay
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   MONGO_URL=your_mongodb_connection_string
   MAP_TOKEN=your_mapbox_access_token
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   SECRET=your_session_secret
   ```

4. Start the server
   ```bash
   node app.js
   ```

5. Visit `http://localhost:8080` in your browser

## Key Routes

| Method | Route | Description |
|---|---|---|
| GET | `/listings` | View all listings |
| GET | `/listings/new` | Form to create a new listing (auth required) |
| POST | `/listings` | Create a new listing |
| GET | `/listings/:id` | View a single listing |
| PUT | `/listings/:id` | Update a listing (owner only) |
| DELETE | `/listings/:id` | Delete a listing (owner only) |
| POST | `/listings/:id/reviews` | Add a review (auth required) |
| DELETE | `/listings/:id/reviews/:reviewId` | Delete a review (author only) |
| GET | `/listings/search?city=` | Search listings by city |
| GET | `/listings/category/:category` | Filter listings by category |
| GET/POST | `/signup` | User registration |
| GET/POST | `/login` | User login |
| GET | `/logout` | User logout |

## What This Project Solves

- **Unauthorized access risk** — solved with ownership-based middleware (`isOwner`, `isReviewAuthor`) so users can only modify their own listings and reviews.
- **Orphaned data on delete** — solved using a Mongoose `post("findOneAndDelete")` hook that cascades and removes associated reviews when a listing is deleted.
- **Scalable image storage** — solved by offloading uploads to Cloudinary instead of storing files on the server disk.
- **Repetitive error handling** — solved with a custom `ExpressError` class and an async-wrapper utility, centralizing error handling across all routes.
- **Content discoverability** — solved with category filters, city-based search, and Mapbox cluster maps so users can find relevant listings quickly.

## Future Improvements

- Add pagination for listings
- Add unit and integration tests
- Add a wishlist / favorites feature
- Build a React-based frontend for a subset of pages (search, reviews) for richer interactivity

## License

This project is open source and available under the [ISC License](https://opensource.org/licenses/ISC).
