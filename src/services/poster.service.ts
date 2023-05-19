import {posterURL} from "../constants";

class PosterService {
    getImageUrl (width:number, finalPath:string): string {
        return `${posterURL}${width}/${finalPath}`;
    }
}

export const posterService = new PosterService();