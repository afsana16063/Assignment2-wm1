document.addEventListener("DOMContentLoaded", function () {
  const queryParams = new URLSearchParams(window.location.search);
  const productId = queryParams.get("id");

  fetch(`https://dummyjson.com/products/${productId}`)
    .then((response) => response.json())
    .then((data) => {
      const detailsContainer = document.getElementById("productInfo");
      detailsContainer.innerHTML = `
        <div class="content">
          <h3 class="brand">${data.brand}</h3>
          <p class="title">${data.title}</p>
          <p class="description">${data.description}</p>
        </div>
        <div class="rating">Rating: ${data.rating}</div>
        <div class="price">Price: $${data.price}</div>
        <div class="gallery"></div>
        <button onclick="window.location.href='index.html'" class="btn">Go Back</button>
      `;
      const galleryContainer = detailsContainer.querySelector(".gallery");
      data.images.forEach((imageUrl) => {
        const imgElement = document.createElement("img");
        imgElement.src = imageUrl;
        imgElement.alt = data.title;
        galleryContainer.appendChild(imgElement);
      });
    })
    .catch((error) =>
      console.error("Error retrieving product details:", error)
    );
});
