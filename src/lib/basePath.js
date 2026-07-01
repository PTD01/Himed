// Needed so asset paths still resolve when served from a GitHub Pages subpath.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function withBasePath(path) {
  if (!path) return path;
  return `${basePath}${path}`;
}
