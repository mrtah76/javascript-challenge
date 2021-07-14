// from data.js
var tableData = data;

// YOUR CODE HERE!

//code to display data into the table
data.forEach(function(dataRow){
    var table = d3.select("#ufo-table")
    var table_body = d3.select("tbody")
    var newRow = table_body.append("tr")
    Object.values(dataRow).forEach(colValue => {
            newRow.append("td").text(colValue);
        });
    });

//code to click_handler
    function submitHandler(){
        d3.event.preventDefault();
        var inputValue = d3.select("#datetime").property("value");
        filteredData = data.filter(ufo1 => ufo1.Date === inputValue)
        console.log(inputValue)
           
    };
    d3.select("#filter-btn").on("click", submitHandler);    