const themeInput = document.getElementById("themeInput");
const output = document.getElementById("output");

document.getElementById("saveBtn").addEventListener("click",function(){
    localStorage.setItem("theme",themeInput.value);
     localStorage.setItem("userName","Suhas");
      localStorage.setItem("loggedIn","true");
    console.log("Saved theme:",themeInput.value);
    output.textContent = "Sucessfully stored to localStorage";
    output.style.color="green";
})

document.getElementById("readBtn").addEventListener("click",function(){
    const theme = localStorage.getItem("theme");
    console.log(localStorage.getItem("theme",));
    output.textContent = "theme:"+theme;
    output.style.color="green";
})

document.getElementById("removeBtn").addEventListener("click",function(){
    localStorage.removeItem("loggedIn")
    output.textContent = "Removed 'loggedIn' ";
    output.style.color="green";
})

document.getElementById("clearBtn").addEventListener("click", function () {
    localStorage.clear();
    output.textContent = "localStorage cleared";
    output.style.color = "red";
})