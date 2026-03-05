# AnimatedBackground

CSS-only animated background component. Four glowing orbs drifting on screen, no JS.

## Usage

```astro
import AnimatedBackground from './AnimatedBackground.astro';

// in Layout.astro, first child of <body>:
<AnimatedBackground />
```
## How it works

- 4 orbs — `position: fixed`, `blur(80px)`, `@keyframes` drift with scale pulse
- Colors pulled from `--accent-rgb` and `--accent-2-rgb` — theme-aware automatically
- Noise overlay via inline SVG `feTurbulence` — adds texture, `opacity: 0.04`
- Respects `prefers-reduced-motion` — all animation disabled if user prefers

## Tuning

| What | Where |
|---|---|
| Orb size | `.orb--N { width / height }` |
| Orb intensity | `.orb { opacity }` |
| Blur amount | `.orb { filter: blur(...) }` |
| Speed | `animation: drift-N Xs` |
| Movement range | `@keyframes drift-N { transform: translate(...) }` |