import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as h,i as b}from"./assets/vendor-BbbuE1sJ.js";const i=document.getElementById("datetime-picker"),o=document.querySelector("[data-start]"),y=document.querySelector(".timer");let u,r=!1,f;const M={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]>new Date?(u=e[0],s(!0)):(s(!1),b.error({title:"Error",message:"Please choose a date in the future",position:"topRight"}))}};h(i,M);s(!1);o.addEventListener("click",()=>{r||S()});function S(){f=setInterval(I,1e3,u),r=!0,s(!1),i.setAttribute("disabled","")}function I(e){const a=e-Date.now();if(Number(a)>0){const{days:l,hours:d,minutes:c,seconds:n}=T(a);y.innerHTML=`
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
				<span class="value" data-seconds>${t(n)}</span>
				<span class="label">Seconds</span>
			</div>
			`}else clearInterval(f),r=!1,i.removeAttribute("disabled")}function T(e){const n=Math.floor(e/864e5),m=Math.floor(e%864e5/36e5),p=Math.floor(e%864e5%36e5/6e4),v=Math.floor(e%864e5%36e5%6e4/1e3);return{days:n,hours:m,minutes:p,seconds:v}}function s(e=!0){e?o.removeAttribute("disabled"):o.setAttribute("disabled","")}function t(e){return e.toString().padStart(2,"0")}
//# sourceMappingURL=1-timer.js.map
