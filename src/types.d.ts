interface IPlugin {
  name: string
  slug: string
  description: string
  image: string

  theme?: boolean
  auto_update?: boolean
  
  tags?: Array<'ui' | 'utility' | 'theme' | 'tweakable' | 'fun'> | string[]

  repo: string
  readme?: string | false

  author: {
    name: string
    github?: string
    social?: string
    avatar?: string
  }

  // runtime stats
  branch?: string
  stars?: number
  hearts?: number
  downloads?: number
  updated_at?: string
}

interface ClassProp {
  class: string
}

interface ChildrenProp {
  children: any
}

declare module '*/registry/plugins.yml' {
  const registry: {
    name: string
    version: string
    plugins: IPlugin[]
  }
  export default registry;
}