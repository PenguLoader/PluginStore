import { A, useLocation } from 'solid-start';
import { ThemeSwitch } from './ThemeSwitch';
import { createMemo } from 'solid-js';

export function Header() {

  const location = useLocation();
  const isHome = createMemo(() => location.pathname === '/');

  return (
    <header class="py-4 grid grid-cols-2 items-center w-full xl:mt-4">
      <span>
        <A
          target={isHome() ? '_blank' : ''}
          href={isHome() ? 'https://pengu.lol' : '/'}
          class="flex items-center"
        >
          <img src="/pengu.jpg" width="32" height="32" class="rounded" />
          <h1 class="ml-3 inline text-lg">{isHome() ? 'Pengu Loader' : 'Plugin Store'}</h1>
        </A>
      </span>
      <span class="flex items-center justify-end">
        <ThemeSwitch />
        <span class="mx-3 border-l-[1px] border-gray-500/30 h-5" />
        <a target="_blank" href="https://chat.pengu.lol" class="p-2">
          <svg class="w-5 h-5"><use href="#icon-discord" /></svg>
        </a>
        <a target="_blank" href="https://github.com/PenguLoader" class="p-2">
          <svg class="w-5 h-5"><use href="#icon-github" /></svg>
        </a>
      </span>
    </header>
  )
}