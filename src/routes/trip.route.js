import { Router } from "express";
import { TripController } from "../controllers/trip.controller.js";
import { AuthMiddleware } from "../middlewares/auth.middleware.js";

export class TripRoute {
  constructor() {
    this.router = Router();
    this.#initializeRoutes();
  }

  #initializeRoutes() {
    this.router.post("/", AuthMiddleware.verifyToken, TripController.createTrip);  
    this.router.get("/user/:id", AuthMiddleware.verifyToken, TripController.getAllTripsByUserId); 
    this.router.get("/:id", AuthMiddleware.verifyToken, TripController.getTripById);
    this.router.put("/:id", AuthMiddleware.verifyToken, TripController.updateTrip);
  }
}
