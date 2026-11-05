(function(){
  const fahita=products.fahita.find(item=>item.id==='fahita-simples');
  if(fahita){fahita.image='assets/fahitao.jpeg';renderProducts()}
  function animateTabText(button){
    const label=button.textContent.trim();
    if(button.dataset.animatedLabel===label)return;
    button.dataset.animatedLabel=label;
    button.setAttribute('aria-label',label);
    const fragment=document.createDocumentFragment();
    const graphemes=window.Intl&&Intl.Segmenter?Array.from(new Intl.Segmenter(undefined,{granularity:'grapheme'}).segment(label),item=>item.segment):Array.from(label);
    graphemes.forEach((letter,index)=>{const span=document.createElement('span');span.className='tab-letter';span.style.setProperty('--letter-index',index);span.setAttribute('aria-hidden','true');span.textContent=letter===' '?'\u00a0':letter;fragment.appendChild(span)});
    button.replaceChildren(fragment);
  }
  document.querySelectorAll('.cat-tab').forEach(button=>{
    animateTabText(button);
    new MutationObserver(()=>animateTabText(button)).observe(button,{childList:true,characterData:true,subtree:true});
  });
})();
