import { children } from 'solid-js';
import { Header } from './Header';
import { SpriteMap } from './SpriteMap';
import { Footer } from './Footer';

export function Layout(props: ChildrenProp) {
  const resolved = children(() => props.children);
  return (
    <main class="relative max-w-5xl w-full mx-auto px-6">
      <SpriteMap />
      <Header />
      {resolved()}
      <Footer />
    </main>
  )
}