import express, { Application } from "express";
import CarsHandler from "../handlers/cars";
import uploadFileUtil from "../utils/uploadFile";
import fileUploadsCloudinary from "../utils/fileUploadsCloudinary";

const app: Application = express();
const PORT: number = 8000;

app.use(express.json());

//init handlers
const carsHandler = new CarsHandler();

//Define routers
app.get("/api/cars", carsHandler.getCars);
app.get("/api/cars/:id", carsHandler.getCarsById);
app.post(
  "/api/cars",
  fileUploadsCloudinary.single("car_img"),
  carsHandler.createCar
);
app.patch(
  "/api/cars/:id",
  fileUploadsCloudinary.single("car_img"),
  carsHandler.updateCarById
);
app.delete("/api/cars/:id", carsHandler.deleteCarById);

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
