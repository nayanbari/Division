const pattern = document.querySelector(".pattern");
      const svg = pattern.querySelector("svg");
      svg.setAttribute("width", window.innerWidth);
      svg.setAttribute("height", window.innerHeight);
      console.log(svg);
      document.querySelectorAll("path").forEach((item) => {
        var deg = 90;
        item.addEventListener("mouseover", () => {
          // console.log(item);
          item.setAttribute("style", `transform: rotateZ(${deg}deg); `);
          deg += 90;
        });
      });
      window.addEventListener('resize', function () { 
        "use strict";
        window.location.reload(); 
    });

  
    // Our Team 
    
var skewSetter= gsap.quickSetter(".col", "skewY", "deg") 
var proxy = {skew:0}   

ScrollTrigger.create({
  onUpdate: self => {
    var skew = self.getVelocity()/-500
    // console.log(skew)
    if(Math.abs(skew)> Math.abs(proxy.skew)){
      proxy.skew=skew
      // console.log(proxy)
      gsap.to(proxy,{skew:0,duration:1,ease:"power5",overwrite:true,onUpdate: ()=>{
        skewSetter(proxy.skew) 
      }})
    }
    // console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", );
  }
});

gsap.set(".col",{transformOrigin:"center center",force3D:true})


var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
const a = document.querySelectorAll('.col');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach((element,index) => {
  element.addEventListener('mouseover', () => {
    cursor.classList.add(`hover`);
    cursor.classList.add(`hover${index}`);
  });
  element.addEventListener('mouseleave', () => {
    cursor.classList.remove(`hover`);
    cursor.classList.remove(`hover${index}`);
  });
})