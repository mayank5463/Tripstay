// ============================================
// MAP INITIALIZATION
// ============================================
mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "all-listings-map",
  style: "mapbox://styles/mapbox/streets-v12",
  center: [78.9629, 20.5937],
  zoom: 4,
  maxZoom: 18, // NEW: allow deeper zoom so clusters can fully expand
  attributionControl: false,
});
map.scrollZoom.setWheelZoomRate(1 / 300);

// ============================================
// NAVIGATION CONTROL
// ============================================
map.addControl(
  new mapboxgl.NavigationControl({
    showCompass: true,
    showZoom: true,
    visualizePitch: true,
  }),
  "top-right",
);

// ============================================
// LOAD LISTINGS DATA + CLUSTERING SOURCE
// ============================================
map.on("load", async () => {
  const res = await fetch("/listings/map-data");
  const geoJSONData = await res.json();

  map.addSource("listings", {
    type: "geojson",
    data: geoJSONData,
    cluster: true,
    clusterMaxZoom: 14,
    clusterRadius: 50,
  });

  // Cluster circles
  map.addLayer({
    id: "clusters",
    type: "circle",
    source: "listings",
    filter: ["has", "point_count"],
    paint: {
      "circle-color": [
        "step",
        ["get", "point_count"],
        "#51bbd6",
        10,
        "#f1f075",
        30,
        "#f28cb1",
      ],
      "circle-radius": ["step", ["get", "point_count"], 16, 10, 22, 30, 28],
      "circle-stroke-width": 2,
      "circle-stroke-color": "#fff",
    },
  });

  // Cluster count labels
  map.addLayer({
    id: "cluster-count",
    type: "symbol",
    source: "listings",
    filter: ["has", "point_count"],
    layout: {
      "text-field": ["get", "point_count_abbreviated"],
      "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
      "text-size": 12,
    },
    paint: { "text-color": "#222" },
  });

  // Individual visible marker dot
  map.addLayer({
    id: "unclustered-point",
    type: "circle",
    source: "listings",
    filter: ["!", ["has", "point_count"]],
    paint: {
      "circle-color": "#ff385c",
      "circle-radius": 10,
      "circle-stroke-width": 3,
      "circle-stroke-color": "#fff",
      "circle-opacity": 0.95,
    },
  });

  // Invisible bigger hitbox — makes clicking easier
  map.addLayer({
    id: "unclustered-point-hitbox",
    type: "circle",
    source: "listings",
    filter: ["!", ["has", "point_count"]],
    paint: {
      "circle-radius": 20,
      "circle-color": "#000",
      "circle-opacity": 0,
    },
  });

  map.on("click", "clusters", async (e) => {
    const features = map.queryRenderedFeatures(e.point, {
      layers: ["clusters"],
    });
    const clusterId = features[0].properties.cluster_id;
    const zoom = await map
      .getSource("listings")
      .getClusterExpansionZoom(clusterId);

    map.easeTo({
      center: features[0].geometry.coordinates,
      zoom: Math.min(zoom + 1, 18), // NEW: nudge zoom further + cap at maxZoom
      duration: 500,
    });
  });

  // ============================================
  // CLICK MARKER → DIRECT NAVIGATION (single trigger only)
  // ============================================
  map.on("click", "unclustered-point-hitbox", (e) => {
    const { id } = e.features[0].properties;
    window.location.href = `/listings/${id}`;
  });

  // ============================================
  // HOVER POPUP — plain content, NOT wrapped in <a> (prevents double nav)
  // ============================================
  map.on("mouseenter", "unclustered-point-hitbox", (e) => {
    map.getCanvas().style.cursor = "pointer";

    const { title, price, image } = e.features[0].properties;
    const coords = e.features[0].geometry.coordinates.slice();

    const popup = new mapboxgl.Popup({ offset: 15, closeButton: false })
      .setLngLat(coords)
      .setHTML(
        `
        <div style="font-family: sans-serif; text-align:center;">
          <img src="${image}" style="width:100%; height:80px; object-fit:cover; border-radius:6px;" />
          <h6 style="margin:4px 0;">${title}</h6>
          <p style="margin:0; font-weight:bold;">₹${price}/night</p>
        </div>
      `,
      )
      .addTo(map);

    map._activePopup = popup;
  });

  map.on("mouseleave", "unclustered-point-hitbox", () => {
    map.getCanvas().style.cursor = "";
    if (map._activePopup) map._activePopup.remove();
  });

  map.on("mouseenter", "clusters", () => {
    map.getCanvas().style.cursor = "pointer";
  });
  map.on("mouseleave", "clusters", () => {
    map.getCanvas().style.cursor = "";
  });
});
