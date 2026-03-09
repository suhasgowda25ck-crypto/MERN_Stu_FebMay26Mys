// Mouse events

const hoverbox = document.getElementById("hoverbox");

hoverbox.addEventListener("mouseover",function(){
    hoverbox.textContent = "mouse is over me";
    hoverbox.style.backgroundcolor = "lightyellow";
});

hoverbox.addEventListener("mouseout",function(){
    hoverbox.textContent = "Hover over me";
    hoverbox.style.backgroundcolor = "lightyellow";
});