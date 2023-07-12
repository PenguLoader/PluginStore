import { CliCommand } from './CliCommand';

interface Props {
  repo: string
  branch: string
  dir?: string
  slug: string
}

export function PluginButtons(props: Props) {

  const template =
    props.repo === '/starter'
      ? props.branch === 'v3'
        ? '' : `-t ${props.branch} `
      : `-t "${props.repo}#${props.branch}" `;

  const command = `npx nuxi init ${template}<${template.includes('module') ? 'module' : 'app'}>`

  return (
    <div class="grid gap-3 text-xs mt-4 grid-cols-2">
      <a
        target="_blank"
        href={`/c/${props.slug}`}
        class="flex gap-2 items-center px-3 py-2 rounded bg-white bg-opacity-[0.1] border-[1px] border-white border-opacity-[0.1] hover:border-opacity-[0.7] hover:bg-opacity-[0.2] transition-all"
      >
        <svg class="w-4 h-4"><use href="#codesandbox" /></svg>
        CodeSandbox
      </a>
      <a
        target="_blank"
        href={`/s/${props.slug}`}
        class="flex gap-2 items-center px-3 py-2 rounded bg-white bg-opacity-[0.1] border-[1px] border-white border-opacity-[0.1] hover:border-opacity-[0.7] hover:bg-opacity-[0.2] transition-all"
      >
        <svg class="w-4 h-4"><use href="#stackblitz" /></svg>
        StackBlitz
      </a>
      <CliCommand command={command} />
    </div >
  )
}