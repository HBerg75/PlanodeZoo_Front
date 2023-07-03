import { API_URL } from "../utils/url";
import { ISpace } from "../interfaces/space";
import authHeader from '@/services/authHeader'; 
import axios from "axios";

class SpaceService {
  // L'URL de base de votre API
  static baseUrl: string = API_URL;

  // Récupérer tous les espaces
  static async getAllSpaces(): Promise<ISpace[]> {
    try {
      const response = await axios.get(`${API_URL}spaces/getallspaces`, { headers: authHeader() });
      return response.data as ISpace[];
    } catch (error) {
      throw new Error(`An error has occurred: ${error}`);
    }
  }

  // Créer un nouvel espace
  static async createSpace(spaceData: ISpace): Promise<ISpace> {
    const response = await fetch(`${this.baseUrl}spaces/createspace`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.getAuthToken()}`
      },
      body: JSON.stringify(spaceData)
    });
    if (!response.ok) {
      throw new Error(`An error has occurred: ${response.status}`);
    }
    return await response.json() as ISpace;
  }

  // Modifier un espace
  static async updateSpace(id: string, updatedSpaceData: Partial<ISpace>): Promise<ISpace> {
    const response = await fetch(`${this.baseUrl}spaces/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.getAuthToken()}`
      },
      body: JSON.stringify(updatedSpaceData)
    });
    if (!response.ok) {
      throw new Error(`An error has occurred: ${response.status}`);
    }
    return await response.json() as ISpace;
  }
}

export default SpaceService;
