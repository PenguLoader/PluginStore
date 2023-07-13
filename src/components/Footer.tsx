export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer class="mt-12 py-5 w-full">
      <div class="my-32 text-center">
        <h3 class="text-2xl mb-2">Don't see what you need?</h3>
        <p class="text-center">
          👉 <a href="https://pengu.lol/guide/javascript-plugin" class="link" target="_blank">Create your own now</a>
        </p>
        <p class="text-center">
          👍 <a href="https://github.com/PenguLoader/PluginStore" class="link" target="_blank">Publish your plugins</a>
        </p>
      </div>
      <div class="flex md:justify-between justify-center items-center flex-col md:flex-row">
        <span>&copy; {year} Pengu Loader</span>
        <a
          target="_blank"
          href="https://github.com/PenguLoader/PluginStore"
          class="p-2 flex gap-2 font-thin items-center"
        >
          <svg class="w-4 h-4"><use href="#icon-github" /></svg>
          Edit on GitHub
        </a>
      </div>
    </footer>
  )
}