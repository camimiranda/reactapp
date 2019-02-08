import tileData from './Data/tileData.json';

export default class DataService {

    getData(){
        return tileData.images;
    }
    getPortada(){
        return tileData.portada;
    }
}