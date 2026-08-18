(()=>{
  const menuButton=document.querySelector('.menu-btn');
  const mobileMenu=document.getElementById('mobile-menu');

  menuButton?.addEventListener('click',()=>{
    const isOpen=menuButton.getAttribute('aria-expanded')==='true';
    menuButton.setAttribute('aria-expanded',String(!isOpen));
    menuButton.setAttribute('aria-label',isOpen?'Abrir menu':'Fechar menu');
    mobileMenu?.classList.toggle('open',!isOpen);
  });

  const homeMobileWhatsapp=mobileMenu?.querySelector('a[href="https://wa.me/5511977278197"]');
  if(homeMobileWhatsapp){
    homeMobileWhatsapp.href='https://wa.me/5511977278197?text='+encodeURIComponent('Olá! Vim pelo site da SoftGestão e gostaria de conversar sobre uma solução sob medida.');
  }

  mobileMenu?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
    menuButton?.setAttribute('aria-expanded','false');
    menuButton?.setAttribute('aria-label','Abrir menu');
    mobileMenu.classList.remove('open');
  }));

  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

  const revealElements=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting) entry.target.classList.add('visible');
    }),{threshold:.1});
    revealElements.forEach(el=>observer.observe(el));
  }else{
    revealElements.forEach(el=>el.classList.add('visible'));
  }

  document.querySelectorAll('.contact-form').forEach(form=>form.addEventListener('submit',event=>{
    event.preventDefault();
    const status=form.querySelector('.form-status');

    if(!form.checkValidity()){
      form.reportValidity();
      if(status){
        status.textContent='Confira os campos obrigatórios antes de continuar.';
        status.style.color='#ffbd7c';
      }
      return;
    }

    const data=new FormData(form);
    const base=form.dataset.baseMessage||'Olá! Vim pelo site da SoftGestão e quero conversar sobre um projeto.';
    const message=[
      base,
      '',
      'Nome: '+data.get('nome'),
      'WhatsApp: '+data.get('whatsapp'),
      'E-mail: '+data.get('email'),
      'Área: '+data.get('area'),
      'Necessidade: '+data.get('problema')
    ].join('\n');
    const whatsappUrl='https://wa.me/5511977278197?text='+encodeURIComponent(message);

    if(status){
      status.textContent='Abrindo o WhatsApp oficial da SoftGestão…';
      status.style.color='#77e7ae';
    }

    const whatsappWindow=window.open(whatsappUrl,'_blank');
    if(whatsappWindow){
      whatsappWindow.opener=null;
    }else{
      window.location.href=whatsappUrl;
    }
  }));
})();
