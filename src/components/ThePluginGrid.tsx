import { For } from 'solid-js';
import { A } from 'solid-start';
import { PluginStats } from './PluginStats';

interface Props {
  plugins: IPlugin[]
}

export function ThePluginGrid(props: Props & ClassProp) {

  return (
    <div class={"grid gap-8 grid-cols-1 md:grid-cols-2 " + props.class}>
      <For each={props.plugins}>
        {(item) => (
          <article
            class="flex flex-col justify-between px-4 py-4 rounded-xl border-[1px]
              dark:border-gray-800 hover:bg-slate-50 dark:bg-gradient-to-r dark:from-[rgba(24,24,27,0.65)]
              backdrop-blur-sm to-transparent dark:hover:border-gray-600 dark:hover:bg-transparent"
          >
            <div>
              <img src={item.image} class="h-8 w-8 pointer-events-none" alt="" />
              <div class="font-bold mt-4 flex flex-row gap-2 items-center">
                <A class="text-xl hover:text-green-500" href={`/plugins/${item.slug}`} >
                  {item.name}
                </A>
              </div>
              <p class="font-thin">
                {item.description}
              </p>
            </div>
            <PluginStats plugin={item} />
          </article >
        )}
      </For>
    </div >
  )
}