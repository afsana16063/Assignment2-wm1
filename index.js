fetch("https://dummyjson.com/products")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    // Assuming the array of products is in a property called 'products'
    const products = data.products || [];

    let data1 = "";
    products.forEach((product) => {
      data1 += `
        <div class="productCard">
          <h1 class="productTitle">${product.title}</h1>
          <img src="${product.thumbnail}" alt="img" class="productImage" />
          <p>${product.description}</p>
          <p class="productCategory">${product.category}</p>
          <p class="productPrice">${product.price}</p>
          <p class="productDiscount">${product.discountPercentage}</p>
          <button onclick="window.location.href='more.html?id=${product.id}'" class="button">More...</button>
        </div>
         
        `;
    });

    document.getElementById("cards").innerHTML = data1;
  })
  .catch((err) => {
    console.error("Error fetching or processing data:", err);
  });
