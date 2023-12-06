document.addEventListener("DOMContentLoaded", function () {
  const takeURL = new URLSearchParams(window.location.search);
  const productID = takeURL.get("id");

  fetch(`https://dummyjson.com/products/${productID}`)
    .then((response) => response.json())
    .then((data) => {
      const productDetailsContainer = document.getElementById("productInfo");
      productDetailsContainer.innerHTML = `
      <div class="productContent">
      <h2 class="company">${data.brand}</h2>
      <p class="productsTitle">${data.title}</h2>
      <p class="productDescription">${data.description}</p>
      </content>
      <div class="productRating">Rating: ${data.rating}</div>
      <div class="productPrice">Price: $${data.price}</div>
      <div class="productGallery"></div>
      <button onclick="window.location.href='index.html'" class="btn">Go Back</button>
    `;
      const galleryContainer =
        productDetailsContainer.querySelector(".productGallery");
      data.images.forEach((imageUrl) => {
        const imgElement = document.createElement("img");
        imgElement.src = imageUrl;
        imgElement.alt = data.title;
        galleryContainer.appendChild(imgElement);
      });
    })
    .catch((error) => console.error("Error fetching product info:", error));
});
