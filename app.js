const express = require("express");
const app = express();
module.exports = app;
const addDays = require("date-fns/addDays");

app.get("/", (request, response) => {
  let date = new Date();
  let dateAfter100Days = addDays(date, 100);
  response.send(
    `${dateAfter100Days.getDate()}/${
      dateAfter100Days.getMonth() + 1
    }/${dateAfter100Days.getFullYear()}`
  );
});

app.listen(3000);
