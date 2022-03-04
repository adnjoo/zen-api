const fs = require("fs");
const { parse } = require("csv-parse");
const db = require("./db");

const csvData = [];
fs.createReadStream("./text.csv")
  .pipe(parse({ delimiter: ":" }))
  .on("data", (csvrow) => {
    //do something with csvrow
    csvData.push(csvrow);
  })
  .on("end", () => {
    // Push title, and content into a new array
    const csvData2 = [];
    for (let i = 0; i < csvData.length; i += 2) {
      const row = [csvData[i], csvData[i + 1]].flat();
      csvData2.push(row);
    }
    // The insert statement
    const query = "INSERT INTO koans (title, content) VALUES ($1, $2)";
    db.connect((err, client, done) => {
      if (err) throw err;
      try {
        // loop over the lines stored in the csv file
        csvData2.forEach((row) => {
          // For each line we run the insert query with the row providing the column values
          client.query(query, row, (err, res) => {
            if (err) {
              // We can just console.log any errors
              console.log(err.stack);
            } else {
              console.log("inserted " + res.rowCount + " row:", row);
            }
          });
        });
      } finally {
        done();
      }
    });
  });
