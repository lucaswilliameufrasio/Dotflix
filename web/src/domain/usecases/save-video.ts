import { VideoModel } from '../models'

export interface ISaveVideos {
  save: (data: VideoModel) => Promise<void>
}

export namespace SaveVideos {
  export type Params = VideoModel
}
