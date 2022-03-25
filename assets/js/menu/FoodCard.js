export const FoodCard = (foodObj) => {

    return `
    <div class="col-sm-6 g-4">
        <div class="card" id=${foodObj.id}>
        <div class="h-100">
        <img src="./assets/images/${foodObj.imageURL}" class="card-img-top" alt="${foodObj.imageURL}">
        </div>
            <div class="card-body">
                <h5 class="card-title">${foodObj.name} ${foodObj.isVegetarian ? "<img src='./assets/images/icon-veg.png' alt='is rabbit food'></img>" : ""}</h5>
                <p class="card-text">${foodObj.description}</p>
                <p>Price: $${foodObj.price}</p>
                <button type="button" class="btn btn-primary" id="order__${foodObj.id}">order</button>
                <div id="quantity__${foodObj.id}">quantity: 0</div>
            </div>
        </div>
    </div>
    `
}

