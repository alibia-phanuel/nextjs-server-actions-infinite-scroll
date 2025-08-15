import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Amazon CDN
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        port: "",
        pathname: "/**",
      },

      // Wikia / Fandom
      {
        protocol: "https",
        hostname: "static.wikia.nocookie.net",
        port: "",
        pathname: "/**",
      },

      // TMS
      {
        protocol: "https",
        hostname: "flxt.tmsimg.com",
        port: "",
        pathname: "/**",
      },

      // MyAnimeList
      {
        protocol: "https",
        hostname: "cdn.myanimelist.net",
        port: "",
        pathname: "/**",
      },

      // Shikimori
      {
        protocol: "https",
        hostname: "shikimori.one",
        port: "",
        pathname: "/**",
      },

      // Crunchyroll
      {
        protocol: "https",
        hostname: "img1.ak.crunchyroll.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "static.crunchyroll.com",
        port: "",
        pathname: "/**",
      },

      // The Movie Database (TMDB)
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/**",
      },

      // Anilist
      {
        protocol: "https",
        hostname: "s4.anilist.co",
        port: "",
        pathname: "/**",
      },

      // Kitsu
      {
        protocol: "https",
        hostname: "media.kitsu.io",
        port: "",
        pathname: "/**",
      },

      // Funimation
      {
        protocol: "https",
        hostname: "d33et77evd9bgg.cloudfront.net",
        port: "",
        pathname: "/**",
      },

      // Netflix assets
      {
        protocol: "https",
        hostname: "occ-0-3933-3933.1.nflxso.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "artworks.thetvdb.com",
        port: "",
        pathname: "/**",
      },

      // Autres possibles
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/**",
      },
      { protocol: "https", hostname: "i.redd.it", port: "", pathname: "/**" },
    ],
  },
};

export default nextConfig;
