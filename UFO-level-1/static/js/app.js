// from data.js
var tableData = data;


// YOUR CODE HERE!


    //updated code
    // clearBox("table-area");

    function submitHandler(){
        // var table = d3.select("#ufo-table");
//or use :  var table = document.all.tableid;

       
        // clearBox("table-area");
        d3.event.preventDefault();
        var table = d3.select("#ufo-table")
        
        var inputValue = d3.select("#datetime").property("value");
        filteredDate = data.filter(ufo1 => ufo1.datetime === inputValue)

        filteredDate.forEach(function(dataRow){
    var table = d3.select("#ufo-table")
    
      var table_body = d3.select("tbody")
    var newRow = table_body.append("tr")
    Object.values(dataRow).forEach(colValue => {
            newRow.append("td").text(colValue);
        });
    });
};
    d3.select("#filter-btn").on("click", submitHandler);
    