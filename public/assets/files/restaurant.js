(function(){
  const fahita=products.fahita.find(item=>item.id==='fahita-simples');
  if(fahita){fahita.image='assets/fahita-simples.jpeg';renderProducts()}
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

(function(){
  const seo={
    pt:{t:'Gugu Sabores | Hambúrgueres e Fahitas em Luanda',d:'Gugu Sabores no Cassenda, Luanda: hambúrgueres, fahitas e sandes com muito sabor, a partir de 2.000 Kz. Escolhe o teu prato e pede já pelo WhatsApp.',k:'Gugu Sabores, Ponto Gugu Sabores, hambúrgueres em Luanda, hamburger Luanda, hamburger duplo, fahitas em Luanda, fahitão, sandes em Luanda, guguzinho, fast food Luanda, restaurante no Cassenda, comida no Cassenda, onde comer em Luanda, comida Angola, pedir comida pelo WhatsApp, hambúrguer barato Luanda, batata frita, menu e preços Luanda, Hamburguerias, lanche, Comida, Hamburguerias em Angola, Melhores Hamburguerias de Angola, Melhores hamburgueres, entrega de comida em Luanda, hambúrgueres ao domicílio'},
    en:{t:'Gugu Sabores | Burgers & Fahitas in Luanda, Angola',d:'Gugu Sabores in Cassenda, Luanda: burgers, fahitas and sandwiches full of flavour, from 2,000 Kz. Pick your dish and order on WhatsApp.',k:'Gugu Sabores, burgers in Luanda, fahitas in Luanda, sandwiches in Luanda, fast food Luanda, restaurant Cassenda, where to eat in Luanda, Angola food, order food on WhatsApp, double burger, big fahita, guguzinho'},
    zh:{t:'Gugu Sabores | 罗安达汉堡与法希塔卷',d:'Gugu Sabores 位于罗安达 Cassenda：汉堡、法希塔卷和三明治，2000 Kz 起。挑选美食，通过 WhatsApp 下单。',k:'Gugu Sabores, 罗安达汉堡, 罗安达法希塔卷, 罗安达三明治, 罗安达快餐, Cassenda 餐厅, 安哥拉美食, WhatsApp 点餐, 双层汉堡'},
    fr:{t:'Gugu Sabores | Hamburgers et Fahitas à Luanda',d:'Gugu Sabores à Cassenda, Luanda : hamburgers, fahitas et sandwichs pleins de goût, à partir de 2 000 Kz. Choisissez votre plat et commandez sur WhatsApp.',k:'Gugu Sabores, hamburgers Luanda, fahitas Luanda, sandwichs Luanda, fast-food Luanda, restaurant Cassenda, où manger à Luanda, cuisine angolaise, commander sur WhatsApp, hamburger double'},
    es:{t:'Gugu Sabores | Hamburguesas y Fahitas en Luanda',d:'Gugu Sabores en Cassenda, Luanda: hamburguesas, fahitas y sándwiches llenos de sabor, desde 2.000 Kz. Elige tu plato y pide por WhatsApp.',k:'Gugu Sabores, hamburguesas Luanda, fahitas Luanda, sándwiches Luanda, comida rápida Luanda, restaurante Cassenda, dónde comer en Luanda, comida de Angola, pedir por WhatsApp, hamburguesa doble'},
    ru:{t:'Gugu Sabores | Бургеры и фахиты в Луанде',d:'Gugu Sabores в Кассенде, Луанда: бургеры, фахиты и сэндвичи с настоящим вкусом, от 2000 Kz. Выберите блюдо и закажите через WhatsApp.',k:'Gugu Sabores, бургеры Луанда, фахиты Луанда, сэндвичи Луанда, фастфуд Луанда, ресторан Кассенда, где поесть в Луанде, кухня Анголы, заказ через WhatsApp, двойной бургер'}
  };
  function meta(name){let m=document.querySelector('meta[name="'+name+'"]');if(!m){m=document.createElement('meta');m.name=name;document.head.appendChild(m)}return m}
  function applySeo(){
    const l=document.documentElement.lang||'pt',c=seo[l]||seo.pt;
    document.title=c.t;meta('description').content=c.d;meta('keywords').content=c.k;
    meta('content-language').content=l==='pt'?'pt-AO':l;
  }
  applySeo();
  new MutationObserver(applySeo).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
})();
