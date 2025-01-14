import axios from "axios";

interface Make {
  MakeId: number;
  MakeName: string;
}

export async function getMakes(): Promise<Make[]> {
  try {
    const response = await axios.get(
      "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"
    );
    return response.data.Results;
  } catch (error) {
    console.error("Error fetching makes:", error);
    throw error;
  }
}
