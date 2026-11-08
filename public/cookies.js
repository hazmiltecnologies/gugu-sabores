/* Aviso de cookies e Google Analytics com consentimento — Gugu Sabores */
(function(){
  'use strict';
  /* Google Tag Manager (carrega SÓ depois de o visitante aceitar estatísticas). */
  var GTM_ID='GTM-WSKVH3TZ';
  /* Opcional: se preferires carregar o Google Analytics 4 diretamente (sem GTM), mete aqui o ID G-XXXXXXXXXX e deixa o GTM_ID vazio. */
  var GA_ID='';
  var KEY='gugu-consent',MAX_AGE=365*24*3600*1000;
  var L=window.guguL||{text:function(k){return k}};
  var banner=null,tagLoaded=!!window.__guguTag;

  function read(){try{var v=JSON.parse(localStorage.getItem(KEY));if(v&&v.v===1&&typeof v.analytics==='boolean'&&Date.now()-v.ts<MAX_AGE)return v}catch(e){}return null}
  function write(a){try{localStorage.setItem(KEY,JSON.stringify({v:1,analytics:a,ts:Date.now()}))}catch(e){}}
  function gtmValid(){return /^GTM-[A-Z0-9]{4,}$/.test(GTM_ID)}
  function gaValid(){return /^G-[A-Z0-9]{6,}$/.test(GA_ID)}

  function initDataLayer(){
    window.dataLayer=window.dataLayer||[];
    if(typeof window.gtag!=='function')window.gtag=function(){window.dataLayer.push(arguments)};
  }
  function loadTag(){
    if(tagLoaded)return;
    if(gtmValid()){
      tagLoaded=true;initDataLayer();
      /* O consent default já foi definido no <head>; garante-o se faltar. */
      if(!window.__guguDefault){gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});window.__guguDefault=true}
      gtag('consent','update',{analytics_storage:'granted'});
      if(!window.__guguTag){
        window.__guguTag=true;
        var s=document.createElement('script');s.async=true;
        s.src='https://www.googletagmanager.com/gtm.js?id='+encodeURIComponent(GTM_ID);
        document.head.appendChild(s);
        gtag('js',new Date());
      }
    }else if(gaValid()){
      tagLoaded=true;window['ga-disable-'+GA_ID]=false;initDataLayer();
      gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
      gtag('consent','update',{analytics_storage:'granted'});
      gtag('js',new Date());
      gtag('config',GA_ID,{anonymize_ip:true,allow_google_signals:false,allow_ad_personalization_signals:false});
      var g=document.createElement('script');g.async=true;
      g.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(GA_ID);
      document.head.appendChild(g);
    }
  }
  function clearTag(){
    if(gaValid())window['ga-disable-'+GA_ID]=true;
    if(typeof window.gtag==='function')try{gtag('consent','update',{analytics_storage:'denied'})}catch(e){}
    var past='=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
    document.cookie.split(';').forEach(function(c){
      var n=c.split('=')[0].trim();
      if(n==='_ga'||n==='_gid'||n.indexOf('_ga_')===0||n.indexOf('_gat')===0||n.indexOf('_gcl')===0){
        var parts=location.hostname.split('.');
        document.cookie=n+past;
        for(var i=0;i<parts.length-1;i++){var d=parts.slice(i).join('.');document.cookie=n+past+';domain='+d;document.cookie=n+past+';domain=.'+d}
      }
    });
  }

  function build(){
    banner=document.createElement('div');
    banner.className='cookie-banner';banner.setAttribute('role','dialog');banner.setAttribute('aria-modal','false');
    banner.setAttribute('aria-labelledby','ck-title');banner.setAttribute('aria-describedby','ck-text');banner.hidden=true;
    banner.innerHTML='<h2 id="ck-title"></h2><p id="ck-text"></p><div class="ck-actions"><button type="button" class="ck-btn primary" id="ck-accept"></button><button type="button" class="ck-btn" id="ck-reject"></button><a id="ck-policy" href="privacidade.html#cookies"></a></div>';
    var skip=document.querySelector('.skip-link');
    if(skip&&skip.parentNode)skip.parentNode.insertBefore(banner,skip.nextSibling);else document.body.insertBefore(banner,document.body.firstChild);
    banner.querySelector('#ck-accept').addEventListener('click',function(){decide(true)});
    banner.querySelector('#ck-reject').addEventListener('click',function(){decide(false)});
    fill();
  }
  function fill(){
    if(!banner)return;
    banner.querySelector('#ck-title').textContent=L.text('ckTitle');
    banner.querySelector('#ck-text').textContent=L.text('ckText');
    banner.querySelector('#ck-accept').textContent=L.text('ckAccept');
    banner.querySelector('#ck-reject').textContent=L.text('ckReject');
    banner.querySelector('#ck-policy').textContent=L.text('ckPolicy');
  }
  function show(focus){
    if(!banner)build();
    fill();banner.hidden=false;
    if(focus)banner.querySelector('#ck-accept').focus();
  }
  function hide(){
    if(!banner)return;
    var had=banner.contains(document.activeElement);
    banner.hidden=true;
    if(had){var p=document.getElementById('cookie-prefs');if(p)p.focus();else{var m=document.getElementById('conteudo');if(m)m.focus()}}
  }
  function decide(a){
    write(a);
    if(a)loadTag();else clearTag();
    hide();
  }

  function init(){
    var prefs=document.getElementById('cookie-prefs');
    if(prefs)prefs.addEventListener('click',function(){show(true)});
    var d=read();
    if(d){if(d.analytics)loadTag()}else show(false);
    new MutationObserver(fill).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  }
  window.guguConsent={open:function(){show(true)}};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
