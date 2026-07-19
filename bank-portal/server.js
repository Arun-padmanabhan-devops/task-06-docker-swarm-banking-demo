// Import the Express framework to build the web application
const express = require("express");

// Import Node.js built-in OS module to get hostname and system information
const os = require("os");

// Create an Express application instance
const app = express();

// Read the application port from an environment variable.
// If PORT is not defined, use 8080 as the default.
const PORT = process.env.PORT || 8080;

// Tell Express to use EJS as the template engine
app.set("view engine", "ejs");

// Serve static files (CSS, images, JavaScript) from the public folder
app.use(express.static("public"));

// Store the application start time.
// This value is created only once when the container starts.
const startedAt = new Date().toLocaleString();

// Variable to count how many requests this container has served
let requestCount = 0;

// Route for the home page
app.get("/", (req, res) => {

    // Increment request count every time this page is accessed
    requestCount++;
    // Log every request handled by this container
console.log(
    `[${new Date().toLocaleTimeString()}] Request #${requestCount} handled by ${os.hostname()}`
);

    // Render index.ejs and send data to the UI
    // Render index.ejs and send data to the UI
res.render("index", {

    // -------- Static Banking Information --------
    customerName: "Arun A",
    accountNumber: "XXXXXX4321",
    accountType: "Savings",
    balance: "₹1,25,430",

    // -------- Application Information --------

    // Deployment Environment
    environment: process.env.NODE_ENV || "Production",

    // Application Version
    version: process.env.APP_VERSION || "v2.0",

    // Docker Swarm Service Name
    serviceName: process.env.SERVICE_NAME || "bank-web",

    // Container Hostname
    hostname: os.hostname(),

    // Short Container ID
    containerId: os.hostname().substring(0, 12),

    // Number of requests served by this container
    requests: requestCount,

    // Container start time
    startedAt: startedAt,

    // Health Status
    health: "Healthy"
});
});

// Health endpoint.
// Docker can use this to verify that the application is healthy.
app.get("/health", (req, res) => {
    res.status(200).send("Healthy");
});

// Start the web server
app.listen(PORT, () => {

    // Print a message when the application starts
    console.log(`ABC Bank Portal is running on port ${PORT}`);
});