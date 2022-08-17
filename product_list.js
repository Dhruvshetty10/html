let table = document.getElementById('products-table')
let data = JSON.parse(localStorage.getItem("data"))

function CreateTD(value) {
    let td = document.createElement("td")
    td.innerHTML = value
    return td
}

function editableButton(index) {
    let row = document.getElementById()
}

function TableRow(index, packet) {
    let row = document.createElement("tr")
    row.setAttribute("id","row-number-".concat(index));
    row.appendChild(CreateTD(index))
    row.appendChild(CreateTD(packet["productname"]))
    row.appendChild(CreateTD(packet["description"]))
    row.appendChild(CreateTD(packet["price"]))
    row.appendChild(CreateTD(packet["measurement"]))
    row.appendChild(CreateTD("Edit"))
    row.appendChild(CreateTD("Delete"))
    // console.log(row)
    table.appendChild(row)
}

function EditRow(index) {
    let row = document.getElementById("row-number-".concat(index))
    let tds = row.getElementsByTagName("td")
    row.contentEditable = "true"
}


for (let i = 0; i < data.length; i++) {
    TableRow(i,data[i])
    let editbutton = document.getElementById("row-number-".concat(i) + "Edit")
    editbutton.onclick = () => { EditRow(i) }
}