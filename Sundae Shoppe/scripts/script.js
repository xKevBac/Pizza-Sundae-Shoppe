function updateBowl(layer, imagePath){
    const imgElement = document.getElementById(layer);
    imgElement.src = "media/" + imagePath; //add assets/ beofore imagePath
    imgElement.style.display = "block"; //ensure its visible
}

function updateTopping(toppingId, imagePath){
    const toppingElement = document.getElementById(toppingId);
    if(
        toppingElement.style.display === 'none' || 
        toppingElement.style.display === ""){
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

    // Create a clone of the Sundae image and make it smaller (100x100)
    const SundaeClone = document.querySelector(".sundae-container").cloneNode(true);
    SundaeClone.style.width = "100px";
    SundaeClone.style.height = "100px";
    SundaeClone.querySelectorAll("img").forEach((img) => {
       img.style.width = "100px";
       img.style.height = "100px";
   });
   itemImage.appendChild(SundaeClone);

   // Create the description
   const itemDescription = document.createElement("div");
   itemDescription.classList.add("item-description");
   
   // Get selected flavor, sauce, and toppings for description
   const flavor =
       document.querySelector('input[name="flavor"]:checked').value.charAt(0).toUpperCase() +
       document.querySelector('input[name="flavor"]:checked').value.slice(1); //Ensures that first character is capitalized

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

   itemDescription.textContent = `${flavor} Flavor, ${sauce} Sauce, ${toppings}`;
   // Append the image and description to item cell
   itemCell.appendChild(itemImage);
   itemCell.appendChild(itemDescription);
   // Add the item cell to the cart
   cart.appendChild(itemCell);
}
