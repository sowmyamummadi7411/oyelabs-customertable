// app.js

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const request = require("request");

app.use(bodyParser.json());

const path = require("path");

const { open } = require("sqlite");
const sqlite3 = require("sqlite3");

const dbPath = path.join(__dirname, "customersTables.db");

let db = null;

const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () => {
      console.log("Server Running at http://localhost:3000/");
    });
  } catch (e) {
    console.log(`DB Error: ${e.message}`);
    process.exit(1);
  }
};

initializeDBAndServer();

// Phone number login endpoint

// this is first question

app.post("/login", (req, res) => {
  const phoneNumber = req.body.phoneNumber;
  // Perform login logic here
  // ...

  // Return response
  res.json({ success: true, message: "Logged in successfully" });
});

// this is second question

app.get("/customer/", async (request, response) => {
  const getBooksQuery = `
    SELECT
      *
    FROM
      customers;`;
  const booksArray = await db.all(getBooksQuery);
  response.send(booksArray);
});

app.get("/subjects/", async (request, response) => {
  const getBooksQuery = `
    select customers.name as name,
    T.subjectName as subjectName from customers
    Inner JOIN subject_student_mapping ON 
    (customers.customerid = subject_student_mapping.customerid)
    AS T 
    INNER JOIN subjects
ON T.subjectld = subjects.subjectld ;
`;
  const booksArray = await db.all(getBooksQuery);
  response.send(booksArray);
});

// this is 3rd question

const mysql = require("sqlite");

const customers = [
  { email: "anurag11@yopmail.com", name: "anurag" },
  { email: "sameer11@yopmail.com", name: "sameer" },
  { email: "ravi11@yopmail.com", name: "ravi" },
  { email: "akash11@yopmail.com", name: "akash" },
  { email: "anjali11@yopmail.com", name: "anjai" },
  { email: "santosh11@yopmail.com", name: "santosh" },
];

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "customersTables.db",
});

connection.connect();

customers.forEach((customer) => {
  const { email, name } = customer;
  const query = `INSERT INTO customers (email, name) VALUES (?, ?) ON DUPLICATE KEY UPDATE name = ?`;

  connection.query(query, [email, name, name], (error, results) => {
    if (error) throw error;
    console.log(`Customer inserted: ${email}`);
  });
});

connection.end();

// this is 4th question

const person = { id: 2, gender: "mail" };
const student = { name: "ravi", email: "ravi11@yopmail.com" };

const newObject = { ...person, ...student };

console.log(newObject);

//this is 5th one

function getGoogleHomePage() {
  return new Promise((resolve, reject) => {
    request("http://www.google.com", function (error, response, body) {
      if (error) {
        console.error("error:", error);
        reject(error);
      } else {
        console.log("statusCode:", response && response.statusCode);
        console.log("body:", body);
        resolve(body);
      }
    });
  });
}

getGoogleHomePage()
  .then((result) => {
    console.log("RESULT==>", result);
  })
  .catch((error) => {
    console.error("ERROR:", error);
  });

//this last one 6th question

//Generate an array of integers from 1 to 100 (with one number missing)

const generateArrayWithMissingNumber = () => {
  const array = [];
  for (let i = 1; i <= 100; i++) {
    if (i !== 42) {
      array.push(i);
    }
  }
  return array;
};

const findMissingNumber = (arr) => {
  const expectedSum = (100 * (100 + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  const missingNumber = expectedSum - actualSum;
  return missingNumber;
};

const arrayWithMissingNumber = generateArrayWithMissingNumber();
const missingNumber = findMissingNumber(arrayWithMissingNumber);

console.log("Missing number:", missingNumber);
