export const config = {
  GH_PAT: ''
};

function parseRepoUrl(url: string, branch?: string) {
  url = url.replace(/^https\:\/\/github\.com\//i, '');
  url = url.replace(/\/$/, '');
  const parts = url.split('/');
  return {
    owner: parts[0],
    name: parts[1],
    branch: branch || parts[3] || 'main',
    path: parts.slice(4).join('/')
  }
}

export function getReadmeRawUrl(repoUrl: string, branch?: string, readmeFile?: string) {
  if (/^https\:\/\/raw\.githubusercontent\.com\//i.test(repoUrl) && /readme\.md$/.test(repoUrl)) {
    return repoUrl;
  } else if (/^https\:\/\/raw\.githack\.com\//i.test(repoUrl) && /readme\.md$/.test(repoUrl)) {
    return repoUrl;
  }

  const repo = parseRepoUrl(repoUrl, branch);
  const parts = repo.path.split('/');

  if (readmeFile) {
    parts.push(readmeFile);
  } else if (!/readme\.md$/i.test(parts[parts.length - 1])) {
    parts.push('README.md');
  }

  const path = [repo.owner, repo.name, repo.branch, ...parts].join('/');
  return `https://raw.githubusercontent.com/${path}`;
}

interface Repository {
  nameWithOwner: string
  stargazerCount: number
  updatedAt: string
  defaultBranchRef: {
    name: string
  }
  latestRelease?: {
    name: string
    tagName: string
    updatedAt: string
    releaseAssets: {
      nodes: [
        {
          name: string
          downloadUrl: string
          downloadCount: number
          contentType: string
          updatedAt: string
        }
      ]
    }
  }
}

interface GraphResult {
  data: Record<string, Repository>
  errors?: [
    {
      type: string
      path: string[]
      location: [
        {
          line: number
          column: number
        }
      ]
      message: string
    }
  ]
}

export async function getRepositories(repoList: string[]) {
  const repos = repoList.map(x => parseRepoUrl(x));
  const query = `query {
    ${repos.map((repo, index) => `
      _${index}: repository(owner: "${repo.owner}", name: "${repo.name}") {
        nameWithOwner
        stargazerCount
        updatedAt
        defaultBranchRef {
          name
        }
        latestRelease {
          name
          tagName
          updatedAt
          releaseAssets(last: 5) {
            nodes {
              name
              downloadUrl
              downloadCount
              contentType
              updatedAt
            }
          }
        }
      }
    `).join('\n')}
  }`;

  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${config.GH_PAT}`,
    },
    body: JSON.stringify({ query }),
  });

  if (res.status !== 200) {
    throw Error('Failed to query repositories with status ' + res.status);
  }

  const data: GraphResult = await res.json();

  if (data.errors) {
    throw Error('Failed to query repositories with errors ' + JSON.stringify(data.errors));
  }

  const results = repos.map((_, index) => {
    const repo = data.data[`_${index}`];
    return repo;
  })

  return results;
}