import { ReactNode } from "react";

export interface Song{
    idTrack:string;
    strTrack:string;
    strAlbum:string;
    children?:ReactNode
}

export interface Album{
    idAlbum:string;
    strArtist:string;
    strAlbum:string;
    intYearReleased:string;
    strAlbumThumb?:string;
    children?:ReactNode
}

export interface PlayList{
    idPlaylist: string;
    name: string;
    songs: Song[];
    strAlbumThumb?: string;
    strArtist?: string;
    intYearReleased?: string;
}