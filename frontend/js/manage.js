// const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/, "$1")

// if (!cookieValue) {
//     $(".container").html("")
//     window.location.href = "/signin"
// }
// else {
//     windows.location.href = "/manage"
// }

let url = "http://localhost:3000/item";

selectedRow = null;
function onFormSubmit() {
    if (selectedRow == null) {
        let post = myInput();
        newPost(post);
    }
    else {
        let edit = myInput();
        updateRecord(edit)
        resetForm()
    }

}

const viewData = () => {
    let tbody = document.getElementById("table-row");
    tbody.innerHTML = "";

    fetch(url)
        .then((res) => res.json())
        .then((data) => data.map(item => {
            let row = tbody.insertRow();
            let id = row.insertCell(0)
            let productName = row.insertCell(1);
            let category = row.insertCell(2);
            let price = row.insertCell(3);
            let stock = row.insertCell(4);
            let createAt = row.insertCell(5);
            let action = row.insertCell(6);

            id.innerHTML = item.id
            productName.innerHTML = item.productName;
            category.innerHTML = item.category;
            price.innerHTML = item.price;
            stock.innerHTML = item.stock;
            createAt.innerHTML = item.createdAt;
            action.innerHTML = `<a href="#" onclick="onEdit(this)"> <i  id="edit" class="fas fa-user-edit"></i></a> &nbsp;&nbsp;
<a href="#" > <i id="hapus" class="fas fa-trash" style="color:red" onclick="remove(`+ item.id + `)"></i> </a> 
`
            if (item.stock <= 10) {
                // document.getElementsByTagName("td")[4].style = "background:red";
                stock.style = "background-color:red"
            }
            else if (item.stock > 11 && item.stock < 30) {
                stock.style = "background-color:yellow"
            }
            else {
                stock.style = "background-color:green"
            }

        }))
}


// add data

const myInput = () => {
    let Product = document.getElementById("ProductName");
    let price = document.getElementById("Price");
    let category = document.getElementById("category");
    let stock = document.getElementById("stock");
    let dateObj = new Date();
    let day = dateObj.getUTCDate();
    let month = dateObj.getUTCMonth() + 1;
    let year = dateObj.getUTCFullYear();
    let newDate = day + "/" + month + "/" + year;
    let result = {
        "productName": Product.value,
        "price": price.value,
        "category": category.value,
        "stock": stock.value,
        "createdAt": newDate
    }
    return result;
}



// function tambah data
const newPost = post => {
    const option = {
        method: 'POST',
        body: JSON.stringify(post),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }
    return fetch(url, option)
        .then((respons) => viewData())
        .catch((error) => console.error(`error: ${error}`))

}

// function ketika tombol edit di klik
function onEdit(td) {
    // menentukan isi value yang akan di kirim ke form submit
    selectedRow = td.parentElement.parentElement;
    document.getElementById("id").value = selectedRow.cells[0].innerHTML;
    document.getElementById("ProductName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Price").value = selectedRow.cells[2].innerHTML;
    document.getElementById("category").value = selectedRow.cells[3].innerHTML;
    document.getElementById("stock").value = selectedRow.cells[4].innerHTML;
}


// function untuk edit value
function updateRecord(edit) {
    const option = {
        method: "PUT",
        body: JSON.stringify(edit),
        headers: {
            "Content-Type": "application/json"
        }
    }
    fetch(`${url}/${selectedRow.cells[0].innerHTML}`, option)
        .then((respons) => viewData())
        .catch((error) => console.error(`error: ${error}`))

}


const remove = (id) => {
    const options = {
        method: "DELETE",
    }
    fetch(`${url}/${id}`, options)
        .then((respons) => viewData())
        .catch((error) => console.error(`error: ${error}`))

}

const resetForm = () => {
    document.getElementById('ProductName').value = "";
    document.getElementById('Price').value = "";
    document.getElementById('category').value = "";
    document.getElementById('stock').value = ""
}


viewData()