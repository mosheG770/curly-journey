//Add the class that indicate the need to hide everything nicely.
const transitionOut = () => {
    document.body.classList.add('unload');
    disableScrolling();
}

//Probably won't work if somewhere else they cancel the exist.
window.addEventListener("beforeunload", transitionOut);



//Add style
    (function(){
    let style = `<style>
/*change your style here*/

 /*Test of hover*/
.coursevisible:hover {
    transition: transform .5s cubic-bezier(0.02, -0.21, 0.25, 1.35), opacity .5s ease-in-out;
    opacity: .8;
    transform: scale(.9);
}
 
 /*Test of hover*/
.activity:hover {
    transition: transform 1s cubic-bezier(0.02, -0.21, 0.25, 1.35), opacity 1s ease-in-out;
    opacity: .8;
    transform: scaleY(.9) scaleX(.99);
}

body.unload {
    opacity: 0;
    transition: opacity 1s ease-in-out;
}

body.unload nav.fixed-top.navbar.navbar-student.navbar-expand {
    transform: translateY(-100px);
    transition: transform 1s;
}

body.unload #nav-drawer{
    transform: translateX(500px);
    transition: transform 1s;
}

</style>`;

document.head.insertAdjacentHTML("beforeend", style);
})();



//lock scroll
function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
    window.onscroll=function(){};
}
