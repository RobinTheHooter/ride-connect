// Function to detect user location with a timeout
async function detectUserLocation() {
  try {
    const position = await new Promise((resolve, reject) => {
      const timeout = setTimeout(
        () => reject(new Error("Location detection timed out")),
        3000
      ); // 3-second timeout
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          clearTimeout(timeout); // Clear the timeout if location is detected
          resolve(pos);
        },
        (err) => {
          clearTimeout(timeout); // Clear the timeout if there's an error
          reject(err);
        },
        {
          enableHighAccuracy: true,
          timeout: 3000, // Timeout for geolocation
          maximumAge: 0,
        }
      );
    });

    const { latitude, longitude } = position.coords;
    const city = await getCityFromCoordinates(latitude, longitude); // Optional: To fetch city from coordinates, or fallback
    return city;
  } catch (error) {
    console.error("Error detecting location:", error);
    return "delhi"; // Fallback to "delhi" if location detection fails
  }
}

// Function to update content based on selected city
function updateContent(city) {
  const mainContent = document.querySelector(".mobility-categories");
  mainContent.innerHTML = "";

  const cityData = mobilityData[city];

  if (!cityData) {
    mainContent.innerHTML = `
      <div class="no-data">
        No data available for this city. We will be adding it soon!
      </div>
    `;
    return;
  }

  // Create category sections
  const categories = ["cabs", "bikes", "autos", "porter"];
  categories.forEach((category) => {
    const categoryApps = cityData[category] || [];
    const categorySection = document.createElement("div");
    categorySection.className = "category";
    categorySection.innerHTML = `
      <h2>${category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      <div class="app-grid">
        ${categoryApps
          .map(
            (app) => `
            <a href="./components/app/app.html?id=${app.id}" class="app-item">
              <img src="${app.icon}" alt="${app.name}" class="app-icon">
              <div>${app.name}</div>
            </a>
          `
          )
          .join("")}
      </div>
    `;
    mainContent.appendChild(categorySection);
  });
}

// Function to update museum content based on selected city
function updateMuseumContent(city) {
  const museumContent = document.getElementById("museumContent");
  museumContent.innerHTML = "";

  const cityMuseumData = museumData[city];

  if (!cityMuseumData) {
    museumContent.innerHTML = `
      <div class="no-data">
        No museum exhibits available for this city. Stay tuned!
      </div>
    `;
    return;
  }

  // Create museum exhibit grid
  const museumGrid = document.createElement("div");
  museumGrid.className = "museum-grid";
  museumGrid.innerHTML = cityMuseumData
    .map(
      (exhibit) => `
    <div class="museum-exhibit">
      <img src="${exhibit.image}" alt="${exhibit.name}" class="exhibit-image">
      <div class="exhibit-details">
        <h3>${exhibit.name}</h3>
        <p>${exhibit.description}</p>
      </div>
    </div>
  `
    )
    .join("");

  museumContent.appendChild(museumGrid);
}

// Modify the existing initialize function to include museum content update
async function initialize() {
  createLoadingOverlay();

  // Wait for a few seconds before detecting the user's location
  setTimeout(async () => {
    const citySelector = document.getElementById("citySelector");
    const detectedCity = await detectUserLocation(); // Try detecting user location
    citySelector.value = detectedCity;
    updateContent(detectedCity);
    updateMuseumContent(detectedCity); // Add this line to update museum content

    const loadingOverlay = document.querySelector(".loading-overlay");
    loadingOverlay.style.display = "none"; // Hide the loading spinner
  }, 3000);
}

// Create and append loading overlay
function createLoadingOverlay() {
  const overlay = document.createElement("div");
  overlay.className = "loading-overlay";
  overlay.style.display = "flex";
  overlay.innerHTML = `
    <div class="loading-spinner"></div>
    <div class="loading-text">Detecting your location...</div>
  `;
  document.body.appendChild(overlay);

  // Add styles
  const styles = document.createElement("style");
  styles.textContent = `
    .loading-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 1);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 9999;
    }

    .loading-spinner {
      width: 60px;
      height: 60px;
      border: 4px solid #f3f3f3;
      border-top: 4px solid #51019a;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    .loading-text {
      margin-top: 20px;
      font-family: Arial, sans-serif;
      font-size: 18px;
      color: #333;
      animation: pulse 1.5s ease-in-out infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    @keyframes pulse {
      0% { opacity: 0.6; }
      50% { opacity: 1; }
      100% { opacity: 0.6; }
    }
  `;
  document.head.appendChild(styles);
}

// Event Listeners
document.getElementById("citySelector").addEventListener("change", (e) => {
  const selectedCity = e.target.value;
  updateContent(selectedCity);
  updateMuseumContent(selectedCity);
});

document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for subscribing!");
});

// Initialize
async function initialize() {
  createLoadingOverlay();

  setTimeout(async () => {
    const citySelector = document.getElementById("citySelector");
    const detectedCity = await detectUserLocation();
    citySelector.value = detectedCity;
    updateContent(detectedCity);
    updateMuseumContent(detectedCity);

    const loadingOverlay = document.querySelector(".loading-overlay");
    loadingOverlay.style.display = "none";
  }, 3000);
}

document.addEventListener("DOMContentLoaded", initialize);
