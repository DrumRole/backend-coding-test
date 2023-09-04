## Overview

`Next.js` と `prisma` を使用したプロジェクトです。

## Quickstart

このプロジェクトの動作は以下で行えます。

```bash
# Start mysql container
$ docker compose up -d

# Install libraries
$ pnpm i

# Apply schemas
$ pnpm prisma db push
# Seed
$ pnpm prisma db seed
# Generate schemas
$ pnpm prisma generate

# Start dev server
$ pnpm run dev
```

もし DB の内容をリセットしたい場合は seed と同じコマンドで行えます

```bash
$ pnpm prisma db seed
```

## Install 済みのライブラリ

- Next.js
- prisma
- zod
- ts-node
