// from data.js
var tableData = data;


// YOUR CODE HERE!


    
    // One Function Does it All!!
    // First Clear the existing table then Run the Filter
    function myFunction(){
        clearTable();
        submitHandler();
       
    }


    // Clear the existing table
    function clearTable(){
        var table_body =d3.selectAll("td")
        table_body.remove()
        
    }

    // Filter by the click
    function submitHandler(){
        var inputValue = d3.select("#datetime").property("value");
        filteredDate = data.filter(ufo1 => ufo1.datetime === inputValue)

        filteredDate.forEach(function(dataRow){
            var table_body = d3.select("tbody")
            var newRow = table_body.append("tr")
            Object.values(dataRow).forEach(colValue => {
            newRow.append("td").text(colValue);
        });
    });
};
    d3.select("#filter-btn").on("click", myFunction);
    