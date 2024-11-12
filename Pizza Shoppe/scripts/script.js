function updatePizza(layer, imagePath){
    const imgElement = document.getElementById(layer);
    imgElement.src = "media/" + imagePath; //add assets/ beofore imagePath
    imgElement.style.display = "block"; //ensure its visible
}

function updateTopping(toppingId, imagePath){
    const toppingElement = document.getElementById(toppingId);
    if(
        toppingElement.style.display === 'none' || 
        toppingElement.style.display === ""
    ){
        toppingElement.src = "media/" + imagePath;
        toppingElement.style.display = "block";
    }else{
        toppingElement.style.display = "none"; //hide topping
    }
}

function addToCart(){
     // Get the shopping cart container
     const cart = document.querySelector(".page2");

     // Create the item cell
     const itemCell = document.createElement("div");
     itemCell.classList.add("item-cell");

     // Create the small image container
     const itemImage = document.createElement("div");
     itemImage.classList.add("item-image");

     // Create a clone of the pizza image and make it smaller (100x100)
     const pizzaClone = document.querySelector(".pizza-container").cloneNode(true);
     pizzaClone.style.width = "100px";
     pizzaClone.style.height = "100px";
     pizzaClone.querySelectorAll("img").forEach((img) => {
        img.style.width = "100px";
        img.style.height = "100px";
    });
    itemImage.appendChild(pizzaClone);

    // Create the description
    const itemDescription = document.createElement("div");
    itemDescription.classList.add("item-description");
    
    // Get selected crust, sauce, and toppings for description
    const crust =
        document.querySelector('input[name="crust"]:checked').value.charAt(0).toUpperCase() +
        document.querySelector('input[name="crust"]:checked').value.slice(1); //Ensures that first character is capitalized

    const sauce =
        document.querySelector('input[name="sauce"]:checked').value.charAt(0).toUpperCase() +
        document.querySelector('input[name="sauce"]:checked').value.slice(1); //Ensures that first character is capitalized

    const toppings =
        Array.from(document.querySelectorAll('input[name="topping"]:checked'))
            .map(
                (topping) =>
                    topping.value.charAt(0).toUpperCase() + topping.value.slice(1)
            )
            .join(", ") || "No Toppings";

    itemDescription.textContent = `${crust} Crust, ${sauce} Sauce, ${toppings}`;
    // Append the image and description to item cell
    itemCell.appendChild(itemImage);
    itemCell.appendChild(itemDescription);
    // Add the item cell to the cart
    cart.appendChild(itemCell);
}
