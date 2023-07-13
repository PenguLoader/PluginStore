import { Show, createMemo } from "solid-js";
import { useRouteData } from "solid-start";
import { TheThemeGrid } from "~/components/TheThemeGrid";
import { ThePluginGrid } from "~/components/ThePluginGrid";
import { createServerData$ } from "solid-start/server";

export function routeData() {
  return createServerData$(async () => {
    const { getAllPlugins } = await import('~/lib/plugins');
    return {
      plugins: await getAllPlugins()
    }
  }, { deferStream: true });
}

export default function Home() {

  const data = useRouteData<typeof routeData>();
  const plugins = createMemo(() => data()?.plugins.filter(x => !x.theme));
  const themes = createMemo(() => data()?.plugins.filter(x => x.theme));

  return (
    <div class="z-[2] relative flex flex-col min-h-screen">
      <div class="blur-[140px] h-[10rem] max-w-[40rem] absolute top-[10rem] z-10 pointer-events-none w-[-webkit-fill-available]">
        <div class="w-full h-full bg-[linear-gradient(97.62deg,rgba(0,71,225,0.22),rgba(26,214,255,0.32),rgba(0,220,130,0.42))]" />
      </div>

      <h1 class="font-bold text-center text-3xl mt-12 md:text-left md:text-5xl">
        Pengu Plugin Store
      </h1>
      <p class="dark:font-thin mt-6 text-center mx-auto md:mx-0 md:mt-8 md:text-left max-w-[23rem] md:max-w-[60rem]">
        ✨ Awesome plugins and themes for Pengu Loader.
        <br />
        ⚡ Easy installation with a single click.
        <br />
        <br />
        Check out <a href="https://pengu.lol/guide/javascript-plugin" class="link" target="_blank">the guides</a> to create a new one or <a
          href="https://github.com/PenguLoader/PluginStore" class="link" target="_blank">publish your own</a>?
      </p>

      <section>
        <h2 class="font-bold text-2xl mb-1 md:text-3xl mt-20 md:mt-24 flex items-center">
          Plugins<svg class="w-8 h-8 inline ml-2"><use href="#icon-plugin" /></svg>
        </h2>
        <p class="font-thin max-w-[70ch]">
          Unleash custom plugins for unmatched functionality!
        </p>
        <Show when={data()}>
          <ThePluginGrid class="mt-4 md:mt-8" plugins={plugins()!} />
        </Show>
      </section>

      <section>
        <h2 class="font-bold text-2xl mb-1 md:text-3xl mt-20 md:mt-24">
          Themes<svg class="w-8 h-8 inline ml-2"><use href="#icon-theme" /></svg>
        </h2>
        <p class="font-thin max-w-[70ch]">
          Explore captivating themes to redefine your League Client.
        </p>
        <Show when={data()}>
          <TheThemeGrid class="mt-4 md:mt-8" themes={themes()!} />
        </Show>
      </section>
    </div>
  );
}