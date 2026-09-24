# Project media

Put images (`.webp`, `.jpg`, `.png`) or videos (`.mp4`, `.webm`) in project folders, then list them in `src/lib/data.ts`:

```ts
media: [
  { src: "/projects/benchmark/1_time_vs_n.png", type: "image" },
  { src: "/projects/gym/demo.mp4", type: "video" },
],
```

Previews appear above the project text. Click to open a fullscreen lightbox; multiple items auto-rotate and support prev/next (also ← → / Esc).
