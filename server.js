const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config();
const passport = require("passport");
const connectdb = require("./config/dbConfig");
const port = process.env.PORT || 3000;

const app = express();

// importing bodaRoutes
const Admin = require("./models/adminModel");
const bodaRoutes = require("./controllers/bodaRoutes");
const indexRoutes = require("./controllers/indexRoutes");
const loginRoutes = require("./controllers/loginRoutes");
const registerRoutes = require("./controllers/registerRoutes");
const parkingRoutes = require("./controllers/parkingRoutes");
const carRoutes = require("./controllers/carRoutes");
const taxiRoutes = require("./controllers/taxiRoutes");
const truckRoutes = require("./controllers/truckRoutes");
const sectionsRoutes = require("./controllers/sectionsRoutes");
const coasterRoutes = require("./controllers/coasterRoutes");
const tyreRoutes = require("./controllers/tyreRoutes");
const adminRoutes = require("./controllers/adminRoutes");
const dashRoutes = require("./controllers/dashRoutes");
const batteryRoutes = require("./controllers/batteryRoutes");

// importing the express session
const expressSession = require("express-session")({
  secret: "secret",
  resave: false,
  saveUnitialised: false,
});



app.use(express.urlencoded({extended: true}));
app.use(express.json());



connectdb();





// setting up pug as our view engine
app.engine("pug", require("pug").__express);
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));



app.use(expressSession);

app.use(passport.initialize());
app.use(passport.session());

passport.use(Admin.createStrategy());
passport.serializeUser(Admin.serializeUser());
passport.deserializeUser(Admin.deserializeUser());

// setting up directory for static files
app.use(express.static(path.join(__dirname, "public")));

// using imported routes
app.use("/api", bodaRoutes);
app.use("/api", indexRoutes);
app.use("/api", loginRoutes);
app.use("/api", registerRoutes);
app.use("/api", parkingRoutes);
app.use("/api", carRoutes);
app.use("/api", taxiRoutes);
app.use("/api", truckRoutes);
app.use("/api", sectionsRoutes);
app.use("/api", coasterRoutes);
app.use("/api", tyreRoutes);
app.use("/api", adminRoutes);
app.use("/api", dashRoutes);
app.use("/api", batteryRoutes);
// running the server on a spefic port
// this should be the last line in the server line

app.listen(port, () =>
  console.log(`server is running at http://localhost:${port}`)
);

