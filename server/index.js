const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const mysql = require('mysql');

const db = mysql.createConnection({
	user: "sqluser",
	host: "localhost",
	password: "password",
	database: "employeesystem"
});

app.post("/create", (req, res) => {
	const name = req.body.name;
	const age = req.body.age;
	const country = req.body.country;
	const position = req.body.position;
	const wage = req.body.wage;

	console.log(name + age + country + position + wage);

	db.query("INSERT INTO employees (name,age,country,position,wage) VALUES (?,?,?,?,?)",
		[name, age, country, position, wage], (err, res) => {
			if (err) {
				console.log(err);
			}
			});
		
	
});



app.listen(3001, () => {
	console.log("yey, it is running");
})