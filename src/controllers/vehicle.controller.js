import { VehicleModel } from "../models/vehicle.model.js";

export const VehicleController = {
  async createVehicle(req, res) {
    try {
      const { name, plat_nomor, company_id } = req.body;

      const newVehicle = await VehicleModel.createVehicle(name, plat_nomor, company_id);

      return res.status(201).json({
        message: "Vehicle created successfully",
        vehicle: newVehicle
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  },

  async getAllVehicles(req, res) {
    try {
      const vehicles = await VehicleModel.getAllVehicles();
      return res.status(200).json({
        message: "Vehicles fetched successfully",
        vehicles
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  },

  async getVehicleById(req, res) {
    try {
      const { id } = req.params;
      const vehicle = await VehicleModel.getVehicleById(id);
      if (!vehicle) return res.status(404).json({ message: "Vehicle not found" });

      return res.status(200).json({
        message: "Vehicle fetched successfully",
        vehicle
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
};