export type VideoEmbed = {
  provider: "youtube" | "facebook";
  embedUrl: string;
};

function extractYouTubeId(url: URL): string | null {
  if (url.hostname.includes("youtu.be")) {
    return url.pathname.slice(1).split("/")[0] || null;
  }
  if (url.hostname.includes("youtube.com")) {
    const v = url.searchParams.get("v");
    if (v) return v;
    const embedMatch = url.pathname.match(/\/embed\/([^/?]+)/);
    if (embedMatch) return embedMatch[1];
  }
  return null;
}

export function toVideoEmbed(rawUrl: string): VideoEmbed | null {
  const url = new URL(rawUrl);

  if (url.hostname.includes("youtube.com") || url.hostname.includes("youtu.be")) {
    const id = extractYouTubeId(url);
    return id ? { provider: "youtube", embedUrl: `https://www.youtube.com/embed/${id}` } : null;
  }

  if (url.hostname.includes("facebook.com")) {
    return {
      provider: "facebook",
      embedUrl: `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(rawUrl)}&show_text=false`,
    };
  }

  return null;
}
