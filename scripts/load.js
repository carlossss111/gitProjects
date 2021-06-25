var url = "https://api.jsonbin.io/v3/b/60d5f1118ea8ec25bd157a65/latest";

//display table data using JSON
var addTableData = cocktail => {
    var li = "";
    for(var i = 0; i < cocktail.ingredients.length; i++){
        li += "<li>";
        li += cocktail.ingredients[i];
        li += "</li>\n";
    }

    var tr = document.createElement("tr");
    document.querySelector("tbody").appendChild(tr);
    tr.innerHTML = 
            `<td>`
        +       `<img src="${cocktail.image}">` 
        +   `</td>`
        +   `<td class=\"itembox\">`
        +       `<h2>${cocktail.name}</h2>`
        +       `<ul class="ingredients">`
        +           `${li}`
        +       `</ul>`
        +       `<p class="description">`
        +           `${cocktail.description}`
        +           `<span class="date">${cocktail.date}</span>`
        +       `</p>`
        +   `</td>`;
}

//get JSON
fetch(url)

    //first check for errors
    .then(response => {
        if(response.ok)
            return response.json();
        throw new Error("Request failed.");
    }, networkError => console.log(networkError.message))

    //now take the response and use it
    .then(jsonResponse => {
        jsonResponse = jsonResponse.record;
        addTableData(jsonResponse.cocktails[0]);
        addTableData(jsonResponse.cocktails[1]);
    })
