let btnVideo = document.querySelector('#videoBtn');
let btnPhoto = document.querySelector('#photoBtn');
let media = document.querySelector('.media');
let caption = document.querySelector('.caption');


btnVideo.addEventListener('click', () =>{
    media.innerHTML = '<img src="https://drive.google.com/uc?export=download&id=1RStCEFcgglGMWVAPc6Oam9IwZgPhdH5i" alt="video-two" class="video-two">';
    caption.innerHTML = '<p class="photoTitle">Video</p> <p class="photoCaption">A 60 second promotional movie trailer played on TV, online as pre rolls and via Facebook, to promote the movie that was waiting to be written to our movie-loving target audience, and encourage them to enter.</p>'
});

btnPhoto.addEventListener('click', () =>{
    media.innerHTML = '<img src="https://drive.google.com/uc?export=download&id=17tPuMjm2jCkhPmqbVXy5zYLDfyGvCFUh" alt="photo-one" class="photo-one">';
    caption.innerHTML = '<p class="photoTitle">Photography</p> <p class="photoCaption">Shots posted on Facebook and Instagram every day inspired thousands of entries. We reacted to the storyline as it developed in real time, selecting and treating the next image according to the days winning scene.</p>'
});

