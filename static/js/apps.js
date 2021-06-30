// importing the data from data.js
const tableData = data;

// Referencing the HTML table using d3
var tbody = d3.select('tbody');

// Creating a function build a table
function buildTable(data) {
    //Clear out any existing data
    tbody.html('');

    //Create a loop to go through each row
    data.forEach((dataRow) => {
        //Append a row to the table body
        let row = tbody.append("tr");

        //Loop through each field in the dataRow and add each value to a cell
        Object.values(dataRow).forEach((val) => {
          let cell = row.append("td");
          cell.text(val);
          }
        );
      });
}

// Creating a function to handle a click
function handleClick() {
  // Grab the datetime value from the filter
  let date = d3.select('#datetime').property('value');
  let filteredData = tableDate;

  //Check to see if a date was entered and filter based on that date.
  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  };

  //Rebuild the table

  buildTable(filteredData);
};

//Attach an event to list for the form button
d3.selectAll('#filter-btn').on('click',handleClick);

//build the table when the page loads
buildTable(tableData);
