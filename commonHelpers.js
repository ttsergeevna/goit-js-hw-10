import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as p,i}from"./assets/vendor-77e16229.js";const a=document.querySelector("#datetime-picker"),c=document.querySelector("button[data-start]"),S=document.querySelector("span[data-days]"),b=document.querySelector("span[data-hours]"),g=document.querySelector("span[data-minutes]"),M=document.querySelector("span[data-seconds]");c.addEventListener("click",v);let u="",d="";const D={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<=Date.now()?(l(),k()):(q(),w(),u=t[0])}};p(a,D);function v(){d=setInterval(T,1e3),l(),a.setAttribute("disabled","")}function C(t){const{days:n,hours:e,minutes:r,seconds:s}=E(t);!n&&!e&&!r&&!s&&(clearInterval(d),a.removeAttribute("disabled")),S.textContent=o(n),b.textContent=o(e),g.textContent=o(r),M.textContent=o(s)}function T(){const t=new Date().getTime(),e=new Date(u).getTime()-t;C(e)}function l(){c.setAttribute("disabled","")}function q(){c.removeAttribute("disabled")}function o(t){return t.toString().padStart(2,"0")}function k(){i.error({backgroundColor:"tomato",message:"Please choose a date in the future",messageColor:"white",messageSize:"20",position:"topRight",close:!0,displayMode:2})}function w(){i.destroy()}function E(t){const m=Math.floor(t/864e5),f=Math.floor(t%864e5/36e5),h=Math.floor(t%864e5%36e5/6e4),y=Math.floor(t%864e5%36e5%6e4/1e3);return{days:m,hours:f,minutes:h,seconds:y}}
//# sourceMappingURL=commonHelpers.js.map
