// from data.js
var tableData = data;


//
var tbody = d3.select("tbody");
console.log(tableData);

//UFO Columns
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    //
    var row = tbody.append("tr");

}
)