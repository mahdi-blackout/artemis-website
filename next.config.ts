import type { NextConfig } from "next";

// Only the GitHub Pages deploy needs a subpath (it's a project site served at
// github.io/artemis-website); Cloudflare Pages and local dev serve from the
// domain root. Driven by an explicit env var (set in the GitHub Actions
// workflow) rather than NODE_ENV, since Cloudflare Pages builds also run
// with NODE_ENV=production and would otherwise get the wrong basePath.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/artemis-website" : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
