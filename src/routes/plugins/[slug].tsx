import { Show, createResource, onMount } from 'solid-js';
import { isServer } from 'solid-js/web';
import { RouteDataArgs, useRouteData } from 'solid-start';
import { createServerData$, redirect } from 'solid-start/server';
import { marked } from 'marked';

export function routeData({ params }: RouteDataArgs) {
  return createServerData$(async (slug) => {
    const { hasPlugin, getPlugin } = await import('~/lib/plugins');

    if (hasPlugin(slug)) {
      return await getPlugin(slug);
    }
    else {
      throw redirect('/not-found');
    }

  }, { key: () => params.slug, deferStream: true });
}

export default function PluginPage() {

  const plugin = useRouteData<typeof routeData>();

  const [html, { refetch }] = createResource(plugin, async (plugin) => {
    if (!isServer && plugin?.readme) {
      const res = await fetch(plugin.readme);
      if (res.ok) {
        const markdown = await res.text();
        return marked(markdown, {
          mangle: false,
          headerIds: false,
        });
      }
    }
  });

  if (!isServer && !plugin.loading) {
    onMount(refetch);
  }

  return (
    <div class="z-[2] relative flex flex-col min-h-screen mt-16">
      <p class="my-12 text-3xl">
        // todo
      </p>
      <Show when={plugin() && html()}>
        <article class="prose prose-gray dark:prose-invert max-w-[80ch]">
          <div innerHTML={html()} />
        </article>
      </Show>
    </div>
  )
}