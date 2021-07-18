// from data.js
var tableData = data;

// YOUR CODE HERE!
// from data.js
var tableData = data;


// YOUR CODE HERE!

// Here we find unique Dates:
const unqdate = (value, index, self) => {
    return self.indexOf(value) === index
  }
  
  var listdate = data.map(date => date.datetime);
  const uniqueDate = listdate.filter(unqdate)
  
//Assign Unique Dates to Drop Down Menu to be selected
var selectDate = document.getElementById("datetime"); 

for(var i = 0; i < uniqueDate.length; i++) {
    var opt = uniqueDate[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    selectDate.appendChild(el);
};
// Here we find unique Cities:
const unqCiti = (value, index, self) => {
    return self.indexOf(value) === index
  }
  
  var listCiti = data.map(citi => citi.city);
  const uniqueCiti = listCiti.filter(unqCiti)
  
  //Assign Unique Cities to Drop Down Menu to be selected
var selectCiti = document.getElementById("selectcity"); 

for(var i = 0; i < uniqueCiti.length; i++) {
    var opt = uniqueCiti[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    selectCiti.appendChild(el);
};
// Here we find unique States:
const unqState = (value, index, self) => {
    return self.indexOf(value) === index
  }
  
  var listState = data.map(state => state.state);
  const uniqueState = listState.filter(unqState)
  
  //Assign Unique States to Drop Down Menu to be selected
var selectState = document.getElementById("selectstate"); 

for(var i = 0; i < uniqueState.length; i++) {
    var opt = uniqueState[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    selectState.appendChild(el);
};
// Here we find unique Country:
const unqcountry = (value, index, self) => {
    return self.indexOf(value) === index
  }
  
  var listCountry = data.map(country => country.country);
  const uniqueCountry = listCountry.filter(unqcountry)
  
  //Assign Unique Country to Drop Down Menu to be selected
var selectCountry = document.getElementById("selectcountry"); 

for(var i = 0; i < uniqueCountry.length; i++) {
    var opt = uniqueCountry[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    selectCountry.appendChild(el);
};

// Here we find unique Shapes:
const unqshape = (value, index, self) => {
    return self.indexOf(value) === index
  }
  
  var listShape = data.map(shape => shape.shape);
  const uniqueShape = listShape.filter(unqshape)
  
  //Assign Unique Shapes to Drop Down Menu to be selected
var selectShape = document.getElementById("selectshape"); 

for(var i = 0; i < uniqueShape.length; i++) {
    var opt = uniqueShape[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    selectShape.appendChild(el);
}; 


    
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
        var inputDate = d3.select("#datetime").property("value");
        var inputCity = d3.select("#city").property("value");
        var inputState = d3.select("#state").property("Value");
        var inputCountry =d3.select("#country").property("Value");
        var inputShape =d3.select("#shape").property("Value");

        while (inputDate === ""){
            while(inputCity === ""){
                while(inputState === ""){
                    while(inputCountry=== ""){
                        while(inputShape=== ""){
                            tableData.forEach(function(dataRow){
                                var table_body = d3.select("tbody")
                                var newRow = table_body.append("tr")
                                Object.values(dataRow).forEach(colValue => {
                                newRow.append("td").text(colValue);
                            });
                        });
                        }
                    }
                }
            }
        };
              

        
        filteredDate = data.filter(ufo1 => ufo1.datetime === inputDate)

        filteredDate.forEach(function(dataRow){
            var table_body = d3.select("tbody")
            var newRow = table_body.append("tr")
            Object.values(dataRow).forEach(colValue => {
            newRow.append("td").text(colValue);
        });
    });

    d3.select("#filter-btn").on("click", myFunction);
}

