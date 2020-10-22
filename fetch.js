 function getProducts() {
     return fetch("./data.json")
     
     .then (function(response){
         return response.json();
     })
    }

    function showProducts() {
        getProducts()
        .then (function(data){
            console.log(data);
            let productTemplate = document.querySelector(".productCatalogue");
            let productDetails = document.querySelector("#productDetails");

            data.products.forEach(function(product){
                let clone = productDetails.content.cloneNode(true);
                let title = clone.querySelector(".productTitle");
                let description = clone.querySelector(".productDescription"); 
                let weight = clone.querySelector(".productWeight");
                let price = clone.querySelector(".productPrice");

                title.innerText = product.name;
                description.innerText = product.description;
                weight.innerText = product.weight; 
                price.innerText = product.price;

                productTemplate.appendChild(clone);
            });   
        });
    }
showProducts();
