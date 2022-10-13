let btnVideo = document.querySelector('#videoBtn');
let btnPhoto = document.querySelector('#photoBtn');
let images = document.querySelector('.images');
let caption = document.querySelector('.caption');


btnVideo.addEventListener('click', () =>{
    images.innerHTML = '<input type="radio" name="slide" id="videoOne" checked><input type="radio" name="slide" id="videoTwo"><img src="https://drive.google.com/uc?export=download&id=1_4euUkfzzbtdyuw3fpKtNMSB_y3HJ-mX" alt="video-one" class="videoOne"><img src="https://drive.google.com/uc?export=download&id=1RStCEFcgglGMWVAPc6Oam9IwZgPhdH5i" alt="video-two" class="videoTwo">';

    caption.innerHTML = '<p class="photoTitle">Video</p> <p class="photoCaption">A 60 second promotional movie trailer played on TV, online as pre rolls and via Facebook, to promote the movie that was waiting to be written to our movie-loving target audience, and encourage them to enter.</p>';
});

btnPhoto.addEventListener('click', () =>{
    images.innerHTML = '<input type="radio" name="slide" id="photoOne" checked><input type="radio" name="slide" id="photoTwo"><img src="https://drive.google.com/uc?export=download&id=17tPuMjm2jCkhPmqbVXy5zYLDfyGvCFUh" alt="photo-one" class="photoOne"><img src="https://drive.google.com/uc?export=download&id=1OMHtgbWWa1uBSrcikCHReSkPj7XwgfrC" alt="photo-two" class="photoTwo">';

    caption.innerHTML = '<p class="photoTitle">Photography</p> <p class="photoCaption">Shots posted on Facebook and Instagram every day inspired thousands of entries. We reacted to the storyline as it developed in real time, selecting and treating the next image according to the days winning scene.</p>';
});

