#!/usr/bin/env python3
"""
Workflow: raw/*.png → compress → resize → icons/{name}/128.png + 512.png
Usage:
  python scripts/process_icons.py                        # process all unbuilt icons in raw/
  python scripts/process_icons.py apple.png arrow.png   # process specific files
  python scripts/process_icons.py --force                # rebuild everything
"""

import sys
import subprocess
from pathlib import Path
from PIL import Image

RAW_DIR = Path("raw")
OUT_DIR = Path("icons")
SIZES = [128, 512]
PNGQUANT_QUALITY = "85-95"


def compress(src: Path, dst: Path):
    """Lossy compression via pngquant at ~85-95 quality."""
    result = subprocess.run(
        [
            "pngquant",
            "--quality", PNGQUANT_QUALITY,
            "--force",
            "--output", str(dst),
            str(src),
        ],
        capture_output=True,
    )
    if result.returncode not in (0, 98):  # 98 = already optimized
        raise RuntimeError(f"pngquant failed: {result.stderr.decode()}")


def resize(src: Path, dst: Path, size: int):
    """Resize to size x size, preserving transparency, using LANCZOS."""
    img = Image.open(src).convert("RGBA")
    img = img.resize((size, size), Image.LANCZOS)
    img.save(dst, format="PNG", optimize=True)


def process(raw_file: Path, force: bool = False):
    name = raw_file.stem  # "apple.png" → "apple"
    icon_dir = OUT_DIR / name

    if not force and all((icon_dir / f"{s}.png").exists() for s in SIZES):
        print(f"  ↷ {name} already exists, skipping")
        return

    icon_dir.mkdir(parents=True, exist_ok=True)

    tmp = icon_dir / "_tmp.png"
    compress(raw_file, tmp)

    for size in SIZES:
        out = icon_dir / f"{size}.png"
        resize(tmp, out, size)
        print(f"  ✓ {name}/{size}.png")

    tmp.unlink()


def main():
    args = sys.argv[1:]
    force = "--force" in args
    file_args = [a for a in args if not a.startswith("--")]

    if file_args:
        files = [RAW_DIR / f for f in file_args]
    else:
        files = sorted(RAW_DIR.glob("*.png"))

    if not files:
        print("No PNG files found in raw/")
        return

    print(f"Processing {len(files)} icon(s)..." + (" [force]" if force else ""))
    for f in files:
        if not f.exists():
            print(f"  ✗ {f.name} not found, skipping")
            continue
        print(f"→ {f.name}")
        process(f, force=force)

    print(f"\nDone. Output: icons/")


if __name__ == "__main__":
    main()
