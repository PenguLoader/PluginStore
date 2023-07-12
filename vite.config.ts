import { defineConfig } from 'vite';
import solid from 'solid-start/vite';
import dotenv from 'dotenv';
import yaml from 'yaml';

// @ts-ignore
import deno from 'solid-start-deno';
// @ts-ignore
import node from 'solid-start-node';

export default defineConfig(() => {
  dotenv.config();
  return {
    define: {
      'process.env.GITHUB_PAT': JSON.stringify(process.env.GITHUB_PAT),
    },
    plugins: [
      solid({
        adapter: process.argv.includes('--deno') ? deno() : node()
      }),
      {
        name: 'yaml-loader',
        transform(code, id) {
          if (/\.(yml|yaml)$/i.test(id)) {
            const content = yaml.parse(code);
            return `export default ${JSON.stringify(content)}`;
          }
        }
      }
    ],
  }
});