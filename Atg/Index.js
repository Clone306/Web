let op = document.querySelector(".option");
let m = document.querySelector(".set");
op.addEventListener("click",()=>
{
    if(m.style.display =="none")
    {
        console.log("hello")
        m.style.display = "block"
        
        }
    else
    {
        m.style.display = "none"
        console.log("world")
    }
})
let cross=document.querySelector(".cross")
let button = document.querySelector("#but")
let page = document.querySelector(".page")
let page2 = document.querySelector(".page2")
let spn1 = document.querySelector(".spn1")
let spn2 = document.querySelector(".spn")

let screen = document.querySelector(".screen")
button.addEventListener("click",()=>
{
    if(page.style.display==="none")
    {
        
        console.log("click")
        page.style.display = "block";
     
        screen.style.display = "block"
        cross.style.display ="block"
    }
    else
    {

        page.style.display = "none";
        // page.style.width = "0"
        screen.style.display = "none"
    }
    })
cross.addEventListener("click",()=>
{
   
    if( page2.style.display == "block")
    {
        page2.style.display = "none";
    }
    page.style.display = "none";
    // page.style.width = "0"
    screen.style.display = "none"
    cross.style.display ="none"
   
    

})
spn1.addEventListener("click",()=>
{
    page2.style.display = "block";
    // page2.style.width = "0"
    screen.style.display = "block"
    cross.style.display ="block"
    page.style.display = "none";
    // page.style.width = "0"

})
spn2.addEventListener("click",()=>
{
    page2.style.display = "none";
    // page2.style.width = "0"
    screen.style.display = "block"
    cross.style.display ="block"
    page.style.display = "block";
    // page.style.width = "50%"

})
let nav = document.querySelector(".h-nav");
window.addEventListener("scroll",()=>
{
    if(window.scrollY > 0)
    {
     nav.classList.add("sticky")
    }
    else
    {
        nav.classList.remove("sticky")
    }
})
let pat = document.querySelector(".pattern")
let paper = document.querySelector(".div-log")
let off = document.querySelector(".off")
pat.addEventListener("click",()=>
{
    if(paper.style.bottom =="-1000px")
    {
        paper.style.bottom= "0"
    screen.style.display = "block"

    }
    else
    {
        paper.style.bottom= "-1000px"
    screen.style.display = "none"


    }
})
off.addEventListener("click",()=>
{
    paper.style.bottom= "-1000px"
    screen.style.display = "none"   
})
let goto1 = document.querySelector(".goto1")
let goto2 = document.querySelector(".goto2")
let paper2 = document.querySelector(".div-log2")
let fade = document.querySelector(".fade")
goto1.addEventListener("click",()=>
{
            paper2.style.bottom= "0"
        screen.style.display = "block"
        paper.style.bottom= "-1000px"

    
})
goto2.addEventListener("click",()=>
{
        
            paper2.style.bottom= "-1000px"
            paper.style.bottom= "0"
        screen.style.display = "block"
       
    
})
fade.addEventListener("click",()=>
{
    
    paper2.style.bottom= "-1000px"
    screen.style.display = "none"   
})

let arow = document.querySelector(".arow")
let profile = document.querySelector(".profile")
let follower = document.querySelector(".follower")
let post = document.querySelector(".tab")
arow.addEventListener("click",()=>
{
    if(profile.style.display =="none")
    {
        profile.style.display ="flex";
    }
    else
    {
        profile.style.display ="none";   
        
    }
})
profile.addEventListener("click",()=>
{
   
    if(button.style.display =="none")
    {
        console.log("yo")
        profile.style.top = "50px"
        profile.style.display="none"   
        follower.style.display="none"   
        post.style.display ="block"
        button.style.display="block"
         
    }
    else
    {
        button.style.display="none"
        
        profile.style.top = "0"
        follower.style.display="block"   
        post.style.display ="none"
    }
})
let foll = document.querySelectorAll(".fol")
foll.forEach((e)=>
{
   e.addEventListener("click",()=>
   {
    if(e.innerHTML =="Follow")
    {
        e.innerHTML = "Followed"
        e.style.backgroundColor = "black "
        e.style.color = "white"
    }
    else
    {
        e.innerHTML = "Follow"
        e.style.backgroundColor = "white "
        e.style.color = "black"
    }
   })
})
let join =document.querySelector(".join")
join.addEventListener("click",()=>
{
    if(join.innerHTML=="Join Group" )
    {
        join.innerHTML="Leave"
    }
    else
    {
        join.innerHTML="Join Group"

    }
}) 