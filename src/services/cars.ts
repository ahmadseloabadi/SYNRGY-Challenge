import { CarRequest } from "../models/dto/car";
import { Car } from "../models/entity/car";
import CarsRepository from "../repositories/cars";

class CarServices {
  static async getCars(): Promise<Car[]> {
    const listCar = await CarsRepository.getCars();

    return listCar;
  }
  static async getCarsById(queryId: number): Promise<Car[]> {
    const listCar = await CarsRepository.getCarsById(queryId);
    return listCar;
  }
  static async createCar(car: CarRequest): Promise<Car> {
    const carToCreate: Car = {
      car_name: car.car_name,
      car_rentPerDay: car.car_rentPerDay,
      car_size: car.car_size,
      car_img: car.car_img,
      // creatAt: car.creatAt,
      // updateAt: car.updateAt,
    };
    const createdCar = await CarsRepository.createCar(carToCreate);

    return createdCar;
  }

  static async deleteCarById(queryId: number): Promise<Car | null> {
    const deletedCar = await CarsRepository.deleteCarById(queryId);
    return deletedCar;
  }

  static async updateCarById(
    queryId: number,
    car: CarRequest
  ): Promise<Car | null> {
    const carToUpdate: Car = {
      car_name: car.car_name,
      car_rentPerDay: car.car_rentPerDay,
      car_size: car.car_size,
      car_img: car.car_img,
      // creatAt: car.creatAt,
      // updateAt: car.updateAt,
    };
    const updatedCar = await CarsRepository.updateCarById(queryId, carToUpdate);
    return updatedCar;
  }
}

export default CarServices;
