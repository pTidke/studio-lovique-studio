import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'gqkhy2kv',
    dataset: 'production'
  },
  studioHost: 'lovique',
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
    appId: 'ydkypxks1nadet8ilfyt6y3g',
  }
})
