import { A } from 'solid-start';
import { CliCommand } from './CliCommand';

export function CardButtons(props: { slug: string }) {

  const command = `npx nuxi init -t themes/${props.slug} <app>`;

  return (
    <div class="grid gap-3 text-xs mt-4 grid-cols-2">
      <A
        href={`/plugins/${props.slug}`}
        class="flex justify-center gap-2 items-center px-3 py-2 rounded bg-white bg-opacity-[0.1] border-[1px] border-white border-opacity-[0.1] hover:border-opacity-[0.7] hover:bg-opacity-[0.2] transition-all"
      >
        <svg class="w-4 h-4"><use href="#icon-info" /></svg>READ MORE...
      </A>
      <button
        class="flex justify-center gap-2 items-center px-3 py-2 rounded bg-white bg-opacity-[0.1] border-[1px] border-white border-opacity-[0.1] hover:border-opacity-[0.7] hover:bg-opacity-[0.2] transition-all"
      >
        <svg class="w-4 h-4"><use href="#icon-download" /></svg>INSTALL (1.2k)
      </button>
      <CliCommand command={command} />
    </div >
  )
}