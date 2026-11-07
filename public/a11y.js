/* Acessibilidade e navegação por teclado — Gugu Sabores */
(function(){
  'use strict';
  var T={
    pt:{skip:'Saltar para o conteúdo',menuOpen:'Abrir menu',menuClose:'Fechar menu',pause:'Pausar sugestões',resume:'Retomar sugestões',privacy:'Política de Privacidade',terms:'Termos de Serviço',cookiePrefs:'Preferências de cookies',complaints:'Livro de Reclamações disponível no estabelecimento (INADEC)',orderPrivacy:'Ao pedir pelo WhatsApp, a conversa é tratada também pelo WhatsApp (Meta). Partilha apenas o necessário. <a href="privacidade.html">Política de Privacidade</a>.',allergens:'Ingredientes e alergénios: pergunta-nos antes de finalizar o pedido.',videoNote:'Os vídeos são da autoria de @jessiemadalena e abrem no TikTok.',newWin:'(abre numa nova janela)',ckTitle:'Cookies e privacidade',ckText:'Usamos cookies essenciais para o site funcionar e, só com a tua autorização, cookies de estatística (Google Analytics) para perceber como o site é usado. Podes mudar de ideias quando quiseres.',ckAccept:'Aceitar estatísticas',ckReject:'Rejeitar',ckPolicy:'Saber mais',categories:'Categorias do menu',closeBuilder:'Fechar personalização do pedido',altSuffix:'prato do Gugu Sabores, Luanda'},
    en:{skip:'Skip to content',menuOpen:'Open menu',menuClose:'Close menu',pause:'Pause suggestions',resume:'Resume suggestions',privacy:'Privacy Policy',terms:'Terms of Service',cookiePrefs:'Cookie preferences',complaints:'Complaints Book available at the restaurant (INADEC)',orderPrivacy:'When you order on WhatsApp, the conversation is also processed by WhatsApp (Meta). Share only what is needed. <a href="privacidade.html">Privacy Policy</a>.',allergens:'Ingredients and allergens: ask us before you confirm your order.',videoNote:'Videos are by @jessiemadalena and open on TikTok.',newWin:'(opens in a new window)',ckTitle:'Cookies and privacy',ckText:'We use essential cookies to make the site work and, only with your permission, analytics cookies (Google Analytics) to understand how the site is used. You can change your mind at any time.',ckAccept:'Accept analytics',ckReject:'Reject',ckPolicy:'Learn more',categories:'Menu categories',closeBuilder:'Close order options',altSuffix:'dish from Gugu Sabores, Luanda'},
    zh:{skip:'跳到主要内容',menuOpen:'打开菜单',menuClose:'关闭菜单',pause:'暂停推荐',resume:'继续推荐',privacy:'隐私政策',terms:'服务条款',cookiePrefs:'Cookie 偏好设置',complaints:'店内备有投诉簿 (INADEC)',orderPrivacy:'通过 WhatsApp 下单时，对话也会由 WhatsApp（Meta）处理。请仅分享必要信息。<a href="privacidade.html">隐私政策</a>。',allergens:'食材与过敏原：确认订单前请先咨询我们。',videoNote:'视频由 @jessiemadalena 制作，将在 TikTok 打开。',newWin:'（在新窗口打开）',ckTitle:'Cookie 与隐私',ckText:'我们使用必要的 Cookie 以保证网站运行；仅在您同意后，才会使用统计 Cookie（Google Analytics）了解网站使用情况。您可随时更改选择。',ckAccept:'接受统计',ckReject:'拒绝',ckPolicy:'了解更多',categories:'菜单分类',closeBuilder:'关闭订单选项',altSuffix:'Gugu Sabores 罗安达美食'},
    fr:{skip:'Aller au contenu',menuOpen:'Ouvrir le menu',menuClose:'Fermer le menu',pause:'Mettre en pause les suggestions',resume:'Reprendre les suggestions',privacy:'Politique de confidentialité',terms:'Conditions d’utilisation',cookiePrefs:'Préférences de cookies',complaints:'Livre de réclamations disponible sur place (INADEC)',orderPrivacy:'En commandant sur WhatsApp, la conversation est aussi traitée par WhatsApp (Meta). Ne partagez que le nécessaire. <a href="privacidade.html">Politique de confidentialité</a>.',allergens:'Ingrédients et allergènes : demandez-nous avant de valider la commande.',videoNote:'Vidéos de @jessiemadalena, ouvertes sur TikTok.',newWin:'(s’ouvre dans une nouvelle fenêtre)',ckTitle:'Cookies et confidentialité',ckText:'Nous utilisons des cookies essentiels au fonctionnement du site et, uniquement avec votre accord, des cookies de statistiques (Google Analytics) pour comprendre l’usage du site. Vous pouvez changer d’avis à tout moment.',ckAccept:'Accepter les statistiques',ckReject:'Refuser',ckPolicy:'En savoir plus',categories:'Catégories du menu',closeBuilder:'Fermer les options de commande',altSuffix:'plat du Gugu Sabores, Luanda'},
    es:{skip:'Saltar al contenido',menuOpen:'Abrir menú',menuClose:'Cerrar menú',pause:'Pausar sugerencias',resume:'Reanudar sugerencias',privacy:'Política de privacidad',terms:'Términos de servicio',cookiePrefs:'Preferencias de cookies',complaints:'Libro de reclamaciones disponible en el local (INADEC)',orderPrivacy:'Al pedir por WhatsApp, la conversación también es tratada por WhatsApp (Meta). Comparte solo lo necesario. <a href="privacidade.html">Política de privacidad</a>.',allergens:'Ingredientes y alérgenos: pregúntanos antes de confirmar el pedido.',videoNote:'Vídeos de @jessiemadalena, se abren en TikTok.',newWin:'(se abre en una ventana nueva)',ckTitle:'Cookies y privacidad',ckText:'Usamos cookies esenciales para que el sitio funcione y, solo con tu permiso, cookies de estadística (Google Analytics) para entender cómo se usa. Puedes cambiar de opinión cuando quieras.',ckAccept:'Aceptar estadísticas',ckReject:'Rechazar',ckPolicy:'Saber más',categories:'Categorías del menú',closeBuilder:'Cerrar opciones del pedido',altSuffix:'plato de Gugu Sabores, Luanda'},
    ru:{skip:'Перейти к содержимому',menuOpen:'Открыть меню',menuClose:'Закрыть меню',pause:'Приостановить подсказки',resume:'Возобновить подсказки',privacy:'Политика конфиденциальности',terms:'Условия использования',cookiePrefs:'Настройки cookie',complaints:'Книга жалоб доступна в заведении (INADEC)',orderPrivacy:'При заказе через WhatsApp переписка также обрабатывается WhatsApp (Meta). Делитесь только необходимым. <a href="privacidade.html">Политика конфиденциальности</a>.',allergens:'Ингредиенты и аллергены: уточните у нас перед подтверждением заказа.',videoNote:'Видео @jessiemadalena открываются в TikTok.',newWin:'(откроется в новом окне)',ckTitle:'Cookie и конфиденциальность',ckText:'Мы используем необходимые cookie для работы сайта и, только с вашего согласия, аналитические cookie (Google Analytics), чтобы понимать, как используется сайт. Вы можете передумать в любой момент.',ckAccept:'Принять аналитику',ckReject:'Отклонить',ckPolicy:'Подробнее',categories:'Категории меню',closeBuilder:'Закрыть параметры заказа',altSuffix:'блюдо Gugu Sabores, Луанда'}
  };
  function lang(){var l=document.documentElement.lang||'pt';return T[l]?l:'pt'}
  function text(k){return (T[lang()]&&T[lang()][k])||T.pt[k]||k}
  window.guguL={text:text,lang:lang};
  var $=function(s,r){return (r||document).querySelector(s)};
  var $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};

  /* textos com data-l */
  function applyL(){
    $$('[data-l]').forEach(function(el){
      if(el.dataset.pt===undefined)el.dataset.pt=el.innerHTML;
      el.innerHTML=lang()==='pt'?el.dataset.pt:text(el.dataset.l);
    });
    var cat=$('.category-tabs');if(cat)cat.setAttribute('aria-label',text('categories'));
    var cb=$('#close-builder');if(cb)cb.setAttribute('aria-label',text('closeBuilder'));
    syncMenuLabel();syncPause();externalLinks();
  }

  /* ligações que abrem noutra janela */
  function externalLinks(){
    $$('a[target="_blank"]').forEach(function(a){
      var s=$('.sr-only[data-nw]',a);
      if(!s){s=document.createElement('span');s.className='sr-only';s.setAttribute('data-nw','');a.appendChild(s)}
      s.textContent=' '+text('newWin');
    });
  }

  /* menu móvel */
  var menuBtn=$('.mobile-menu'),nav=$('.topbar nav');
  function syncMenuLabel(){
    if(!menuBtn||!nav)return;
    var open=nav.classList.contains('show');
    menuBtn.setAttribute('aria-expanded',open?'true':'false');
    menuBtn.setAttribute('aria-label',text(open?'menuClose':'menuOpen'));
  }
  if(menuBtn&&nav){
    new MutationObserver(syncMenuLabel).observe(nav,{attributes:true,attributeFilter:['class']});
    document.addEventListener('keydown',function(e){
      if(e.key==='Escape'&&nav.classList.contains('show')){nav.classList.remove('show');menuBtn.focus()}
    });
  }

  /* categorias do menu: botões com aria-pressed */
  var tabs=$('.category-tabs');
  function syncTabs(){$$('.cat-tab').forEach(function(b){b.setAttribute('aria-pressed',b.classList.contains('active')?'true':'false')})}
  if(tabs){syncTabs();new MutationObserver(syncTabs).observe(tabs,{attributes:true,attributeFilter:['class'],subtree:true})}

  /* botão de tema */
  var theme=$('#theme');
  function syncTheme(){if(theme)theme.setAttribute('aria-pressed',document.body.classList.contains('dark')?'true':'false')}
  if(theme){syncTheme();new MutationObserver(syncTheme).observe(document.body,{attributes:true,attributeFilter:['class']})}

  /* texto alternativo das imagens dos pratos */
  function fixAlts(){
    $$('#product-grid img, #builder-visual img').forEach(function(img){
      if(img.dataset.altDone===lang())return;
      var base=img.dataset.altBase||img.getAttribute('alt')||'';
      img.dataset.altBase=base;img.dataset.altDone=lang();
      img.setAttribute('alt',base+' — '+text('altSuffix'));
    });
    $$('#product-grid .product-card').forEach(function(card){
      var il=$('.product-thumb .food-illustration',card),h=$('h3',card);
      if(il&&h){il.setAttribute('role','img');il.setAttribute('aria-label',h.textContent+' — '+text('altSuffix'))}
    });
    var bv=$('#builder-visual .food-illustration'),st=$('#selected-title');
    if(bv&&st){bv.setAttribute('role','img');bv.setAttribute('aria-label',st.textContent+' — '+text('altSuffix'))}
  }
  ['#product-grid','#builder-visual'].forEach(function(s){var el=$(s);if(el)new MutationObserver(fixAlts).observe(el,{childList:true,subtree:true})});

  /* personalização do pedido: foco, Escape e regresso ao prato */
  var builder=$('#builder'),lastCard=null,grid=$('#product-grid');
  if(grid&&builder){
    grid.addEventListener('click',function(e){
      var card=e.target.closest('.product-card');if(!card)return;
      lastCard=card.dataset.id;
      setTimeout(function(){var h=$('#selected-title');if(h)h.focus({preventScroll:true})},450);
    });
    function closeBack(){
      if(!lastCard)return;
      setTimeout(function(){var c=$('.product-card[data-id="'+lastCard+'"]');if(c)c.focus()},30);
    }
    var cb2=$('#close-builder');if(cb2)cb2.addEventListener('click',closeBack);
    document.addEventListener('keydown',function(e){
      if(e.key==='Escape'&&builder.classList.contains('open')&&builder.contains(document.activeElement)){
        builder.classList.remove('open');closeBack();
      }
    });
  }

  /* sugestões automáticas: pausa por hover/foco/botão e respeito por "reduzir movimento" */
  var pauseBtn=$('#random-pause'),userPaused=false,hoverPaused=false;
  function syncPause(){
    if(!pauseBtn)return;
    pauseBtn.textContent=text(userPaused?'resume':'pause');
    pauseBtn.setAttribute('aria-pressed',userPaused?'true':'false');
  }
  function setPause(){window.__guguPause=userPaused||hoverPaused}
  if(pauseBtn){
    pauseBtn.addEventListener('click',function(){userPaused=!userPaused;setPause();syncPause()});
    var rs=$('.random-section');
    if(rs){
      rs.addEventListener('mouseenter',function(){hoverPaused=true;setPause()});
      rs.addEventListener('mouseleave',function(){hoverPaused=false;setPause()});
      rs.addEventListener('focusin',function(){hoverPaused=true;setPause()});
      rs.addEventListener('focusout',function(){hoverPaused=false;setPause()});
    }
  }

  /* deixa o campo de quantidade claro para leitores de ecrã */
  var qty=$('#quantity');if(qty){qty.setAttribute('inputmode','numeric')}

  applyL();fixAlts();
  new MutationObserver(function(){applyL();fixAlts()}).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
})();
