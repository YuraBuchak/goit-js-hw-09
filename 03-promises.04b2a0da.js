function e(e,o){return new Promise(((t,n)=>{setTimeout((()=>{Math.random()>.3?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}const o=document.querySelector(".form"),t=document.querySelector('[name="delay"]'),n=document.querySelector('[name="step"]'),l=document.querySelector('[name="amount"]');o.addEventListener("submit",(o=>{o.preventDefault();let r=Number(t.value);const u=Number(n.value),m=Number(l.value);for(let o=1;o<=m;o+=1)e(o,r).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)})),r+=u}));
//# sourceMappingURL=03-promises.04b2a0da.js.map
