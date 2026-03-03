// @ts-check
import { defineConfig } from 'astro/config';

const repo = process.env.GITHUB_REPOSITORY; // "keegooroomie/cv_hub"
const [owner, name] = repo ? repo.split('/') : [null, null];

export default defineConfig({
  site: owner ? `https://${owner}.github.io` : 'http://localhost:4321',
  base: name ? `/${name}` : undefined,
});