import express from "express";
import userProducts from "./routes/products.routes";
import userRoutes from "./routes/users.routes";
const app = express();

app.use(express.json());

app.use('/users',userRoutes)
app.use('/procucts', userProducts)


app.listen(3000, () => {


  console.log("Serve is running");
});
