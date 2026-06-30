const COUNTRIES = [
  "Afghanistan","Albania","Algeria","Andorra","Angola","Argentina","Armenia",
  "Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Belarus",
  "Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina",
  "Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia",
  "Cameroon","Canada","Chad","Chile","China","Colombia","Congo","Costa Rica",
  "Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti",
  "Dominican Republic","Ecuador","Egypt","El Salvador","Estonia","Ethiopia",
  "Fiji","Finland","France","Gabon","Georgia","Germany","Ghana","Greece",
  "Guatemala","Guinea","Haiti","Honduras","Hungary","Iceland","India",
  "Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan",
  "Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyzstan","Laos","Latvia",
  "Lebanon","Libya","Lithuania","Luxembourg","Madagascar","Malaysia",
  "Maldives","Mali","Malta","Mexico","Moldova","Mongolia","Montenegro",
  "Morocco","Mozambique","Myanmar","Namibia","Nepal","Netherlands",
  "New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman",
  "Pakistan","Panama","Paraguay","Peru","Philippines","Poland","Portugal",
  "Qatar","Romania","Russia","Rwanda","Saudi Arabia","Senegal","Serbia",
  "Sierra Leone","Singapore","Slovakia","Slovenia","Somalia","South Africa",
  "South Korea","Spain","Sri Lanka","Sudan","Sweden","Switzerland","Syria",
  "Taiwan","Tajikistan","Tanzania","Thailand","Togo","Trinidad and Tobago",
  "Tunisia","Turkey","Turkmenistan","Uganda","Ukraine","United Arab Emirates",
  "United Kingdom","United States","Uruguay","Uzbekistan","Venezuela",
  "Vietnam","Yemen","Zambia","Zimbabwe"
];

const input = document.getElementById("country-input");
const dropdown = document.getElementById("country-dropdown");

if (input && dropdown) {
  let activeIdx = -1;

  function renderDropdown(query) {
    dropdown.innerHTML = "";
    activeIdx = -1;

    if (!query) {
      dropdown.style.display = "none";
      return;
    }

    const q = query.toLowerCase();
    const startsWith = COUNTRIES.filter(c => c.toLowerCase().startsWith(q));
    const contains = COUNTRIES.filter(
      c => !c.toLowerCase().startsWith(q) && c.toLowerCase().includes(q)
    );
    const results = [...startsWith, ...contains].slice(0, 10);

    if (!results.length) {
      dropdown.style.display = "none";
      return;
    }

    results.forEach((country, i) => {
      const li = document.createElement("li");
      const idx = country.toLowerCase().indexOf(q);
      li.innerHTML =
        country.slice(0, idx) +
        "<strong>" + country.slice(idx, idx + q.length) + "</strong>" +
        country.slice(idx + q.length);

      li.style.cssText = "padding: 10px 14px; cursor: pointer; font-size: 14px; color: #333; background: white;";

      li.addEventListener("mouseenter", () => {
        activeIdx = i;
        highlight();
      });
      li.addEventListener("mouseleave", () => {
        li.style.background = "white";
      });
      li.addEventListener("mousedown", (e) => {
        e.preventDefault();
        selectCountry(country);
      });

      dropdown.appendChild(li);
    });

    dropdown.style.display = "block";
  }

  function highlight() {
    Array.from(dropdown.children).forEach((li, i) => {
      li.style.background = i === activeIdx ? "#f0f0f0" : "white";
    });
  }

  function selectCountry(country) {
    input.value = country;
    dropdown.style.display = "none";
  }

  input.addEventListener("input", () => renderDropdown(input.value.trim()));

  input.addEventListener("keydown", (e) => {
    const items = dropdown.children;
    if (!items.length) return;

    if (e.key === "ArrowDown") {
      activeIdx = Math.min(activeIdx + 1, items.length - 1);
      highlight();
      e.preventDefault();
    } else if (e.key === "ArrowUp") {
      activeIdx = Math.max(activeIdx - 1, 0);
      highlight();
      e.preventDefault();
    } else if (e.key === "Enter" && activeIdx >= 0) {
      selectCountry(items[activeIdx].textContent);
      e.preventDefault();
    } else if (e.key === "Escape") {
      dropdown.style.display = "none";
    }
  });

  document.addEventListener("click", (e) => {
    if (!input.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.style.display = "none";
    }
  });
}