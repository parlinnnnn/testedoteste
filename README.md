# Verificador de Atividade do WhatsApp

Este repositório contém uma landing page responsiva que permite verificar a atividade de um número de WhatsApp de forma confidencial. O projeto é formado por três páginas:

- `index.html` – formulário de entrada
- `loading.html` – tela de carregamento com animação
- `results.html` – apresenta resultados demonstrativos

Para exibir um vídeo na página de resultados, coloque o arquivo `vsl.mp4` na raiz do repositório e descomente o bloco correspondente em `results.html`.

## Hospedagem no GitHub Pages
Habilite o GitHub Pages nas configurações do repositório usando a branch `main` como origem. Depois de alguns minutos, o site ficará disponível em `https://<usuario>.github.io/<repo>/`.

## Teste local
Execute um servidor HTTP simples:

```bash
python3 -m http.server
```

Em seguida abra `http://localhost:8000` no navegador.
