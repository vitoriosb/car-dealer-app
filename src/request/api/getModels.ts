import axios from "axios";

interface Model {
  Model_ID: number;
  Model_Name: string;
}

export async function getModels(
  makeId: string,
  year: string
): Promise<Model[]> {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
    );
    return response.data.Results;
  } catch (error: unknown) {
    console.error("Error fetching models:", error);
    throw error;
  }
}
