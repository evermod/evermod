import { RESTDataSource } from 'apollo-datasource-rest'

/**
 * https://twitchappapi.docs.apiary.io
 */
class CurseForge extends RESTDataSource {
  constructor () {
    super()
    this.baseURL = 'https://addons-ecs.forgesvc.net/api/v2/'
  }

  async searchMods (searchFilter: string, gameVersion: string, pageSize: number = 25) {
    return this.get('addon/search', {
      categoryId: 0,
      gameId: 432,
      gameVersion,
      index: 0,
      pageSize,
      searchFilter,
      sectionId: 6,
      sort: 0
    })
  }

  async getAllVersions (): Promise<string[]> {
    const response = await this.get('minecraft/version')
    return response.map(x => x.versionString)
  }

  getMod = (id: number) => this.get(`addon/${id}`)
  getFile = (modId: number, fileId: number) => this.get(`addon/${modId}/file/${fileId}`)
}

export default CurseForge
