fetch("https://dummyjson.com/products")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((product) => {
      const markup = `<li>${product.name}</li>`;

      document.querySelector("ul").insertAdjacentHTML("beforeend", markup);
    });
  })
  .catch((error) => console.log(error));
