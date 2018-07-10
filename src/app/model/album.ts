import { Artist } from "./artist";
import { AlbumImage } from "src/app/model/album_image";

export interface Album{
	id: string;
	name: string;
	artist: Artist[]
	images: AlbumImage[]
}