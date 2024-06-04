import { cardComponent } from "../components/cardComponent.js";
 let renderArea = document.querySelector("#Area");

 const url = "http://127.0.0.1:5500/data/products.json";

fetch(url)
  .then((res) => res.json())
  .then((datas) => {
    let products = datas.products;
    products.map((product) => (renderArea.innerHTML += cardComponent(product)));
  });