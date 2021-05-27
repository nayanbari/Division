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