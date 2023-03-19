let musicNames = ["Sip (Alcohol)", "Who's your guy", "Muse","Abracadabra", "All girls are the same"]
let imagePics = ["https://i.scdn.co/image/ab67616d0000b2737cdd6d52f143ec9367b2bb68", "https://trendybeatz.com/images/Spyro-Who-Is-Your-Guy-Artwork.jpg","https://images.complex.com/complex/images/c_fill,f_auto,g_center,w_1200/fl_lossy,pg_1/vxz5n6grunvrm5zi73fo/asake-mr-money-with-the-vibe-album","https://trendybeatz.com/images/Rexxie-Ft-Skiibii-and-Naira-Marley-Abracadabra-Artwork.jpg","https://upload.wikimedia.org/wikipedia/en/c/c8/Juice_Wrld_-_All_Girls_Are_the_Same.jpg"]
let artists = ["JoeBoy","Spyro ft Tiwa Savage", "Asake","Rexxie ft Naira Marley", "Juice Wrld"]
let songs = ["Joeboy_-_Sip_(Alcohol)_[Official_Music_Video](128k).m4a","Spyro_ft_Tiwa_Savage_-_Who_is_your_Guy_Remix_(Official_Video)(128k).m4a","Asake_-_Muse_(Official_Visualizer)(128k).m4a","Rexxie,_Naira_Marley_&_Skiibii_-_Abracadabra_(Official_Music_Video)(128k).m4a","Juice_WRLD_-_All_Girls_Are_The_Same_(Directed_by_Cole_Bennett)(128k).m4a"]
let rand = Math.floor(Math.random() * 5)
document.getElementById("img").src = imagePics[rand]
document.getElementById("song").innerHTML = musicNames[rand]
document.getElementById("artist").innerHTML = artists[rand]
var audio = new Audio(songs[rand])
let pla = document.getElementById("play")
let val = 1
function play(){
    val++
    if(val % 2 == 0 ){
        pla.innerHTML = "Pause"
    }
    else{
        pla.innerHTML = "Play"
    }
    audio.paused? audio.play() : audio.pause()
    console.log("Playing "+ songs[rand])
    console.log(val)
}