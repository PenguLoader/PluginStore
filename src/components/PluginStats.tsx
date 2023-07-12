import { Show, createResource } from 'solid-js';

interface Props {
  plugin: IPlugin
}

export function PluginStats(props: Props) {

  let avatar = '';
  let stars = props.plugin.stars ?? '-';
  let downloads = props.plugin.downloads || '-';
  if (typeof downloads === 'number' && downloads >= 1000) {
    downloads = (downloads / 1000).toFixed(1) + 'k';
  }

  const author = props.plugin.author;

  if (author.avatar) {
    avatar = author.avatar;
  } else if (author.github) {
    avatar = `https://github.com/${author.github}.png`;
  }

  // const [npmDownloads] = createResource(props.plugin.npm, async (npm) => {
  //   // if (npm) {
  //   //   const res = await fetch(`https://api.npmjs.org/versions/${npm}/last-week`);
  //   //   if (res.ok) {
  //   //     const d = (await res.json())['downloads'];
  //   //     const values = Object.values(d) as number[];
  //   //     return values.reduce((a, b) => a + b, 0) as number;
  //   //   }
  //   // }
  // });

  return (
    <div class="mt-4 mb-2 flex items-center justify-between">
      <span class="text-right flex items-center">
        <Show when={avatar} fallback={<svg class="inline w-6 h-6"><use href="#icon-github" /></svg>}>
          <picture class="object-cover">
            <img src={avatar} width="24" height="24" class="rounded-full pointer-events-none" />
          </picture>
        </Show>
        <span class="ml-2">
          {author.name}
        </span>
      </span>
      <span class="flex items-center">
        <Show when={props.plugin.auto_update}>
          <svg class="w-4 h-4 inline"><use href="#icon-verified" /></svg><span class="mx-1">auto-update</span>
        </Show>
        <svg class="w-4 h-4 inline ml-2"><use href="#icon-star" /></svg><span class="mx-1">{stars}</span>
        <svg class="w-4 h-4 inline ml-2"><use href="#icon-heart" /></svg><span class="mx-1">{props.plugin.hearts}</span>
        <svg class="w-4 h-4 inline ml-2"><use href="#icon-download" /></svg><span class="mx-1">{downloads}</span>
        {/* <Show when={npmDownloads()}>
          <span class="text-green-500">+{npmDownloads()}</span>
        </Show> */}
      </span>
    </div>
  )
}