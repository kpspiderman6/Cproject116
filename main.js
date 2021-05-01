nose_x=0;
nose_y=0;

function setup(){
   canvas = createCanvas(300,300) ;
   canvas.center();
   video = createCapture(VIDEO);
   video.size (250, 250);
   video.hide();

   poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);

}
function preload(){
nose_img=loadImage("https://i.postimg.cc/QCq88YVq/39747ec965e936d784d9f6cb39fb9022.png");
hair_img=loadImage("https://i.postimg.cc/pLKp4CJq/New-Clown-Wig-Body.png")

}

function draw(){
    image(video, 0 ,0,300,300);
    image(nose_img,nose_x-18,nose_y-18,100,100);
    image(hair_img,nose_x-18,nose_y-100,100,100);
}
function snap(){
    save('my_snapshot.png');
    
}
function modelLoaded(){
    console.log("posenet is iniztialised");
}
function gotPoses(results){
    if(results.length>0){
    console.log(results);
    nose_x=results[0].pose.nose.x;
    nose_y=results[0].pose.nose.y;
    console.log("nosex = "+results[0].pose.nose.x);
    console.log("nosey = "+results[0].pose.nose.y);
}
}