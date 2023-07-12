export function CliCommand(props: { command: string }) {

  const click = () => {
    navigator.clipboard.writeText(props.command);
  };

  return (
    <>
      <button
        class="flex gap-2 items-center px-3 py-2 rounded border-[1px] border-white border-opacity-[0.1] hover:border-opacity-[0.7] hover:bg-opacity-[0.2] transition-all col-span-2 opacity-75"
        onClick={click}
      >
        <span class="sr-only">Click to copy</span>
        <code class="flex items-center gap-2">
          <svg class="w-4 h-4"><use href="#terminal" /></svg>
          {props.command}
        </code>
      </button >
      <span
        class="absolute bottom-[1.5rem] right-[0.5rem] transition-opacity opacity-0 copy-confirmation pointer-events-none"
      >
        Copied!
      </span>
    </>
  )
}