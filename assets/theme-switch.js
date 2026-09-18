
(()=>{const sw=document.querySelector('.ispy-theme-switcher');if(!sw)return;if(window.self!==window.top&&sw.classList.contains('hide-in-frame')){sw.style.display='none';return;}sw.querySelectorAll('[data-theme]').forEach(a=>a.addEventListener('click',()=>{try{localStorage.setItem('ispy-theme',a.dataset.theme)}catch(e){}}));})();
