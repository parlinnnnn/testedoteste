// Funções compartilhadas
function maskPhone(el) {
  let v = el.value.replace(/\D/g, '').slice(0,11);
  if(v.length >= 2) v = '('+v.slice(0,2)+') '+v.slice(2);
  if(v.length >= 9) v = '('+v.slice(0,2)+') '+v.slice(2,7)+'-'+v.slice(7);
  el.value = v;
}

function saveNumber(num){
  localStorage.setItem('zap_number', num);
}

function getNumber(){
  return localStorage.getItem('zap_number') || '';
}

// Página Inicial
if(document.getElementById('phone')){
  const input = document.getElementById('phone');
  input.addEventListener('input', ()=>{ maskPhone(input); document.getElementById('error').style.display='none'; });
  document.getElementById('phoneForm').addEventListener('submit', (e)=>{
    e.preventDefault();
    const regex = /^\(\d{2}\) \d{5}-\d{4}$/;
    if(!regex.test(input.value.trim())){
      document.getElementById('error').style.display='block';
      return;
    }
    saveNumber(input.value.trim());
    window.location.href='loading.html';
  });
}

// Página de Carregamento
if(document.getElementById('statusMsg')){
  document.getElementById('num').textContent = getNumber();
  const msgs = ['Rastreando número...', 'Verificando registros recentes...', 'Analisando histórico de conexões...'];
  let idx = 0;
  const statusEl = document.getElementById('statusMsg');
  statusEl.textContent = msgs[0];
  const interval = setInterval(()=>{
    idx = (idx+1)%msgs.length;
    statusEl.innerHTML = '<i class="fa fa-circle-notch fa-spin"></i> '+msgs[idx];
  },4000);
  setTimeout(()=>{ clearInterval(interval); window.location.href='results.html'; },15000);
}

// Página de Resultados
if(document.getElementById('number')){
  document.getElementById('number').textContent = getNumber();
  // Geolocalização
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((pos)=>{
      const {latitude, longitude} = pos.coords;
      document.getElementById('geo').textContent = `Localização aproximada: ${latitude.toFixed(2)}, ${longitude.toFixed(2)}`;
    },()=>{
      document.getElementById('geo').textContent = 'Localização não autorizada';
    });
  }
  // Vídeo e botões
  const video = document.getElementById('promo');
  const unmute = document.getElementById('unmuteBtn');
  unmute.addEventListener('click', ()=>{
    video.muted = false;
    unmute.style.display = 'none';
  });
  setTimeout(()=>{ document.getElementById('advancedBtn').style.display='block'; },30000);
}
