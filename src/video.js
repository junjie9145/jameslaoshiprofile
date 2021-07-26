import videojs from '../node_modules/video.js/dist/video'
import playlistUi from '../node_modules/videojs-playlist/dist/videojs-playlist';


const videoListRules = ()=>{
    let player = videojs('current-video');


    player.playlist([
        {
            name: "Bilingual Education Act Today",
            discription: "Short presentiontion on the Bilingual Education Act in the USA completes for Moreland University's Teach now program.",
            sources: [
                {src: 'https://www.youtube.com/watch?v=eQ7QBaD_37A',type: 'video/youtube'}
            ]
        }
    ])
}

player.playlistUi()
