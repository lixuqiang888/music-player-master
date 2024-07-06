import { Track } from 'react-native-track-player'

export type Playlist = {
	name: string
	tracks: Track[]
	artworkPreview: string
	singerImg:string
}

export type Artist = {
	name: string
	tracks: Track[]
	singerImg:string
}
export enum MusicRepeatMode {
    /** 随机播放 */
    SHUFFLE = 'SHUFFLE',
    /** 列表循环 */
    QUEUE = 'QUEUE',
    /** 单曲循环 */
    SINGLE = 'SINGLE',
}

export type TrackWithPlaylist = Track & { playlist?: string[] ,platform?:string }
