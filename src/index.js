import "./database.js";
import app from "./app.js";

//Starting the server
app.listen(app.get('port'),()=> console.log("Server Listening on Port "+ app.get('port')));
