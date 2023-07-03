import { API_URL } from "../utils/url";
import { ISpace } from "../interfaces/space";

class SpaceService {
  // L'URL de base de votre API
  static baseUrl: string = API_URL;

  // Récupérer tous les espaces
  static async getAllSpaces(): Promise<ISpace[]> {
    const response = await fetch(`${this.baseUrl}spaces/getallspaces`);
    if (!response.ok) {
      throw new Error(`An error has occurred: ${response.status}`);
    }
    return await response.json() as ISpace[];
  }

  // Créer un nouvel espace
  static async createSpace(spaceData: ISpace): Promise<ISpace> {
    const response = await fetch(`${this.baseUrl}spaces/createspace`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
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
        'Content-Type': 'application/json'
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
