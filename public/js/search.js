document.addEventListener("DOMContentLoaded", function () {

  // ================= Toggle active segment (only one open at a time) =================
  const segments = document.querySelectorAll(".search-segment");

  segments.forEach((seg) => {
    seg.addEventListener("click", (e) => {
      const isActive = seg.classList.contains("active");
      segments.forEach((s) => s.classList.remove("active"));
      if (!isActive) seg.classList.add("active");
      e.stopPropagation();
    });
  });

  document.addEventListener("click", () => {
    segments.forEach((s) => s.classList.remove("active"));
  });

  // ================= Location select =================
  document.querySelectorAll(".location-item").forEach((item) => {
    item.addEventListener("click", (e) => {
      const locationInput = document.getElementById("locationInput");
      if (locationInput) locationInput.value = item.dataset.loc;
      e.stopPropagation();
      segments.forEach((s) => s.classList.remove("active"));
    });
  });

  // ================= Dates =================
  const checkinDate = document.getElementById("checkinDate");
  const checkoutDate = document.getElementById("checkoutDate");
  const checkinDisplay = document.getElementById("checkinDisplay");
  const checkoutDisplay = document.getElementById("checkoutDisplay");

  if (checkinDate) {
    checkinDate.addEventListener("change", function () {
      checkinDisplay.textContent = new Date(this.value).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    });
  }

  if (checkoutDate) {
    checkoutDate.addEventListener("change", function () {
      checkoutDisplay.textContent = new Date(this.value).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    });
  }

  // ================= Guest counters =================
  const guestCounts = { adults: 0, children: 0, pets: 0 };

  document.querySelectorAll(".g-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const type = btn.dataset.type;
      if (btn.dataset.action === "inc") {
        guestCounts[type]++;
      } else if (guestCounts[type] > 0) {
        guestCounts[type]--;
      }
      const countEl = document.getElementById(type + "Count");
      if (countEl) countEl.textContent = guestCounts[type];
      updateGuestsDisplay();
    });
  });

  function updateGuestsDisplay() {
    const guestsDisplay = document.getElementById("guestsDisplay");
    if (!guestsDisplay) return;

    const total = guestCounts.adults + guestCounts.children;
    let text = "Add guests";
    if (total > 0) {
      text = total + " guest" + (total > 1 ? "s" : "");
      if (guestCounts.pets > 0) {
        text += ", " + guestCounts.pets + " pet" + (guestCounts.pets > 1 ? "s" : "");
      }
    }
    guestsDisplay.textContent = text;
  }

  // ================= Submit handler (build query string to /listings) =================
  const airbnbSearch = document.getElementById("airbnbSearch");
  if (airbnbSearch) {
    airbnbSearch.addEventListener("submit", function (e) {
      e.preventDefault();
      const params = new URLSearchParams({
        location: document.getElementById("locationInput")?.value || "",
        checkin: checkinDate?.value || "",
        checkout: checkoutDate?.value || "",
        adults: guestCounts.adults,
        children: guestCounts.children,
        pets: guestCounts.pets,
      });
      window.location.href = "/listings?" + params.toString();
    });
  }

  // ================= Category filter bar (active state) =================
  document.querySelectorAll(".filter").forEach((filterEl) => {
    filterEl.addEventListener("click", () => {
      document.querySelectorAll(".filter").forEach((f) => f.classList.remove("active"));
      filterEl.classList.add("active");
      // Optional: redirect with category query, e.g.
      // const category = filterEl.querySelector("p").textContent.trim();
      // window.location.href = "/listings?category=" + encodeURIComponent(category);
    });
  });

});