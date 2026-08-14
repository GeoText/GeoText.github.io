const catalogo = [
  {
    id:'gtx-001',
    nome:'Geotêxtil não tecido 200 g/m²',
    categoria:'Geotêxtil não tecido',
    material:'Polipropileno',
    processo:'Agulhado',
    gramatura:200,
    O90:0.12,
    O95:0.15,
    permeabilidade:0.02,
    tracao:12,
    puncao:2.5,
    funcoes:['Separação','Filtração','Drenagem']
  },
  {
    id:'gtx-002',
    nome:'Geotêxtil tecido de reforço',
    categoria:'Geotêxtil tecido',
    material:'Polipropileno',
    processo:'Tecido',
    gramatura:320,
    O90:0.18,
    O95:0.21,
    permeabilidade:0.01,
    tracao:45,
    puncao:4.2,
    funcoes:['Separação','Reforço']
  },
  {
    id:'gg-001',
    nome:'Geogrelha biaxial',
    categoria:'Geogrelha',
    material:'Polímero',
    processo:'Biaxial',
    gramatura:null,
    O90:null,
    O95:null,
    permeabilidade:null,
    tracao:30,
    puncao:null,
    funcoes:['Reforço','Estabilização']
  }
];

function q(id){return document.getElementById(id)}
function fmt(v,unit=''){return v===null||v===undefined?'—':`${v}${unit}`}

function renderCatalog(){
  const body=q('catalogBody'); if(!body) return;
  const term=(q('catalogSearch')?.value||'').toLowerCase().trim();
  const rows=catalogo.filter(p=>[p.nome,p.categoria,p.material,...p.funcoes].join(' ').toLowerCase().includes(term));
  body.innerHTML=rows.map(p=>`<tr><td><strong>${p.nome}</strong><br>${p.funcoes.map(f=>`<span class="badge">${f}</span>`).join('')}</td><td>${p.categoria}</td><td>${p.material}</td><td>${fmt(p.gramatura,' g/m²')}</td><td>${fmt(p.tracao,' kN/m')}</td><td>${fmt(p.O95,' mm')}</td></tr>`).join('') || '<tr><td colspan="6">Nenhum item encontrado.</td></tr>';
}

function setupCatalog(){const s=q('catalogSearch'); if(!s)return; s.addEventListener('input',renderCatalog); renderCatalog();}

function setupIdentify(){
  const form=q('identifyForm'); if(!form)return;
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const txt=(q('identifyText').value||'').toLowerCase();
    let type='Geotêxtil não tecido';
    let reason='A descrição indica uma manta contínua, comum em separação, filtração e proteção.';
    if(txt.includes('grade')||txt.includes('grelha')||txt.includes('abertura')){type='Geogrelha';reason='Os termos sugerem uma estrutura aberta em forma de grade, típica de geogrelhas usadas em reforço.'}
    else if(txt.includes('lisa')||txt.includes('imperme')||txt.includes('geomembr')){type='Geomembrana';reason='A descrição sugere uma lâmina contínua de baixa permeabilidade, característica de geomembranas.'}
    else if(txt.includes('tecido')||txt.includes('trama')){type='Geotêxtil tecido';reason='A descrição sugere fios organizados em trama, característica de geotêxteis tecidos.'}
    const r=q('identifyResult'); r.className='result'; r.innerHTML=`<strong>Possível identificação: ${type}</strong><p>${reason}</p><small>Esta é uma triagem demonstrativa. A identificação de engenharia deve ser confirmada por ficha técnica, propriedades e fabricante.</small>`;
  });
}

function setupCalculator(){
  const form=q('calcForm'); if(!form)return;
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const d85=Number(q('d85').value), o95=Number(q('o95').value), ksolo=Number(q('ksolo').value), kgeo=Number(q('kgeo').value);
    const ret=o95<=d85;
    const perm=kgeo>=10*ksolo;
    const r=q('calcResult');
    r.className=`result ${ret&&perm?'ok':'bad'}`;
    r.innerHTML=`<strong>${ret&&perm?'Pré-verificação atendida':'Pré-verificação não atendida'}</strong><p>Retenção: O95 (${o95} mm) ${ret?'≤':'>'} d85 (${d85} mm) → <b>${ret?'OK':'NÃO ATENDE'}</b>.</p><p>Permeabilidade: k<sub>geo</sub> (${kgeo}) ${perm?'≥':'<'} 10 × k<sub>solo</sub> (${(10*ksolo).toPrecision(3)}) → <b>${perm?'OK':'NÃO ATENDE'}</b>.</p><small>Ferramenta demonstrativa com critérios simplificados. Não substitui projeto, norma aplicável, ensaios nem avaliação de responsável técnico.</small>`;
  });
}

function setupAssistant(){
  const form=q('chatForm'); if(!form)return;
  const input=q('chatInput'), log=q('chatLog');
  function bot(text){const d=document.createElement('div');d.className='msg bot';d.textContent=text;log.appendChild(d);log.scrollTop=log.scrollHeight}
  function user(text){const d=document.createElement('div');d.className='msg user';d.textContent=text;log.appendChild(d);log.scrollTop=log.scrollHeight}
  bot('Olá! Esta versão do GitHub Pages tem um assistente demonstrativo local. Pergunte sobre geotêxtil, geogrelha, separação, filtração, drenagem ou reforço.');
  form.addEventListener('submit',e=>{
    e.preventDefault(); const t=input.value.trim(); if(!t)return; user(t); input.value=''; const s=t.toLowerCase(); let a='Posso ajudar com conceitos básicos de geossintéticos. Para recomendações de projeto, use dados da obra e confirme as exigências normativas e do fabricante.';
    if(s.includes('geotêxtil')||s.includes('geotextil')) a='Geotêxteis são materiais têxteis permeáveis usados, entre outras funções, em separação, filtração, drenagem, proteção e reforço. As propriedades necessárias dependem da aplicação e das solicitações do projeto.';
    if(s.includes('geogrelha')) a='Geogrelhas têm estrutura aberta e são usadas principalmente para reforço e estabilização, mobilizando interação com o solo ou agregado. A seleção depende de resistência à tração, rigidez, interação e durabilidade.';
    if(s.includes('filtra')) a='Na filtração, é preciso equilibrar retenção de partículas e passagem de água. Abertura aparente e permeabilidade/permissividade são parâmetros centrais, mas o critério exato depende do solo, fluxo e norma adotada.';
    if(s.includes('separa')) a='Na separação, o geotêxtil ajuda a impedir a mistura entre materiais de granulometrias diferentes, preservando a função de cada camada. Resistência à instalação e compatibilidade hidráulica também devem ser verificadas.';
    if(s.includes('drena')) a='Na drenagem, o geossintético precisa conduzir ou permitir a passagem de água de forma compatível com o sistema. Devem ser avaliadas transmissividade/permeabilidade, compressão, colmatação e durabilidade.';
    if(s.includes('refor')) a='No reforço, o geossintético é selecionado para mobilizar esforços de tração e melhorar o desempenho do maciço. A resistência de projeto deve considerar fatores de redução e a interação solo-geossintético.';
    bot(a);
  });
}

document.addEventListener('DOMContentLoaded',()=>{setupCatalog();setupIdentify();setupCalculator();setupAssistant();});
