import { For } from 'solid-js';
import { A } from 'solid-start';
import { PluginStats } from './PluginStats';

interface Props {
  themes: IPlugin[]
}

export function TheThemeGrid(props: Props & ClassProp) {

  return (
    <div class={"grid gap-8 grid-cols-1 md:grid-cols-2 relative " + props.class}>

      <div
        class="blur-[140px] h-[10rem] absolute top-[0rem] z-10 pointer-events-none w-[-webkit-fill-available]"
      >
        <div
          class="w-full h-full bg-[linear-gradient(97.62deg,rgb(102_138_217_/_53%)_2.27%,rgba(26,214,255,0.22)_50.88%,rgb(131_0_220_/_60%)_98.48%)]"
        />
      </div>

      <For each={props.themes}>
        {(item) => (
          <article
            class="dark:backdrop-blur-sm dark:to-transparent overflow-hidden
              flex flex-col justify-between px-4 py-4 rounded-xl border-[1px]
              dark:border-gray-800 hover:bg-slate-50 dark:bg-gradient-to-r dark:from-[rgba(24,24,27,0.65)]
              dark:hover:border-gray-600 dark:hover:bg-transparent"
          >
            <div>
              <div
                class="relative aspect-video -mx-4 -mt-4 overflow-hidden bg-gradient-to-r from-blue-400 to-teal-400 p-0 dark:p-3 dark:md:p-4"
              >
                <A href={`/plugins/${item.slug}`}>
                  <picture class="object-cover">
                    <img
                      class="rounded"
                      src={item.image}
                      loading="lazy"
                      sizes="sm:100vw md:50vw lg:685px"
                      alt=""
                      width="685"
                      height="434"
                    />
                  </picture>
                </A>
              </div>
              <p class="font-bold mt-4 flex items-center gap-2">
                <A href={`/plugins/${item.slug}`} class="hover:text-green-400 text-xl">
                  {item.name}
                </A>
              </p>
              <p class="font-thin">{item.description}</p>
            </div>
            <PluginStats plugin={item} />
          </article>
        )}
      </For>
    </div >
  )
}