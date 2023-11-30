import express  from "express";

const app = express();


import newsRoute from "./routes/news.routes.js"
app.use(newsRoute)






export {app}