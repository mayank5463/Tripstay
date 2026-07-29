mapboxgl.accessToken = mapToken;

// ============================================
// MAP INITIALIZATION
// ============================================
const map = new mapboxgl.Map({
  container: "map",                            // ID of the div where map renders
  style: "mapbox://styles/mapbox/streets-v12", // Map visual style
  center: coordinates,                         // Starting position [lng, lat] from listing.geometry.coordinates
  zoom: 8,                                     // Initial zoom level
  attributionControl: false,                   // Hides default attribution (custom compact one added below)
});

// ============================================
// NAVIGATION CONTROL (zoom +/- and compass)
// ============================================
map.addControl(
  new mapboxgl.NavigationControl({
    showCompass: true,
    showZoom: true,
    visualizePitch: true,
  }),
  "top-right"
);

// ============================================
// FULLSCREEN CONTROL
// ============================================
map.addControl(new mapboxgl.FullscreenControl(), "top-right");

// ============================================
// GEOLOCATE CONTROL
// ============================================
map.addControl(
  new mapboxgl.GeolocateControl({
    positionOptions: { enableHighAccuracy: true },
    trackUserLocation: true,
    showUserHeading: true,
  }),
  "top-right"
);

// ============================================
// COMPACT ATTRIBUTION
// ============================================
map.addControl(new mapboxgl.AttributionControl({ compact: true }));

// ============================================
// SCALE CONTROL
// ============================================
map.addControl(new mapboxgl.ScaleControl({ maxWidth: 100, unit: "metric" }));

// ============================================
// POPUP (Airbnb-style info card shown on marker click)
// ============================================
const popup = new mapboxgl.Popup({ offset: 25, closeButton: true }).setHTML(`
  <div style="font-family: sans-serif;">
    <h6 style="margin: 0 0 4px 0;">${listing.title}</h6>
    <p style="margin: 0; font-size: 13px; color: #555;">${listing.location}, ${listing.country}</p>
    <p style="margin: 4px 0 0 0; font-weight: bold;">₹${listing.price} / night</p>
  </div>
`);

// ============================================
// AIRBNB-STYLE PRICE PILL MARKER
// Placed exactly at the listing's coordinates (listing.geometry.coordinates)
// ============================================
const priceEl = document.createElement("div");
priceEl.className = "price-marker";
priceEl.innerText = `₹${listing.price}`;
priceEl.style.background = "#222";
priceEl.style.color = "#fff";
priceEl.style.padding = "6px 12px";
priceEl.style.borderRadius = "20px";
priceEl.style.fontWeight = "bold";
priceEl.style.fontSize = "13px";
priceEl.style.boxShadow = "0 2px 6px rgba(0,0,0,0.3)";
priceEl.style.cursor = "pointer";
priceEl.style.whiteSpace = "nowrap";
priceEl.style.border = "2px solid white";

// Airbnb-style hover grow effect
priceEl.addEventListener("mouseenter", () => {
  priceEl.style.transform = "scale(1.1)";
  priceEl.style.transition = "transform 0.15s ease";
});
priceEl.addEventListener("mouseleave", () => {
  priceEl.style.transform = "scale(1)";
});

// The actual marker for the place — bound to `coordinates`
const marker = new mapboxgl.Marker({ element: priceEl })
  .setLngLat(coordinates)
  .setPopup(popup)
  .addTo(map);

// ============================================
// ON LOAD: fly-in animation, auto-open popup, and the privacy circle
// (all combined into a single "load" handler)
// ============================================
map.on("load", () => {
  // Airbnb-style smooth entrance, ending centered on the marker
  map.flyTo({
    center: coordinates,
    zoom: 14,
    speed: 0.8,
    curve: 1.4,
    essential: true,
  });

  // Auto-open popup once the map has a marker to point at
  marker.togglePopup();

  // ------------------------------------------
  // APPROXIMATE-LOCATION PRIVACY CIRCLE
  // (was declared before but never actually drawn — now completed)
  // ------------------------------------------
  const circleGeoJSON = createGeoJSONCircle(coordinates, 0.5); // 0.5 km radius

  map.addSource("privacy-circle", {
    type: "geojson",
    data: circleGeoJSON,
  });

  map.addLayer({
    id: "privacy-circle-fill",
    type: "fill",
    source: "privacy-circle",
    paint: {
      "fill-color": "#fc3d39",
      "fill-opacity": 0.15,
    },
  });

  map.addLayer({
    id: "privacy-circle-outline",
    type: "line",
    source: "privacy-circle",
    paint: {
      "line-color": "#fc3d39",
      "line-width": 1.5,
    },
  });
});

// ============================================
// Helper: builds a circle polygon (GeoJSON) around a center point
// center = [lng, lat] (same order as listing.geometry.coordinates)
// radiusKm = radius of the circle in kilometers
// ============================================
function createGeoJSONCircle(center, radiusKm, points = 64) {
  const [longitude, latitude] = center;
  const distanceX = radiusKm / (111.32 * Math.cos((latitude * Math.PI) / 180));
  const distanceY = radiusKm / 110.574;

  const ring = [];
  for (let i = 0; i < points; i++) {
    const theta = (i / points) * (2 * Math.PI);
    const x = distanceX * Math.cos(theta);
    const y = distanceY * Math.sin(theta);
    ring.push([longitude + x, latitude + y]);
  }
  ring.push(ring[0]); // close the polygon

  return {
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: [ring],
    },
  };
}