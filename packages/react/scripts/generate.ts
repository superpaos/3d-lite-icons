import { readdirSync, existsSync, writeFileSync } from 'fs'
import { join } from 'path'

const ICONS_DIR = join(__dirname, '../../../icons')
const CDN_BASE = 'https://cdn.jsdelivr.net/gh/superpaos/3d-lite-icons'
const SIZES = [128, 512]

const icons: Record<string, number[]> = {}

for (const name of readdirSync(ICONS_DIR)) {
  const available = SIZES.filter(s =>
    existsSync(join(ICONS_DIR, name, `${s}.png`))
  )
  if (available.length > 0) icons[name] = available
}

const content = `// AUTO-GENERATED — do not edit manually
export const CDN_BASE = '${CDN_BASE}'
export const icons = ${JSON.stringify(icons, null, 2)} as const
export type IconName = keyof typeof icons
`

writeFileSync(join(__dirname, '../src/icons.gen.ts'), content)
console.log(`Generated ${Object.keys(icons).length} icons`)
