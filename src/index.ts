import express from "express";
const app = express();
const port = 8080; // default port to listen

app.use(express.static('public'));

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

// start the Express server
app.listen( port, () => {
    console.log( `Server started at http://localhost:${ port }` );
} );
