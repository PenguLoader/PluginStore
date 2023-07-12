// @refresh reload
import { Suspense, createEffect, createSignal } from "solid-js";
import { isServer } from "solid-js/web";
import {
Body,
ErrorBoundary,
FileRoutes,
Head,
Html,
Meta,
Routes,
Scripts,
Title,
Link,
useIsRouting,
} from "solid-start";

import nprogress from 'nprogress';
import { Layout } from "./components/Layout";
import { themeScript } from "./lib/theme";

import "nprogress/nprogress.css";
import "./root.css";

export default function Root() {
  if (!isServer) {
    const isRouting = useIsRouting();
    const [loading, setLoading] = createSignal(false);

    createEffect(() => {
      nprogress.configure({
        minimum: 0.1,
        showSpinner: false
      });

      if (isRouting() && !loading()) {
        setLoading(true);
        nprogress.start();
      } else if (!isRouting() && loading()) {
        setLoading(false);
        nprogress.done(true);
      }
    });
  }

  return (
    <Html lang="en">
      <Head>
        <Title>Plugin Store - Pengu Loader</Title>
        <Link rel="icon" type="image/png" href="/pengu-sm.png" />
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <script innerHTML={themeScript}></script>
      </Head>
      <Body class="bg-white text-gray-800 dark:bg-black dark:text-white">
        <Suspense>
          <ErrorBoundary>
            <Layout>
              <Routes>
                <FileRoutes />
              </Routes>
            </Layout>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}