# SoftGestão — site institucional

Site estático da **SoftGestão**, estruturado em uma página inicial e quatro páginas de solução.

## Estrutura

```text
softgestao-site/
├── index.html
├── solucoes/
│   ├── gestao-empresarial/
│   │   └── index.html
│   ├── sites-e-vendas/
│   │   └── index.html
│   ├── legaltech/
│   │   └── index.html
│   └── saude-e-atendimento/
│       └── index.html
├── robots.txt
├── sitemap.xml
├── CNAME
├── README.md
└── .gitignore
```

## Rodar localmente

O projeto não exige build, Node.js ou dependências. Para testar com um servidor HTTP local:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000/
http://localhost:8000/solucoes/gestao-empresarial/
http://localhost:8000/solucoes/sites-e-vendas/
http://localhost:8000/solucoes/legaltech/
http://localhost:8000/solucoes/saude-e-atendimento/
```

## Formulários

Os cinco formulários funcionam sem backend. O envio valida os campos no navegador e abre o WhatsApp oficial **11 97727-8197** com nome, WhatsApp, e-mail, área de interesse e descrição do problema já preenchidos.

Não há backend externo nesta versão. Nenhuma URL de webhook, token ou credencial é necessária ou publicada.

## Git e GitHub

No diretório do projeto:

```bash
git init
git add .
git commit -m "Publica novo site SoftGestão"
git branch -M main
git remote add origin https://github.com/themismaconsultoria/softgestao.git
git push -u origin main
```

Repositório oficial: `https://github.com/themismaconsultoria/softgestao`.

### Atualizações futuras

```bash
git add .
git commit -m "Atualiza site SoftGestão"
git push
```

## Publicar no GitHub

1. Repositório oficial: `themismaconsultoria/softgestao`.
2. Não adicione credenciais, tokens ou arquivos `.env`.
3. Publique as alterações no branch `main` ou faça merge de uma branch de revisão.
4. Confirme no GitHub se `index.html` e `CNAME` estão na raiz do branch `main`.

## GitHub Pages

1. No repositório, abra **Settings → Pages**.
2. Em **Build and deployment**, escolha publicação a partir de branch.
3. Selecione `main` e a pasta raiz `/`.
4. Salve e aguarde a publicação.
5. Depois de validar a URL do Pages, configure o domínio próprio em **Settings → Pages → Custom domain**.
6. Para domínio próprio publicado a partir de branch, o GitHub pode criar um arquivo `CNAME` na raiz. Se isso ocorrer, execute `git pull` antes da próxima alteração local.
7. Quando o DNS estiver correto e o certificado estiver disponível, ative **Enforce HTTPS**.

## Vercel

Como o projeto é estático e não possui build:

1. Importe o repositório GitHub na Vercel.
2. Use a raiz do repositório como diretório do projeto.
3. Não configure comando de build.
4. Publique.
5. Em **Domains**, adicione `softgestao.com.br` e `www.softgestao.com.br`.
6. Use exatamente os registros DNS que a Vercel mostrar para o projeto.

Pelo CLI, depois de autenticar e vincular o projeto:

```bash
vercel
vercel --prod
```

Não coloque tokens no repositório.

## Netlify

1. No painel da Netlify, escolha **Add new project → Import an existing project**.
2. Conecte o repositório do GitHub.
3. Como o site é estático, deixe o build vazio e use a raiz do repositório como diretório de publicação.
4. Publique.
5. Vá a **Domain management → Production domains** e adicione o domínio existente.
6. Configure no provedor DNS os registros mostrados pela Netlify.

Também é possível publicar por upload da pasta, mas manter a publicação ligada ao GitHub facilita atualizações.

## Domínio próprio e DNS

O domínio canônico usado neste projeto é:

```text
https://www.softgestao.com.br/
```

Escolha **um único provedor de hospedagem em produção** para o domínio. Não aponte o mesmo hostname simultaneamente para GitHub Pages, Vercel e Netlify.

### GitHub Pages

Para o domínio raiz `softgestao.com.br`, o GitHub documenta estes registros A:

```text
A  @  185.199.108.153
A  @  185.199.109.153
A  @  185.199.110.153
A  @  185.199.111.153
```

Para `www`, configure o `CNAME` para `themismaconsultoria.github.io`. O arquivo `CNAME` deste repositório contém `www.softgestao.com.br`.

Adicione primeiro o domínio ao GitHub Pages e depois altere o DNS. Evite registros DNS wildcard.

### Vercel

Depois de adicionar o domínio ao projeto, use os valores exibidos no painel ou confirme pelo comando:

```bash
vercel domains inspect softgestao.com.br
```

A documentação da Vercel usa, para configuração padrão, A no apex e CNAME no `www`, mas o painel do projeto deve ser a fonte final porque a configuração pode variar.

### Netlify

Adicione o domínio ao site primeiro e use os registros mostrados em **Domain management**. Não invente o hostname do site antes de ele existir.

## HTTPS

- **GitHub Pages:** após o DNS ser reconhecido e o certificado emitido, marque **Enforce HTTPS**.
- **Vercel:** o certificado é provisionado após a validação do domínio e do DNS.
- **Netlify:** o HTTPS é provisionado para o domínio após a configuração correta do DNS.

Evite recursos carregados por `http://`, pois isso pode causar conteúdo misto.

## Testar as cinco URLs

Depois da publicação, teste:

```text
https://www.softgestao.com.br/
https://www.softgestao.com.br/solucoes/gestao-empresarial/
https://www.softgestao.com.br/solucoes/sites-e-vendas/
https://www.softgestao.com.br/solucoes/legaltech/
https://www.softgestao.com.br/solucoes/saude-e-atendimento/
```

Checklist manual:

1. HTTP 200 em todas as URLs.
2. Header e menu mobile funcionando.
3. Navegação por teclado e foco visível.
4. Todos os CTAs internos.
5. Links do WhatsApp abrindo o número `5511977278197`.
6. Formulários validando campos e encaminhando os dados.
7. Layout em mobile, tablet e desktop.
8. Console do navegador sem erros.
9. Lighthouse/PageSpeed em mobile e desktop.

Teste rápido por terminal:

```bash
curl -I https://www.softgestao.com.br/
curl -I https://www.softgestao.com.br/solucoes/gestao-empresarial/
curl -I https://www.softgestao.com.br/solucoes/sites-e-vendas/
curl -I https://www.softgestao.com.br/solucoes/legaltech/
curl -I https://www.softgestao.com.br/solucoes/saude-e-atendimento/
```

## Validar sitemap

Confirme primeiro:

```text
https://www.softgestao.com.br/sitemap.xml
https://www.softgestao.com.br/robots.txt
```

O `sitemap.xml` usa URLs absolutas canônicas e fica na raiz.

No Google Search Console:

1. Verifique a propriedade do domínio.
2. Abra **Sitemaps**.
3. Envie `https://www.softgestao.com.br/sitemap.xml`.
4. Confira erros de leitura ou URLs rejeitadas.

## Validar dados estruturados

Cada página possui JSON-LD. A home descreve a SoftGestão como `ProfessionalService`; as subpáginas usam `Service` e `BreadcrumbList`.

Valide cada URL pública no **Rich Results Test** do Google. Para uma checagem adicional de sintaxe e vocabulário Schema.org, use também o Schema Markup Validator.

Alguns tipos Schema.org podem ser semanticamente válidos sem gerar um resultado avançado específico no Google; por isso, avalie tanto a validade do JSON-LD quanto os recursos efetivamente suportados pela Pesquisa Google.

## SEO e indexação

- Cada página possui `title`, `meta description`, canonical, Open Graph e JSON-LD próprios.
- `robots.txt` permite rastreamento e aponta para o sitemap.
- O sitemap contém apenas as cinco URLs canônicas.
- Depois de publicar, use a Inspeção de URL do Search Console nas páginas principais.
- Reenvie o sitemap quando a arquitetura de URLs mudar.

## Segurança operacional

- Não publique tokens, chaves ou credenciais no HTML.
- Não publique tokens, chaves, senhas ou credenciais no HTML.
- Revise periodicamente os links externos e dados de contato publicados.
