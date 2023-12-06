fetch("https://dummyjson.com/products")
  .then((data) => {
    //whatever we write here it is gonna be converted to an object
    return data.json();
  })
  .then((completedata) => {
    // console.log(completedata);
    // document.getElementById("root").innerHTML = completedata[2].title;
    let data1 = [];
    completedata.map((values) => {
      data1 += ` 
        <div class="productCard">
          <h1 class="productTitle">${values.title}</h1>
          <img src=${values.thumbnail} alt="img" class="productImage" />
          <p>${values.description}</p>
          <p class="productCategory">${values.category}</p>
          <p class="productPrice">${values.price}</p>
          <p class="productDiscount">${values.discountPercentage}</p>
        </div>`;
    });
    document.getElementById("cards").innerHTML = data1;
  })
  .catch((err) => {
    console.log(err);
  });
