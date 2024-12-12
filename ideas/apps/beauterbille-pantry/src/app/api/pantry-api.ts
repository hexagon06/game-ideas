import axios from 'axios';
import { IPantryItem } from '../models/pantry-item';

export class PantryApi {
    // TODO get this from environment
    private apiUrl = 'http://localhost:5000/api/';

    getPantry() {
        return axios.get<IPantryItem[]>(`${this.apiUrl}pantry`);
    }

    addItem(item: IPantryItem) {
        return axios.post(`${this.apiUrl}pantry`, item);
    }
}





