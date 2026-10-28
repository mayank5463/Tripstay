<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12,20,24&height=230&section=header&text=TripStay&fontSize=80&fontColor=ffffff&fontAlignY=38&animation=fadeIn&desc=Full-Stack%20Property%20Rental%20Platform&descSize=20&descAlignY=60" width="100%" alt="TripStay header" />

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&duration=3000&pause=1000&color=D4AF37&center=true&vCenter=true&width=700&lines=Browse+%E2%80%A2+List+%E2%80%A2+Search+%E2%80%A2+Review;Secure+auth+with+Passport.js;Interactive+maps+powered+by+Mapbox;Cloud-hosted+images+on+Cloudinary" alt="Typing animation" />

<br/>

[![Live Demo](https://img.shields.io/badge/%F0%9F%9A%80_LIVE_DEMO-Visit-800020?style=for-the-badge&labelColor=1a1a1a)](https://YOUR-TRIPSTAY-URL.onrender.com)
[![Portfolio](https://img.shields.io/badge/%F0%9F%92%BC_PORTFOLIO-Mayank-D4AF37?style=for-the-badge&labelColor=1a1a1a)](https://YOUR-SITE-NAME.netlify.app)
[![License](https://img.shields.io/badge/License-ISC-blue?style=for-the-badge&labelColor=1a1a1a)](https://opensource.org/licenses/ISC)

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?style=flat-square&logo=bootstrap&logoColor=white)
![Mapbox](https://img.shields.io/badge/Mapbox-000000?style=flat-square&logo=mapbox&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=flat-square&logo=cloudinary&logoColor=white)
![Passport](https://img.shields.io/badge/Passport.js-34E27A?style=flat-square&logo=passport&logoColor=black)

</div>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%" alt="divider" />

## ✨ Overview

**TripStay** is a full-stack property rental platform inspired by Airbnb. Users can browse, list, search, and review properties, backed by secure authentication, geolocation-based maps, and cloud-hosted images.

<!-- Add screenshots at assets/screenshots/, then uncomment -->
<!--
<div align="center">
  <img src="assets/screenshots/home.png" width="48%" alt="Home" />
  <img src="assets/screenshots/listing.png" width="48%" alt="Listing" />
</div>
-->

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%" alt="divider" />

## 🎯 Features

| | Feature | Details |
|:-:|---------|---------|
| 🔐 | **Authentication & Authorization** | Signup/login with Passport.js (local strategy). Ownership-based middleware ensures only owners can edit or delete their listings and reviews. |
| 🏠 | **Listings CRUD** | Create, view, update, and delete listings with server-side validation using Joi. |
| 🖼️ | **Image Uploads** | Images are uploaded via Multer and stored on Cloudinary, removing dependence on local disk storage. |
| 🗺️ | **Geolocation & Maps** | Mapbox Geocoding turns addresses into coordinates. Cluster maps show all listings, and each listing page has its own map. |
| ⭐ | **Reviews & Ratings** | Star ratings and comments on listings. Only a review's author can delete it. |
| 🔎 | **Search & Filtering** | Search by city and browse curated categories (Trending, Mountains, Castles, Camping, and more) with themed landing pages. |
| 💬 | **Flash Messages** | Instant success and error feedback via connect-flash. |
| 📱 | **Responsive UI** | Bootstrap 5 and custom CSS, with reusable layouts through EJS and ejs-mate. |

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%" alt="divider" />

## 🏗️ Architecture

```mermaid
flowchart LR
    A[Browser] --> B[Express Routes]
    B --> C[Middleware<br/>Auth / Owner / Joi]
    C --> D[Controllers]
    D --> E[(MongoDB<br/>Mongoose)]
    D --> F[Cloudinary<br/>Images]
    D --> G[Mapbox<br/>Geocoding]
    D --> H[EJS Views]
    H --> A
```

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%" alt="divider" />

## 🧰 Tech Stack

<div align="center">

<img src="https://skillicons.dev/icons?i=nodejs,express,mongodb,bootstrap,html,css,js,git,github&theme=dark" alt="Tech stack icons" />

</div>

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
| Sessions | express-session, connect-flash |

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%" alt="divider" />

## 💡 What This Project Solves

| Problem | Solution |
|---|---|
| 🔒 **Unauthorized access** | Ownership middleware (`isOwner`, `isReviewAuthor`) so users can only modify their own content. |
| 🧹 **Orphaned data on delete** | A Mongoose `post("findOneAndDelete")` hook cascades and removes a listing's reviews. |
| ☁️ **Scalable image storage** | Uploads go to Cloudinary instead of the server's disk. |
| 🛡️ **Repetitive error handling** | A custom `ExpressError` class and async wrapper centralize error handling across routes. |
| 🧭 **Content discoverability** | Category filters, city search, and Mapbox cluster maps help users find listings fast. |

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%" alt="divider" />

## 📁 Project Structure

```bash
Tripstay/
├── controllers/       # Route logic (listings, reviews, users)
├── models/            # Mongoose schemas (Listing, Review, User)
├── routes/            # Express routers
├── views/             # EJS templates (layouts, includes, pages)
├── public/            # Static assets (CSS, JS)
├── utils/             # ExpressError, wrapAsync helpers
├── middleware.js      # Auth, ownership, and validation middleware
├── cloudConfig.js     # Cloudinary + Multer storage setup
├── schema.js          # Joi validation schemas
├── app.js             # App entry point
└── package.json
```

## ⚙️ Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB (local or MongoDB Atlas)
- Cloudinary account (image storage)
- Mapbox account (geocoding and maps)

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/mayank5463/Tripstay.git
cd Tripstay
```

**2. Install dependencies**

```bash
npm install
```

**3. Create a `.env` file in the project root**

```env
MONGO_URL=your_mongodb_connection_string
MAP_TOKEN=your_mapbox_access_token
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
SECRET=your_session_secret
```

> ⚠️ Never commit your `.env` file. Make sure `.env` is listed in `.gitignore`.

**4. Start the server**

```bash
node app.js
```

**5. Open** [`http://localhost:8080`](http://localhost:8080)

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%" alt="divider" />

## 🛣️ Key Routes

<details>
<summary><b>Click to expand the route table</b></summary>
<br/>

| Method | Route | Description |
|---|---|---|
| GET | `/listings` | View all listings |
| GET | `/listings/new` | New listing form (auth required) |
| POST | `/listings` | Create a listing |
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

</details>

## 🔮 Roadmap

- [ ] Pagination for listings
- [ ] Unit and integration tests
- [ ] Wishlist / favorites feature
- [ ] React-based frontend for search and reviews

## 🤝 Connect

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-mayank5463-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/mayank5463)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/YOUR-HANDLE)
[![Email](https://img.shields.io/badge/Email-Say_Hello-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:your.email@example.com)

⭐ **If you like this project, consider giving it a star!** ⭐

</div>

## 📜 License

Released under the [ISC License](https://opensource.org/licenses/ISC).

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12,20,24&height=120&section=footer" width="100%" alt="footer" />
