const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cons = require('consolidate');
const dust = require('dustjs-helpers');
const pg = require('pg');

const app = express();

//DB Connect String
var connect = "postgres://dimeivan:123456@localhost/recepiebookdb"

//Assign Dust Engine To .dust files
app.engine('dust', cons.dust);

//set Default Ext .dust
app.set('view engine', 'dust');
app.set('views', __dirname + '/views');

// Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));

// body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

app.get('/', (req, res) => {
	res.render('index');
});

//Server
app.listen(3000, () => {
	console.log('Server diga tvrdini on port 3000');
});