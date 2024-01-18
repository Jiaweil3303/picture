function preload() {
  }
  
  function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
  }
  function draw() {
    image(video, 20, 20, 500, 340);
    circle(2, 2, 50);
    circle(638, 2, 50);
    circle(638, 478, 50);
    circle(2, 478, 50);
    
  }

  function take_snapshot(){
    image(video, 20, 340, 200, 150);

  }

  function filter_tint(){
    tint_color = document.getElementById("color_name").value;
  }