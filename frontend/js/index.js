let url = "http://localhost:3000/item";

const viewHome = () => {
    fetch(url)
        .then((res) => res.json())
        .then((data) => data.map(item => {
            $(".contentBox").append(`<div class="card">
            <div class="card-body">
                <h6 class="card-subtitle mb-2 text-muted float-right">${item.category}</h6>
                <h5 class="card-title">${item.productName}</h5>
                <p class="card-text">${item.price}</p>
            </div>
            </div>`)
        }))
}

viewHome()