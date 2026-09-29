document.querySelectorAll('.star').forEach(btn=>btn.addEventListener('click',()=>{btn.classList.toggle('saved');btn.textContent=btn.classList.contains('saved')?'★':'☆';}));
document.querySelectorAll('.sport').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.sport').forEach(b=>b.classList.remove('active'));btn.classList.add('active');}));
