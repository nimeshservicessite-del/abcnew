// YEAR
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if(year) year.innerText = new Date().getFullYear();
});

// TYPING EFFECT
(function(){
  const el = document.getElementById('type-target');
  if(!el) return;
  const lines = ['Boost Your Social Presence Instantly'];
  let i=0;

  function tick(){
    const str = lines[0];
    el.textContent = str.slice(0,i);
    i++;
    if(i<=str.length){ setTimeout(tick,50); }
    else{ setTimeout(()=>{i=0;tick();},1800); }
  }
  tick();
})();

// REVEAL ON SCROLL
function reveal(){
  document.querySelectorAll('.reveal').forEach(el=>{
    const r = el.getBoundingClientRect();
    if(r.top < window.innerHeight - 80) el.classList.add('visible');
  });
}
window.addEventListener('scroll',reveal);
window.addEventListener('load',()=>{reveal();setTimeout(reveal,500);});
function openImage(src) {
  document.getElementById("full-image").src = src;
  document.getElementById("image-viewer").style.display = "flex";
}

function closeImage() {
  document.getElementById("image-viewer").style.display = "none";
}
<script>
  function copyEmail() {
    navigator.clipboard.writeText("contact.nimesh.rashmika@gmail.com");

    let alertBox = document.getElementById("emailCopyAlert");
    alertBox.style.display = "block";

    setTimeout(() => {
      alertBox.style.display = "none";
    }, 1500);
  }
</script>

const audio = new Audio('https://audio.com/nimesh-rashmika/audio/eternxlkz-sente-mais-super-slowed-reverb-eternxlkz-youtube'); // Replace with your music link
const musicBtn = document.getElementById('music-toggle');
let isPlaying = false;

// Check if music is already playing (if user already interacted on any page)
if (localStorage.getItem('isPlaying') === 'true') {
    audio.play();
    isPlaying = true;
    musicBtn.classList.remove('paused');
} else {
    audio.pause();
    isPlaying = false;
    musicBtn.classList.add('paused');
}

// Music Toggle Logic
musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        musicBtn.classList.add('paused');
        isPlaying = false;
        localStorage.setItem('isPlaying', 'false'); // Store the state
    } else {
        audio.play().then(() => {
            musicBtn.classList.remove('paused');
            isPlaying = true;
            localStorage.setItem('isPlaying', 'true'); // Store the state
        });
    }
});

// Try Autoplay on Load (optional)
window.addEventListener('load', () => {
    audio.volume = 0.4; // Set default volume
    const playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.then(_ => {
            isPlaying = true;
            musicBtn.classList.remove('paused');
        }).catch(error => {
            console.log("Autoplay prevented by browser policy.");
            document.body.addEventListener('click', function startMusic() {
                audio.play();
                isPlaying = true;
                musicBtn.classList.remove('paused');
                document.body.removeEventListener('click', startMusic);
            }, { once: true });
        });
    }
});
