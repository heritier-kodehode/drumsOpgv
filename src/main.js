import { Application } from '@splinetool/runtime';

const sounds = ["clap.wav", "hihat.wav", "kick.wav", "openhat.wav", "ride.wav", "snare.wav", "tink.wav", "tom.wav"];
const elementsId = [
    "687d2478-7c8f-4804-9ca5-2bd26839da62",
    "bf0ca860-35bf-41ea-91d3-3662b77421d4",
    "7be7759a-528f-4fb5-893b-5c8a75ed8785",
    "806a8422-e101-425e-99e7-a6d0c7e273ea",
    "48dce6c6-fb51-4bc3-a886-ee7151b34d1a",
    "2bed730a-1d6b-4674-8e62-0579a2ad98dc",
    "087eeaa7-97b7-4c68-9fe0-2cffee5be360",
    "b761ee21-c4a8-498d-8e1f-8a2bcaf009c3"
]


const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/n21W-mNMnw0PiX2w/scene.splinecode').then(() => {
    app.addEventListener('mouseDown', (e) => {
        if (e.target.id === elementsId[0]) {
            var audio = new Audio("../sounds/" + sounds[6]);
            audio.currentTime = 0;
            audio.play();			// start playing audio
            console.log(e.target.id); /**tink */
        } else if (e.target.id === elementsId[1]) {
            var audio = new Audio("../sounds/" + sounds[4]);
            audio.currentTime = 0;
            audio.play();			// start playing audio
            console.log(e.target.id); /**ride */
        } else if (e.target.id === elementsId[2]) {
            var audio = new Audio("../sounds/" + sounds[2]);
            audio.currentTime = 0;
            audio.play();			// start playing audio
            console.log(e.target.id);/**kick */
        } else if (e.target.id === elementsId[3]) {
            var audio = new Audio("../sounds/" + sounds[0]);
            audio.currentTime = 0;
            audio.play();			// start playing audio
            console.log(e.target.id);/**clap */
        } else if (e.target.id === elementsId[4]) {
            var audio = new Audio("../sounds/" + sounds[7]);
            audio.currentTime = 0;
            audio.play();			// start playing audio
            console.log(e.target.id);/**tom */
        } else if (e.target.id === elementsId[5]) {
            var audio = new Audio("../sounds/" + sounds[1]);
            audio.currentTime = 0;
            audio.play();			// start playing audio
            console.log(e.target.id);/**hihat */
        } else if (e.target.id === elementsId[6]) {
            var audio = new Audio("../sounds/" + sounds[5]);
            audio.currentTime = 0;
            audio.play();			// start playing audio
            console.log(e.target.id);/**snare */
        } else if (e.target.id === elementsId[7]) {
            var audio = new Audio("../sounds/" + sounds[3]);
            audio.currentTime = 0;
            audio.play();			// start playing audio
            console.log(e.target.id);/**openhat */
        }else{
            return
        }


    });
});