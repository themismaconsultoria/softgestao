(()=>{
  const WHATSAPP='5511977278197';
  const menuButton=document.querySelector('.menu-btn');
  const mobileMenu=document.getElementById('mobile-menu');

  menuButton?.addEventListener('click',()=>{
    const isOpen=menuButton.getAttribute('aria-expanded')==='true';
    menuButton.setAttribute('aria-expanded',String(!isOpen));
    menuButton.setAttribute('aria-label',isOpen?'Abrir menu':'Fechar menu');
    mobileMenu?.classList.toggle('open',!isOpen);
  });

  const homeMobileWhatsapp=mobileMenu?.querySelector(`a[href="https://wa.me/${WHATSAPP}"]`);
  if(homeMobileWhatsapp){
    homeMobileWhatsapp.href=`https://wa.me/${WHATSAPP}?text=`+encodeURIComponent('Olá! Vim pelo site da SoftGestão e gostaria de conversar sobre uma solução sob medida.');
  }

  mobileMenu?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
    menuButton?.setAttribute('aria-expanded','false');
    menuButton?.setAttribute('aria-label','Abrir menu');
    mobileMenu.classList.remove('open');
  }));

  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

  const addPriceSignal=()=>{
    const note=document.querySelector('.solution-hero .hero-note, .hero .hero-note');
    if(!note || note.closest('.hero-meta')) return;
    const wrap=document.createElement('div');
    wrap.className='hero-meta';
    note.parentNode.insertBefore(wrap,note);
    wrap.appendChild(note);
    wrap.insertAdjacentHTML('beforeend','<span class="price-pill">Projetos sob medida <strong>a partir de R$ 1.000,00</strong></span><span class="price-note">Valor final conforme escopo.</span>');
  };

  const addSocialProof=()=>{
    if(document.querySelector('.solution-stage') || document.getElementById('experiencia')) return;
    const areas=document.querySelector('.areas');
    if(!areas) return;
    areas.insertAdjacentHTML('afterend',`<section class="social-proof" id="experiencia"><div class="container reveal"><div class="social-proof-head"><div><span class="eyebrow">Experiência em projetos reais</span><h2>Números que ajudam a conhecer a SoftGestão.</h2></div><p>Indicadores da atuação acumulada em desenvolvimento sob medida, sem inventar depoimentos ou resultados de clientes.</p></div><div class="proof-grid"><article class="proof-card"><span class="proof-value">Desde 2020</span><h3>Desenvolvimento sob medida</h3><p>Atuação contínua criando soluções digitais alinhadas à rotina real de cada operação.</p></article><article class="proof-card"><span class="proof-value">28</span><h3>Sistemas personalizados</h3><p>Projetos desenvolvidos para necessidades específicas de empresas e usuários reais.</p></article><article class="proof-card"><span class="proof-value">≈ 50</span><h3>Clientes atendidos</h3><p>Experiência acumulada em projetos, ajustes, implantação e evolução de soluções.</p></article><article class="proof-card"><span class="proof-value">9</span><h3>Segmentos de negócio</h3><p>Experiência em jurídico, imobiliário, condominial, automotivo, varejista, pet, construção, segurança e gestão empresarial.</p></article><article class="proof-card"><span class="proof-value">Full cycle</span><h3>Do levantamento à publicação</h3><p>Requisitos, arquitetura, UX/UI, desenvolvimento, integrações, implantação e evolução em um mesmo processo.</p></article><article class="proof-card"><span class="proof-value">Projetos reais</span><h3>Soluções colocadas em uso</h3><p>Desenvolvimento orientado a problemas concretos, com sistemas feitos para operações e usuários reais.</p></article></div><p class="proof-foot">Os números representam a experiência acumulada da SoftGestão e não substituem a avaliação de escopo de cada novo projeto.</p></div></section>`);
  };

  const faqBySlug={
    'gestao-empresarial':[
      ['Quanto custa um sistema de gestão sob medida?','Os projetos sob medida da SoftGestão partem de R$ 1.000,00. O valor final é definido após o levantamento do escopo, considerando funcionalidades, integrações e complexidade.'],
      ['Quanto tempo leva para desenvolver?','O prazo varia conforme o escopo. Depois do levantamento inicial, a proposta comercial apresenta as etapas e a previsão de entrega. Projetos maiores podem ser organizados por fases.'],
      ['Preciso abandonar as ferramentas que já uso?','Não necessariamente. O projeto pode prever integrações ou uma migração gradual, de acordo com as ferramentas atuais e com a viabilidade técnica de cada integração.'],
      ['O sistema pode crescer depois da primeira entrega?','Sim. A solução pode ser planejada em etapas e evoluir com novos módulos, regras, relatórios e integrações conforme a necessidade da operação.'],
      ['Existe suporte depois da implantação?','Suporte, manutenção e evolução podem fazer parte da contratação e são definidos na proposta comercial de acordo com a necessidade do projeto.'],
      ['Como funciona o pagamento?','As condições de pagamento são definidas na proposta comercial, de acordo com o escopo e as etapas do projeto.']
    ],
    'sites-e-vendas':[
      ['Quanto custa um site ou solução de vendas?','Os projetos da SoftGestão partem de R$ 1.000,00. O valor final depende do número de páginas, funcionalidades, integrações, catálogo, loja, automações e demais necessidades do projeto.'],
      ['O site funciona bem no celular?','Sim. O projeto é desenvolvido com responsividade para diferentes tamanhos de tela, considerando navegação, leitura e conversão em dispositivos móveis.'],
      ['Vocês cuidam de SEO?','O projeto pode incluir fundamentos técnicos de SEO, como títulos, descrições, estrutura semântica, dados estruturados, sitemap e boas práticas de indexação, conforme o escopo contratado.'],
      ['É possível integrar WhatsApp, pagamentos ou CRM?','Sim, quando a ferramenta utilizada disponibiliza uma integração tecnicamente viável. As integrações necessárias são definidas no levantamento do projeto.'],
      ['Quanto tempo leva para publicar?','O prazo varia conforme conteúdo, número de páginas, funcionalidades e integrações. A previsão é informada na proposta depois do levantamento do escopo.'],
      ['Há suporte depois que o site entra no ar?','Suporte, manutenção e evolução podem ser incluídos na contratação e são definidos na proposta comercial.']
    ],
    'legaltech':[
      ['Vocês desenvolvem soluções para escritórios de advocacia?','Sim. Criamos Programas LegalTech sob medida para escritórios de advocacia, com recursos que podem incluir análise jurídica assistida por IA, automação de documentos, processos, prazos, agenda e gestão.'],
      ['A inteligência artificial substitui a revisão do advogado?','Não. Os recursos de IA são ferramentas de apoio. A revisão, validação e decisão jurídica continuam sob responsabilidade do profissional habilitado.'],
      ['É possível integrar processos, documentos, prazos e agenda?','Sim. Esses módulos podem ser combinados em uma solução única, conforme o fluxo de trabalho do escritório e a viabilidade das integrações necessárias.'],
      ['Quanto custa um projeto LegalTech?','Os projetos sob medida da SoftGestão partem de R$ 1.000,00. O valor final depende do escopo, volume de automações, integrações, recursos de IA e complexidade da solução.'],
      ['Quanto tempo leva para desenvolver?','O prazo é definido depois do levantamento do fluxo do escritório e das funcionalidades prioritárias. Projetos maiores podem ser entregues por fases.'],
      ['Como funcionam suporte e pagamento?','As condições de pagamento, suporte, manutenção e evolução são definidas na proposta comercial de acordo com o escopo e as etapas do projeto.']
    ],
    'saude-e-atendimento':[
      ['Quanto custa uma solução para atendimento ou agendamento?','Os projetos sob medida da SoftGestão partem de R$ 1.000,00. O valor final depende das funcionalidades, número de fluxos, integrações e complexidade do projeto.'],
      ['A solução pode organizar agenda e histórico de clientes?','Sim. O projeto pode incluir agenda, cadastro, histórico, status de atendimento, lembretes e outras funções definidas no levantamento da rotina.'],
      ['É possível integrar com WhatsApp?','Sim, quando o fluxo desejado e a ferramenta utilizada permitem uma integração tecnicamente viável. O tipo de integração é definido no escopo.'],
      ['Quanto tempo leva para ficar pronto?','O prazo depende das funcionalidades e integrações. Depois do levantamento inicial, a proposta apresenta as etapas e a previsão de entrega.'],
      ['Posso pedir novas funções depois?','Sim. O sistema pode evoluir por etapas, com novos recursos e ajustes conforme a operação amadurece.'],
      ['Como funcionam suporte e pagamento?','As condições de pagamento, suporte, manutenção e evolução são definidas na proposta comercial de acordo com o escopo e as etapas do projeto.']
    ]
  };

  const solutionSlug=location.pathname.split('/').filter(Boolean).pop();
  const faqItems=faqBySlug[solutionSlug];

  const addSolutionTrust=()=>{
    if(!faqItems || document.querySelector('.trust-strip')) return;
    const stage=document.querySelector('.solution-stage');
    if(!stage) return;
    stage.insertAdjacentHTML('afterend','<section class="trust-strip" aria-label="Experiência e investimento"><div class="container trust-grid"><div class="trust-item"><strong>Desde 2020</strong><span>Desenvolvimento sob medida</span></div><div class="trust-item"><strong>28 sistemas</strong><span>Projetos personalizados desenvolvidos</span></div><div class="trust-item"><strong>≈ 50 clientes</strong><span>Experiência em projetos reais</span></div><div class="trust-item price"><strong>A partir de R$ 1.000,00</strong><span>Valor final conforme o escopo</span></div></div></section>');
  };

  const updateFaqSchema=(items)=>{
    const script=[...document.querySelectorAll('script[type="application/ld+json"]')].find(el=>el.textContent.trim());
    if(!script) return;
    try{
      let data=JSON.parse(script.textContent);
      const faq={"@type":"FAQPage","mainEntity":items.map(([q,a])=>({"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}}))};
      if(Array.isArray(data['@graph'])){
        data['@graph']=data['@graph'].filter(item=>item['@type']!=='FAQPage');
        data['@graph'].push(faq);
      }else{
        data={"@context":"https://schema.org","@graph":[data,faq]};
      }
      script.textContent=JSON.stringify(data);
    }catch(_e){}
  };

  const addFaq=()=>{
    if(!faqItems) return;
    document.querySelector('.faq-section')?.remove();
    const cta=document.querySelector('.solution-cta');
    if(!cta) return;
    const details=faqItems.map(([q,a])=>`<details><summary>${q}</summary><p>${a}</p></details>`).join('');
    cta.insertAdjacentHTML('beforebegin',`<section class="faq-section"><div class="container reveal"><div class="faq-box"><h2>Perguntas frequentes</h2><p class="faq-intro">Respostas objetivas sobre investimento, prazo, suporte e funcionamento do projeto.</p>${details}</div></div></section>`);
    updateFaqSchema(faqItems);
  };

  addPriceSignal();
  addSocialProof();
  addSolutionTrust();
  addFaq();

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
    const message=[base,'','Nome: '+data.get('nome'),'WhatsApp: '+data.get('whatsapp'),'E-mail: '+data.get('email'),'Área: '+data.get('area'),'Necessidade: '+data.get('problema')].join('\n');
    const whatsappUrl=`https://wa.me/${WHATSAPP}?text=`+encodeURIComponent(message);
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
