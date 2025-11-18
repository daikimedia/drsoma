import { useEffect, useState } from "react";

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const YOUTUBE_CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

interface YoutubeApiItem {
  id: { kind: string; videoId: string };
  snippet: { title: string; thumbnails: { medium: { url: string } } };
}

export interface YoutubeVideo {
  id: string;
  title: string;
  thumbnail: string;
}

export default function useYoutubeVideos(maxResults = 25) {
  const [videos, setVideos] = useState<YoutubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchVideos() {
      setLoading(true);
      setError(null);
      try {
        const url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${YOUTUBE_CHANNEL_ID}&part=snippet,id&order=date&maxResults=${maxResults}`;
        const res = await fetch(url);
        const data = await res.json();
        if (data.error) throw new Error(data.error.message);
        const vids = (data.items || [])
          .filter((item: YoutubeApiItem) => item.id.kind === "youtube#video")
          .map((item: YoutubeApiItem) => ({
            id: item.id.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.medium.url,
          }));
        setVideos(vids);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Failed to fetch videos");
      } finally {
        setLoading(false);
      }
    }
    fetchVideos();
  }, [maxResults]);

  return { videos, loading, error };
} 