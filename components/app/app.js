function getAppData(appId) {
  for (const city in mobilityData) {
    for (const category in mobilityData[city]) {
      const app = mobilityData[city][category].find((app) => app.id === appId);
      if (app) return app;
    }
  }
  return null;
}

const urlParams = new URLSearchParams(window.location.search);
const appId = urlParams.get("id");

// Populate app details
function loadAppDetails(appId) {
  const app = getAppData(appId);
  if (!app) {
    document.querySelector(".app-detail").innerHTML = `
      <div class="no-data">App not found</div>
    `;
    return;
  }

  document.getElementById("appName").textContent = app.name;
  document.getElementById("appDescription").textContent = app.description;
  document.getElementById("androidLink").href = app.androidLink;
  document.getElementById("iosLink").href = app.iosLink;

  const sampleReviews = [
    { rating: 5, text: "Great service, always reliable!", author: "John D." },
    {
      rating: 4,
      text: "Good app, but sometimes prices are high",
      author: "Sarah M.",
    },
  ];

  const reviewsList = document.getElementById("reviewsList");
  reviewsList.innerHTML = sampleReviews
    .map(
      (review) => `
        <div class="review-item">
          <div>Rating: ${"★".repeat(review.rating)}${"☆".repeat(
        5 - review.rating
      )}</div>
          <p>${review.text}</p>
          <small>- ${review.author}</small>
        </div>
      `
    )
    .join("");
}

function initializeStarRating() {
  const stars = document.querySelectorAll(".star-rating .star");

  stars.forEach((star) => {
    star.addEventListener("mouseover", function () {
      const value = this.getAttribute("data-value");
      highlightStars(value, false);
    });

    star.addEventListener("mouseout", function () {
      const starRating = this.parentElement;
      const currentRating = starRating.getAttribute("data-rating");
      highlightStars(currentRating, true);
    });

    star.addEventListener("click", function () {
      const value = this.getAttribute("data-value");
      const starRating = this.parentElement;
      starRating.setAttribute("data-rating", value);
      highlightStars(value, true);
    });
  });
}

function highlightStars(value, isPermanent) {
  const stars = document.querySelectorAll(".star-rating .star");
  stars.forEach((star) => {
    const starValue = star.getAttribute("data-value");
    if (starValue <= value) {
      if (isPermanent) {
        star.classList.add("active");
      } else {
        star.style.color = "#ffcc00";
      }
    } else {
      if (isPermanent) {
        star.classList.remove("active");
      } else {
        star.style.color = "#ccc";
      }
    }
  });
}

document.getElementById("reviewForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const rating = document
    .querySelector(".star-rating")
    .getAttribute("data-rating");
  const review = {
    rating: parseInt(rating),
    text: formData.get("review"),
    author: "Anonymous User",
  };

  const reviewsList = document.getElementById("reviewsList");
  const reviewItem = document.createElement("div");
  reviewItem.className = "review-item";
  reviewItem.innerHTML = `
    <div>Rating: ${"★".repeat(review.rating)}${"☆".repeat(
    5 - review.rating
  )}</div>
    <p>${review.text}</p>
    <small>- ${review.author}</small>
  `;
  reviewsList.appendChild(reviewItem);

  e.target.reset();
  document.querySelector(".star-rating").setAttribute("data-rating", "0");
  highlightStars(0);
});

// Initialize page
loadAppDetails(appId);
initializeStarRating();
