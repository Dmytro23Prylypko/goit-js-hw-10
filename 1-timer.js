import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{f as l,i as m}from"./assets/vendor-njWUcVeN.js";document.querySelector("#datetime-picker");const r=document.querySelector("[data-start]");r.disabled=!0;let s;const h={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){Date.now()>e[0].getTime()?(r.disabled=!0,m.show({message:"Please choose a date in the future",backgroundColor:"tomato",messageColor:"white",iconUrl:"./../img/cancel.png"})):(r.disabled=!1,s=e[0])}};l("#datetime-picker",h);function f(e){const c=Math.floor(e/864e5),d=Math.floor(e%864e5/36e5),i=Math.floor(e%864e5%36e5/6e4),u=Math.floor(e%864e5%36e5%6e4/1e3);return{days:c,hours:d,minutes:i,seconds:u}}function n(e){return e=String(e),e.padStart(2,0)}const y=document.querySelector("[data-days]"),g=document.querySelector("[data-hours]"),S=document.querySelector("[data-minutes]"),p=document.querySelector("[data-seconds]");r.addEventListener("click",C);let a;function C(e){clearInterval(a),e.currentTarget.disabled=!0;let o=s.getTime()-Date.now();a=setInterval(()=>{if(o>=1e3){o-=1e3;let t=f(o);y.textContent=n(t.days),g.textContent=n(t.hours),S.textContent=n(t.minutes),p.textContent=n(t.seconds)}},1e3)}
//# sourceMappingURL=1-timer.js.map
