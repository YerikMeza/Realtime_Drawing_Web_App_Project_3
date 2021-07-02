nose_X = 0;
nose_Y = 0;
difference = 0;
left_wrist_X = 0;
right_wrist_X = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(560, 500);

    canvas = createCanvas(560, 500);
    canvas.position(590, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        nose_X = results[0].pose.nose.x;
        nose_Y = results[0].pose.nose.y;

        left_wrist_X = results[0].pose.leftWrist.x;
        right_wrist_X = results[0].pose.rightWrist.x;

        difference = floor(left_wrist_X - right_wrist_X);
    }
}

function modelLoaded() {
    console.log(" PoseNet is Loaded ");
}

function draw() {
    document.getElementById("square_side").innerHTML = "The Font Size of the text is = " + difference + "px";
    background("#45BF4D");
    text("Yerik", nose_X, nose_Y);
    textSize(difference / 3);
}