import { A } from 'solid-start';

export default function NotFound() {
  return (
    <main class="text-center mx-auto">
      <div
        class="blur-[140px] h-[10rem] absolute top-[0rem] z-10 pointer-events-none w-[-webkit-fill-available]"
      >
        <div
          class="w-full h-full bg-[linear-gradient(97.62deg,rgb(102_138_217_/_53%)_2.27%,rgba(26,214,255,0.22)_50.88%,rgb(131_0_220_/_60%)_98.48%)]"
        />
      </div>
      <h1 class="max-6-xs text-6xl text-green-500 font-thin uppercase my-16">
        Not Found
      </h1>
      <p class="my-2">
        <A href="/" class="hover:underline hover:text-green-400">
          Back to Home
        </A>
      </p>
    </main>
  );
}