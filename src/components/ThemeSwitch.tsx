import { toggleTheme } from '~/lib/theme';

export function ThemeSwitch() {
  return (
    <button
      onClick={toggleTheme}
      role="switch" type="button" tabindex="0" aria-checked="false"
      class="bg-gray-200 dark:bg-gray-600 z-10 order-1 sm:order-none border-transparent w-[44px] h-[24px] relative inline-flex rounded-full border-2"
    >
      <span
        class="bg-white dark:bg-gray-900 rounded-full h-5 w-5 pointer-events-none transition-[all_.2s] relative dark:translate-x-5"
        style="box-shadow': '0 1px 3px #0000001a, 0 1px 2px -1px #0000001a;"
      >
        <span
          aria-hidden="true"
          class="flex items-center inset-0 justify-center absolute w-full text-gray-100 opacity-0 dark:opacity-100 transition-opacity ease-[ease-in] duration-200 dark:duration-100"
        >
          <svg aria-hidden="true" role="img" class="icon icon-on" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="currentColor" d="M21.64 13a1 1 0 0 0-1.05-.14a8.05 8.05 0 0 1-3.37.73a8.15 8.15 0 0 1-8.14-8.1a8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36a10.14 10.14 0 1 0 14 11.69a1 1 0 0 0-.36-1.05Zm-9.5 6.69A8.14 8.14 0 0 1 7.08 5.22v.27a10.15 10.15 0 0 0 10.14 10.14a9.79 9.79 0 0 0 2.1-.22a8.11 8.11 0 0 1-7.18 4.32Z">
            </path>
          </svg>
        </span>
        <span
          aria-hidden="true"
          class="flex items-center inset-0 justify-center absolute w-full text-gray-600 dark:opacity-0 transition-opacity ease-[ease-in] duration-200 dark:duration-100"
        >
          <svg aria-hidden="true" role="img" class="icon icon-off" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="currentColor" d="m5.64 17l-.71.71a1 1 0 0 0 0 1.41a1 1 0 0 0 1.41 0l.71-.71A1 1 0 0 0 5.64 17ZM5 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Zm7-7a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1ZM5.64 7.05a1 1 0 0 0 .7.29a1 1 0 0 0 .71-.29a1 1 0 0 0 0-1.41l-.71-.71a1 1 0 0 0-1.41 1.41Zm12 .29a1 1 0 0 0 .7-.29l.71-.71a1 1 0 1 0-1.41-1.41l-.64.71a1 1 0 0 0 0 1.41a1 1 0 0 0 .66.29ZM21 11h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm-9 8a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1Zm6.36-2A1 1 0 0 0 17 18.36l.71.71a1 1 0 0 0 1.41 0a1 1 0 0 0 0-1.41ZM12 6.5a5.5 5.5 0 1 0 5.5 5.5A5.51 5.51 0 0 0 12 6.5Zm0 9a3.5 3.5 0 1 1 3.5-3.5a3.5 3.5 0 0 1-3.5 3.5Z">
            </path>
          </svg>
        </span>
      </span>
    </button >
  )
}