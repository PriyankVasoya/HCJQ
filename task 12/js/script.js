var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime = naptime + 2;
var evening = 18;
var nighttime = 22;
var meridian = "AM";
function updateclock(){
    var d = new Date();
    var hours= d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    
    if(hours>=noon){
        meridian = "PM";
    }
    if(hours>noon){
        hours = hours - 12;
    }
    if(minutes< 10){
        console.log(minutes);
        minutes = "0" + minutes;
    }
    if(seconds<10){
        seconds = "0" + seconds;
    }
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;
    document.getElementById('clock').innerHTML = clockTime;

    var time = new Date().getHours();

    if(time>=wakeuptime && time<noon){
        document.getElementById('image').src = "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9ybmluZ3xlbnwwfHwwfHw%3D&w=1000&q=80";
        document.getElementById('message').innerHTML = "Good Morning!!";
        document.getElementById('container').style.backgroundColor = "lightblue";
    }
    if(time>=noon && time<naptime){
        document.getElementById('image').src = "https://media.istockphoto.com/photos/sun-on-blue-sky-with-clouds-picture-id824800468?b=1&k=20&m=824800468&s=170667a&w=0&h=3shOnnkimj6ovXSrOtjHOngOSab4vPKCMzmdV-tnZVw=";
        document.getElementById('message').innerHTML = "Good Afternoon!!";
        document.getElementById('container').style.backgroundColor = "yellow";


    }
    if(time>=naptime && time<partytime){
        document.getElementById('image').src = "https://w0.peakpx.com/wallpaper/107/440/HD-wallpaper-nap-time-graphy-time-nap-hammock-baby.jpg";
        document.getElementById('message').innerHTML = "It's naptime!!";
        document.getElementById('container').style.backgroundColor = "gray";

    }
    if(time>=partytime && time<evening){
        document.getElementById('image').src = "https://c4.wallpaperflare.com/wallpaper/177/945/286/5bd3153f35806-wallpaper-preview.jpg";
        document.getElementById('message').innerHTML = "It's Partytime!!";
        document.getElementById('container').style.backgroundColor = "orange";


    }

    if(time>=evening && time<nighttime){
        document.getElementById('image').src = "https://images.pexels.com/photos/771883/pexels-photo-771883.jpeg?cs=srgb&dl=pexels-reynaldo-brigworkz-brigantty-771883.jpg&fm=jpg";
        document.getElementById('message').innerHTML = "Good Evening!!";
        document.getElementById('container').style.backgroundColor = "lightgreen";


    }
    
    if(time>=nighttime && time<wakeuptime){
        document.getElementById('image').src = "https://c4.wallpaperflare.com/wallpaper/233/430/439/moon-full-moon-night-night-sky-wallpaper-preview.jpg"
        document.getElementById('message').innerHTML = "Good Night!!";
        document.getElementById('container').style.backgroundColor = "aqua";


    }
}
setInterval(updateclock,1000)
