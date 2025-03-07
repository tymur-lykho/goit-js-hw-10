import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as u,i as M}from"./assets/vendor-BbbuE1sJ.js";const s=document.getElementById("datetime-picker"),r=document.querySelector("[data-start]"),S=document.querySelector(".timer");let f,n=!1,p;const m={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]>new Date?(f=e[0],a(!0)):(a(!1),M.error({title:"Error",message:"Please choose a date in the future",position:"topRight"}))},onOpen(){console.log("open"),n&&(enableTime=!1,noCalendar=!0)}};let v=u(s,m);a(!1);r.addEventListener("click",()=>{n||T()});function T(){p=setInterval(g,1e3,f),n=!0,a(!1),v.destroy(),s.setAttribute("disabled","")}function g(e){const o=e-Date.now();if(Number(o)>0){const{days:l,hours:d,minutes:c,seconds:i}=I(o);S.innerHTML=`
			<div class="field">
				<span class="value" data-days>${t(l)}</span>
				<span class="label">Days</span>
			</div>
			<div class="field">
				<span class="value" data-hours>${t(d)}</span>
				<span class="label">Hours</span>
			</div>
			<div class="field">
				<span class="value" data-minutes>${t(c)}</span>
				<span class="label">Minutes</span>
			</div>
			<div class="field">
				<span class="value" data-seconds>${t(i)}</span>
				<span class="label">Seconds</span>
			</div>
			`}else clearInterval(p),n=!1,s.removeAttribute("disabled"),v=u(s,m)}function I(e){const i=Math.floor(e/864e5),b=Math.floor(e%864e5/36e5),h=Math.floor(e%864e5%36e5/6e4),y=Math.floor(e%864e5%36e5%6e4/1e3);return{days:i,hours:b,minutes:h,seconds:y}}function a(e=!0){e?r.removeAttribute("disabled"):r.setAttribute("disabled","")}function t(e){return e.toString().padStart(2,"0")}
//# sourceMappingURL=1-timer.js.map
