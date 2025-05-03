const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');
const hoverSign = document.querySelector(".hover-sign");

/*simplyfy the application of a single function acrossall video element application*/

const videoList = [video1, video2, video3];/*create a constant name video list using aray for apply same funcanallaty to all of them*/

videoList.forEach(function(video){      /*when hover with the mouse video plays*/
    video.addEventListener('mouseover', function(){
        video.play();
        hoverSign.classList.add("active")  /* i did't use in this cause of i did't use video in th emy project section*/
    })
    /*i did't use this too in project for not play video unnessarly we use*/
    video.addEventListener('mouseout', function(){
        video.pause()
        hoverSign.classList.remove("active")
    })
})/* with these user's cursor enters the area of any video the video plays and whwn exits the video stop*/ 