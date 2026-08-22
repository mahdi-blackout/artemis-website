// Single source of truth for the deployed site's absolute URL. The static
// export is served under a GitHub Pages project subpath with
// trailingSlash: true (see next.config.ts), so every canonical/OG URL needs
// to match that exact shape — otherwise crawlers see a canonical pointing at
// a URL that doesn't match what's actually served/linked.
export const SITE_URL = "https://mahdi-blackout.github.io/artemis-website";

export function absoluteUrl(path = "") {
  const clean = path.replace(/^\/+|\/+$/g, "");
  return clean ? `${SITE_URL}/${clean}/` : `${SITE_URL}/`;
}

// For real files (images, etc.) rather than routed pages — no trailing
// slash, since that would turn e.g. ".../photo.png" into the (nonexistent)
// ".../photo.png/".
export function absoluteAssetUrl(path: string) {
  return `${SITE_URL}/${path.replace(/^\/+/, "")}`;
}

// Next.js does NOT deep-merge `openGraph`/`twitter` between a layout and a
// page — a page that sets its own `openGraph` fully replaces the parent's,
// so every page-level openGraph needs to re-supply siteName/type/images
// itself or those silently disappear from that page's social preview.
export const DEFAULT_OG_IMAGE = {
  url: absoluteAssetUrl("images/hero/mustakim-live-wide.png"),
  width: 1672,
  height: 941,
  alt: "Mustakim Al Mahdi performing live",
};

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const url = absoluteUrl(path);
  const ogTitle = `${title} | Artemis Production`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: ogTitle,
      description,
      url,
      type: "website" as const,
      siteName: "Artemis Production",
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: ogTitle,
      description,
      images: [DEFAULT_OG_IMAGE.url],
    },
  };
}
