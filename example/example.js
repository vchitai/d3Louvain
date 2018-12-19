function createTable(tableData) {
  var table = document.createElement("table");
  var tableBody = document.createElement("tbody");

  tableData.forEach(function(rowData) {
    var row = document.createElement("tr");

    rowData.forEach(function(cellData) {
      var cell = document.createElement("td");
      cell.appendChild(document.createTextNode(cellData));
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  document.body.appendChild(table);
}

function createTableX(tableData) {
  var table = document.createElement("table");
  var tableBody = document.createElement("tbody");

  tableData.forEach(function(rowData) {
    var row = document.createElement("tr");
    console.log(Object.keys(rowData));
    Object.keys(rowData).forEach(function(cellData) {
      console.log(cellData);
      var cell = document.createElement("td");
      cell.appendChild(document.createTextNode(rowData[cellData]));
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  document.body.appendChild(table);
}

function createTableFromX(obj) {
  var table = document.createElement("table");
  var tableBody = document.createElement("tbody");

  for (var i = 0; i < obj.length; i++) {
    var tr = "<tr>";
    console.log(obj[i]);
    /* Verification to add the last decimal 0 */
    // if (obj[i].value.toString().substring(obj[i].value.toString().indexOf('.'), obj[i].value.toString().length) < 2)
    //     obj[i].value += "0";

    /* Must not forget the $ sign */
    tr +=
      "<td>" +
      obj[i].source.toString() +
      "</td>" +
      "<td>" +
      obj[i].target.toString() +
      "</td>" +
      "<td>" +
      obj[i].weight.toString() +
      "</td></tr>";

    /* We add the table row to the table body */
    tableBody.innerHTML += tr;
  }
  table.appendChild(tableBody);
  document.body.appendChild(table);
}
