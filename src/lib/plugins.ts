// @refresh reload
import registry from '~/../registry/plugins.yml';
import { getRepositories, getReadmeRawUrl } from './github';

let _lastUpdate = 0;
const _pluginMap = new Map<string, IPlugin>();

for (const plugin of registry.plugins) {
  const data = { ...plugin };

  data.stars = 0;
  data.hearts = 0;
  data.downloads = 0;
  
  _pluginMap.set(data.slug, data);
}

async function update() {
  if (Date.now() > _lastUpdate + 300000) {
    _lastUpdate = Date.now();
    const plugins = Array.from(_pluginMap.values());
    const results = await getRepositories(plugins.map(x => x.repo));

    let index = 0;
    for (const plugin of plugins) {
      const result = results[index++];

      plugin.branch = result.defaultBranchRef.name;
      plugin.stars = result.stargazerCount;
      plugin.downloads = 0;

      if (plugin.readme !== false && plugin.updated_at == undefined) {
        plugin.readme = getReadmeRawUrl(plugin.repo, plugin.branch, plugin.readme);
      }

      plugin.updated_at = result.updatedAt;
    }
  }
}

export function hasPlugin(slug: string) {
  return _pluginMap.has(slug);
}

export async function getAllPlugins() {
  await update();
  const plugins = Array.from(_pluginMap.values());
  return plugins.sort((a, b) => (b.stars! + b.hearts!) - (a.stars! + a.hearts!));
}

export async function getPlugin(slug: string) {
  await update();
  return _pluginMap.get(slug);
}