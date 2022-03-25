export const FoodCard = (foodObj) => {

    return `
    <div class="col-sm-6 g-4">
        <div class="card">
        <div class="h-100">
        <img src="./assets/images/${foodObj.imageURL}" class="card-img-top" alt="${foodObj.imageURL}">
        </div>
            <div class="card-body">
                <h5 class="card-title">${foodObj.name}</h5>
                <p class="card-text">${foodObj.description}</p>
                <p>Price: $${foodObj.price}</p>
                <button type="button" class="btn btn-primary" id="order__${foodObj.id}">order</button>
                <div id="quantity__${foodObj.id}">quantity: 0</div>
            </div>
        </div>
    </div>
    `
}

