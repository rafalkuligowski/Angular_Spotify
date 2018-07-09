export interface Playlist{
	id: number;
	name: string;
	favourite: boolean;
	color: string;
	/**
	 * List of tracks
	 */
	tracks?: Array<Track>;

	/* List of tracks */
}

export interface Track {
	id: number;
	name: string;
}