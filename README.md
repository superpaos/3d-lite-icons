# 3D Lite Icons

306 3D-style PNG icons served via jsDelivr CDN. Available as a React package or as direct CDN URLs.

<img src="https://cdn.jsdelivr.net/gh/superpaos/3d-lite-icons@v1.0.0/icons/family/128.png" width="48" /><img src="https://cdn.jsdelivr.net/gh/superpaos/3d-lite-icons@v1.0.0/icons/dog/128.png" width="48" /><img src="https://cdn.jsdelivr.net/gh/superpaos/3d-lite-icons@v1.0.0/icons/cake/128.png" width="48" /><img src="https://cdn.jsdelivr.net/gh/superpaos/3d-lite-icons@v1.0.0/icons/coffee-cup/128.png" width="48" /><img src="https://cdn.jsdelivr.net/gh/superpaos/3d-lite-icons@v1.0.0/icons/wallet/128.png" width="48" /><img src="https://cdn.jsdelivr.net/gh/superpaos/3d-lite-icons@v1.0.0/icons/gear-settings/128.png" width="48" /><img src="https://cdn.jsdelivr.net/gh/superpaos/3d-lite-icons@v1.0.0/icons/plane/128.png" width="48" /><img src="https://cdn.jsdelivr.net/gh/superpaos/3d-lite-icons@v1.0.0/icons/heart-pulse/128.png" width="48" /><img src="https://cdn.jsdelivr.net/gh/superpaos/3d-lite-icons@v1.0.0/icons/trophy/128.png" width="48" /><img src="https://cdn.jsdelivr.net/gh/superpaos/3d-lite-icons@v1.0.0/icons/music-note/128.png" width="48" /><img src="https://cdn.jsdelivr.net/gh/superpaos/3d-lite-icons@v1.0.0/icons/pizza/128.png" width="48" /><img src="https://cdn.jsdelivr.net/gh/superpaos/3d-lite-icons@v1.0.0/icons/calendar/128.png" width="48" />

## React

### Installation

```bash
npm install @superpaos/react-3d-lite-icons
# or
pnpm add @superpaos/react-3d-lite-icons
```

### Usage

```tsx
import { Icon } from '@superpaos/react-3d-lite-icons'

// Basic
<Icon name="apple" size={48} />

// With drop-shadow
<Icon name="trophy" size={64} shadow />

// Custom shadow
<Icon
  name="coffee-cup"
  size={96}
  shadow
  shadowColor="rgba(0,0,0,0.35)"
  shadowY={6}
  shadowBlur={14}
/>

// Pinned to a specific release (recommended for production)
<Icon name="wallet" size={32} version="v1.0.0" />

// With className / style
<Icon name="gear-settings" size={32} className="spin" style={{ opacity: 0.8 }} />

// Clickable
<Icon name="shopping-cart" size={40} onClick={() => openCart()} />
```

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `name` | `IconName` | — | Icon identifier (see [icon list](#icon-list)) |
| `size` | `number` | `24` | Render size in px. Selects the nearest available resolution. |
| `version` | `string` | `'latest'` | jsDelivr tag. Pin to a specific version in production. |
| `shadow` | `boolean` | `false` | CSS `drop-shadow` following the icon's transparent edges. |
| `shadowColor` | `string` | `'rgba(0,0,0,0.2)'` | Shadow color (any CSS color value). |
| `shadowX` | `number` | `0` | Horizontal shadow offset in px. |
| `shadowY` | `number` | `4` | Vertical shadow offset in px. |
| `shadowBlur` | `number` | `8` | Shadow blur radius in px. |
| `className` | `string` | — | CSS class on the `<img>` element. |
| `style` | `CSSProperties` | — | Inline styles on the `<img>` element. |
| `alt` | `string` | icon name | Alt text for accessibility. |
| `onClick` | `MouseEventHandler` | — | Click handler. |

### Asset resolution

The `size` prop picks the smallest available resolution that is ≥ the requested size, falling back to the largest if none qualify.

| Requested `size` | Asset loaded |
|---|---|
| ≤ 128 px | `128.png` |
| > 128 px | `512.png` |

### CSP

If your app uses a Content Security Policy, add `cdn.jsdelivr.net` to `img-src`.

---

## CDN (framework-agnostic)

Icons are hosted on jsDelivr. Replace `{version}` and `{name}`:

```
https://cdn.jsdelivr.net/gh/superpaos/3d-lite-icons@{version}/icons/{name}/128.png
https://cdn.jsdelivr.net/gh/superpaos/3d-lite-icons@{version}/icons/{name}/512.png
```

**Examples:**

```html
<img src="https://cdn.jsdelivr.net/gh/superpaos/3d-lite-icons@v1.0.0/icons/apple/128.png" width="128" />
<img src="https://cdn.jsdelivr.net/gh/superpaos/3d-lite-icons@v1.0.0/icons/apple/512.png" width="512" />
```

```css
.icon-apple {
  background-image: url("https://cdn.jsdelivr.net/gh/superpaos/3d-lite-icons@v1.0.0/icons/apple/128.png");
}
```

> Use a pinned version tag (e.g. `@v1.0.0`) rather than `@latest` in production — jsDelivr caches by tag and `@latest` may lag behind.

---

## Icon list

<details>
<summary>All 306 icons</summary>

`address-book` `alarm-clock` `anchor` `apple` `armchair` `arrow-down` `arrow-left` `arrow-right` `arrow-up` `arrows-swap` `atm` `audio-waveform` `baby` `baby-bottle` `backpack` `backspace-key` `balloon` `bandage` `bank-building` `banknote` `barcode` `bath-time` `beach-umbrella` `bed` `bedtime-story` `beer-mug` `bike` `bird` `birthday-cake` `blood-drop` `board-game` `boat` `book` `bookmark` `brain` `bread` `broom` `bubble-tea` `building-blocks` `burger` `bus` `cake` `calculator` `calendar` `campfire` `candle` `car` `carrot` `cart-minus` `cart-plus` `cat` `chart-down` `chart-pie` `chart-up` `chat-bubble` `chat-bubbles` `check-mark` `checkbox-empty` `checkbox-tick` `chef-hat` `chevron-down` `chevron-left` `chevron-right` `chevron-up` `chocolate` `chore-chart` `clipboard-list` `clock` `close-x` `cloud-rain` `clown-face` `coffee-cup` `coin` `coin-arrow-in` `coin-arrow-out` `coin-stack` `collapse-arrows` `compass` `contact-card` `contract-paper` `cooked-fish` `cookie` `cooking-pot` `copy-files` `corner-up-left` `corner-up-right` `couple` `credit-card` `crib` `cupcake` `dashboard-grid` `daughter` `delivery-box` `delivery-scooter` `delivery-truck` `diaper` `dining-table` `dog` `donut` `door` `download-cloud` `drag-handle` `drink-bottle` `dumbbell` `duplicate-squares` `edit-pencil` `egg` `envelope` `envelope-open` `eraser` `error-circle` `expand-arrows` `external-link` `eye-closed` `eye-open` `family` `family-picnic` `father` `file-doc` `filter-funnel` `fingerprint` `first-aid-kit` `fish-pet` `flag-deadline` `folder` `fuel-pump` `gear-settings` `gift-box` `gift-card` `globe-stand` `graduation-cap` `grandfather` `grandmother` `groceries-bag` `growth-chart` `hamburger-menu` `hand-coin` `handshake` `headset` `heart-pulse` `helmet` `help-circle` `hourglass` `house` `ice-cream` `inbox-tray` `info-circle` `invoice` `juice-box` `key-house` `key-round` `kick-scooter` `kitchen-stove` `kitchen-timer` `knife-fork` `life-buoy` `light-bulb` `link-chain` `loading-spinner` `log-in` `log-out` `lunch-box` `magnifying-glass` `mail-heart` `map` `map-pin` `meat-steak` `medal` `medical-cross` `medicine-bottle` `megaphone` `memory-frame` `microphone` `milk-carton` `minus-sign` `money-bag` `more-horizontal` `more-vertical` `mother` `motorbike` `mountain` `move-arrows` `movie-night` `music-note` `muted-bell` `napkin` `noodle-bowl` `notebook` `notification-dot` `pacifier` `padlock` `paint-brush` `palette` `pan` `paper-plane` `paper-stack` `parcel` `parcel-return` `parking-sign` `party-hat` `passport` `pencil` `pet-bowl` `phone-handset` `phone-pay` `photo-album` `piggy-bank` `pill` `pillow-fort` `pin-push` `pizza` `plane` `plant-pot` `plate` `plus-sign` `popcorn-bowl` `price-tag` `progress-ring` `purse` `puzzle-piece` `qr-code` `quote-bubble` `rabbit` `rattle` `receipt` `recipe-book` `refresh-arrow` `refrigerator` `reminder-bell` `resize-corner` `reward-star` `ribbon-tag` `rice-bowl` `ringing-bell` `road-sign` `rubber-duck` `ruler` `safe` `scale-balance` `school-building` `school-bus` `share-nodes` `shield-alert` `shield-check` `shopping-bag` `shopping-basket` `shopping-cart` `sidebar-layout` `sleep-moon` `snowflake` `soccer-ball` `sofa-heart` `son` `spoon-fork` `sprout` `star-rating` `stethoscope` `sticky-note` `stopwatch` `store` `stroller` `success-circle` `suitcase` `sun` `sun-cloud` `sushi` `sync-arrows` `syringe` `table-lamp` `tap-card` `taxi` `tea-cup` `teddy-bear` `tent` `thermometer` `thermostat` `ticket` `tiger` `toggle-switch` `tooth` `toy-basket` `toy-car` `traffic-light` `train` `trash-bin` `tree-coin` `trophy` `truck` `tv` `umbrella` `unlink-chain` `unlock` `upload-cloud` `user-profile` `users-group` `van` `video-camera` `vitamin` `wallet` `wardrobe` `warning-triangle` `washing-machine` `water-glass` `wine-glass` `wishlist-heart` `yoga-mat`

</details>

---

## Adding icons

```bash
# Drop PNG(s) into raw/ — source files, not committed
cp ~/Desktop/new-icon.png raw/

# Process: compress → resize → icons/new-icon/128.png + 512.png
python scripts/process_icons.py new-icon.png

# Commit the output
git add icons/new-icon/
git commit -m "feat: add new-icon"
```

To rebuild all icons (e.g. after changing quality settings):

```bash
python scripts/process_icons.py --force
```

## Publishing

```bash
# Bump version in packages/react/package.json
cd packages/react && npm version patch   # or minor / major

git push origin master --tags
# CI automatically: generates icon map → builds → publishes to npm
```

---

## License

MIT
