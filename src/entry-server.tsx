import {
  StartServer,
  createHandler,
  renderAsync,
} from "solid-start/entry-server";

import { config } from "./lib/github";
config.GH_PAT = process.env.GITHUB_PAT as string;

export default createHandler(
  renderAsync((event) => <StartServer event={event} />)
);
