lipX=0;
lipY=0;

function preload(){
  lady_lip = loadImage('lip-png-hd-transparent-lip-hd-images-229436.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

      poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
  console.log('PoseNet Is Initialized');
}
function gotPoses(results)
{
  if(results.length > 0)
  {
      console.log(results);
      lipX = results[0].pose.lip.x-15;
      lipY = results[0].pose.lip.y-15;
      console.log("lip x = " + results[0].pose.lip.x);
      console.log("lip y = " + results[0].pose.lip.y);
  }
}
function draw(){
  image(video, 0, 0, 300, 300);
    image(lady_lip, lipX, lipY, 30, 30);
}

function take_snapshot(){
    save ('myFilterImage.png')
}