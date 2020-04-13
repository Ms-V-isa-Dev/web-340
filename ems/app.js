/*
============================================
; Title:  ems app
; Author: Verlee Washington
; Date:   05 April 2020
; Modified by:
; Description: Server file for the ems application
;===========================================
*/

// Require statements
const express = require("express");
const http = require("http");
const path = require("path");
const logger = require("morgan");
const helmet = require("helmet");
const mongoose=require("mongoose");
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const csrf = require("csurf");
const Employee = require("./models/employee");

// Establishes a database connection to MongoDb (mLab)
const mongoDB="mongodb+srv://admin:Isatest@buwebdev-cluster-1-qc6an.mongodb.net/test";
mongoose.connect(mongoDB,{
  useMongoClient: true
});

mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function(){
  console.log("Application connected to mLab MongoDB instance");
});

// Sets up CSRF protection
let csrfProtection = csrf({cookie: true});

// Initializes the express application
let app = express();

// Configures the dependency libraries
// Morgan logger
app.use(logger("short"));

// Body parser
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// Cookie parser
app.use(cookieParser());

// Helmet
app.use(helmet.xssFilter());

// CSRF protection
app.use(csrfProtection);

// Intercepts all incoming request and adds CSRF token to response
app.use(function(request, response, next){
  var token = request.csrfToken();
  response.cookie('XSRF-TOKEN', token);
  response.locals.csrfToken = token;
  next();
});

// Sets up view engine, view's directory path, and serverport
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set('port', process.env.PORT || 8080);


app.get("/", function(request, response){
  response.render("index",{
    message: "First Employee page"
  });
});

app.get("/new", function(request, response){
  response.render("new",{
    message: "New Employee Entry Page"
  });
});

app.get('/list', function(request, response) {
  Employee.find({}, function(err, employees) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(employees);
      response.render('list', {
        title: 'Employee',
        employees: employees
      })
    }
  });
});

/**
 * Description: Redirects users to the 'new' page.
 * Type: HttpGet
 * Request: n/a
 * Response: new.ejs
 * URL: localhost:8080/new
 */
app.get('/new', function(request, response) {
  response.render('new', {
    title: 'EMS | New'
  });
});

/**
 * Description: Processes a form submission.
 * Type: HttpPost
 * Request: textName
 * Response: index.ejs
 * URL: localhost:8080/process
 */
app.post('/process', function(request, response) {
   Console.log (request.body.txtName);
  if (!request.body.txtName) {
    response.status(400).send('Entries must have a name');
    return;
}

app.post("/process", function(request, response) {

    console.log(request.body.txtName);

    response.redirect("/");

});
  // Get the requests form data
  const employeeName = request.body.txtName;
  console.log(employeeName);

  // Create an employee model
  let employee = new Employee({
    name: employeeName
  });

  // Save data
  employee.save(function(err){
    if (err) {
      console.log(err);
      throw err;
    }else{
      console.log(employeeName + " saved successfully!");
      response.redirect('/');
    }
  });
});

/**
 * Description: Redirects users to the 'home' page'
 * Type: HttpGet
 * Request: queryName
 * Response: view.ejs, Employee[] | index.ejs
 * URL: localhost:8080/view/:queryName
 */
app.get('/view/:queryName', function(request, response) {
  const queryName = request.params['queryName'];

Employee.find({'name': queryName}, function(err, employees){
  if (err) {
    console.log(err);
    throw err;
  }else{
    console.log(employees);

    if (employees.length > 0){
      response.render('view', {
        title: 'EMS | View',
        employee: employees
      })
    }else{
      response.redirect('/');
    }
  }
})
});

// Creates a new Node.js server and listens on local port 8080
http.createServer(app).listen(app.get('port'), function(){
  console.log("Applications started on port 8080!" + app.get('port'));
});
// End program


