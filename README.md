# Coffeecionado Media Kit 2026

Media kit bilingue (PT/EN) do [@coffeecionado.pt](https://www.instagram.com/coffeecionado.pt/): estatísticas de Instagram, audiência, caso em destaque, formatos de colaboração e contactos.

**Online:** https://mediakit.coffeecionado.pt/
Link direto em inglês: https://mediakit.coffeecionado.pt/#en

Feito com React, TypeScript e Vite. Não há servidor: o site é estático e o GitHub Pages serve-o.

## Correr localmente

Precisas do Node.js 20 ou mais recente.

```bash
npm install
npm run dev
```

Abre o endereço que aparece no terminal (normalmente http://localhost:5173/).

## Atualizar os números

Todos os dados estão em [`src/content.ts`](src/content.ts): seguidores, estatísticas dos últimos 30 dias, reels, audiência, marcas e contactos.

Escreve os números por extenso (`499_000`, não `"499 mil"`). A página formata-os sozinha em português (`499 mil`, `5,0%`) e em inglês (`499K`, `5.0%`). Os valores calculados, como a taxa de interação, o alcance face aos seguidores e as médias por reel, estão em [`src/stats.ts`](src/stats.ts) e atualizam-se automaticamente.

Para trocar o reel em destaque, muda `featuredReelId` em `content.ts`.

## Publicar

Cada push para `main` compila o site e publica-o no GitHub Pages através de [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

## Estrutura

- `src/content.ts`: textos e dados (PT/EN)
- `src/stats.ts`: valores calculados
- `src/format.ts`: formatação de números por língua
- `src/i18n.tsx`: língua ativa, sincronizada com `#pt` / `#en` no link
- `src/components/`: uma secção da página por componente
- `src/styles.css`: estilos e cores (tema claro e escuro)
- `public/img/`: fotos, miniaturas dos reels e logo
