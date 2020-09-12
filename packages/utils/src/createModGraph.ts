type ModsMap = { [key: number]: string }

const deep = (v, modsMap: ModsMap) => {
  const { file } = v
  if (!file) return
  modsMap[file.id] = file
  const deps = ((file || {}).dependencies || [])
  if (deps.length === 0) return
  v.children = deps.map(x => {
    const file = (x.gameVersionLatestFiles || [])[0]
    return { key: `${v.key}_${x.id}`, name: x.name, file }
  })
  v.children.forEach(child => {
    deep(child, modsMap)
  })
}

export const createModGraph = (mods: any[] = []) => {
  const modsMap: ModsMap = {}
  const newMods = []
  mods.forEach(mod => {
    const file = (mod.gameVersionLatestFiles || [])[0]
    const node = {
      key: mod.id,
      name: mod.name,
      file
    }
    newMods.push(node)
    deep(node, modsMap)
  })
  const modsList = Object.values(modsMap)
  console.log(newMods)
  return [newMods, modsList]
}
