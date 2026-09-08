# Independência do Brasil — experiência audiovisual

Site estático, responsivo e otimizado para acesso por QR Code.

## Estrutura

- `index.html`
- `style.css`
- `script.js`
- `assets/video.mp4` ← coloque aqui o vídeo real

## Como trocar o vídeo

1. Abra a pasta `assets`.
2. Coloque seu arquivo MP4 dentro dela.
3. Renomeie o arquivo para `video.mp4`.

Ou, se preferir outro nome, abra `index.html` e altere apenas esta linha:

`<source src="assets/video.mp4" type="video/mp4">`

## Hospedagem gratuita

Pode ser hospedado como site estático em serviços como GitHub Pages, Netlify ou Vercel.

Não há backend, banco de dados, login ou instalação necessária.

## Observação

O site usa Google Fonts para a tipografia. Se quiser funcionamento totalmente independente de conexão externa, as fontes podem posteriormente ser substituídas por arquivos locais.
