/** @type {import('next').NextConfig} */

// When building in GitHub Actions for GitHub Pages, the site is served from
// https://<user>.github.io/<repo>/ instead of the domain root, so every
// asset/link needs to be prefixed with "/<repo>". GITHUB_REPOSITORY is set
// automatically by GitHub Actions as "<owner>/<repo>" — no manual editing
// needed when the repo name changes.
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
let basePath = "";
let assetPrefix = "";

if (isGithubActions && process.env.GITHUB_REPOSITORY) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");
  // Skip the basePath for user/organization pages (repo named <user>.github.io)
  if (!repo.endsWith(".github.io")) {
    basePath = `/${repo}`;
    assetPrefix = `/${repo}/`;
  }
}

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix,
  env: {
    // Exposed to the browser so plain <img>/<video> src attributes (which,
    // unlike next/link and next/image, are NOT auto-prefixed by Next.js)
    // can still resolve correctly when the site is served from a
    // GitHub Pages project subpath such as /repo-name/.
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;
