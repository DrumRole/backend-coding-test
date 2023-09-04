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

## Structures

```bash
.
├ app               # Next.js app directory
├ lib               # 各種ライブラリのコードを配置するディレクトリ
  └ prisma.ts       # Prismaクライアントの初期化・exportするファイル
└ prisma            # 実行時に不要なPrismaのファイル群
  ├ schema.prisma   # Prismaのスキーマファイル
  └ seed.ts         # Seed用のスクリプト
```
