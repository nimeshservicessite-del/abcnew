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
