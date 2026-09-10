"use client";

import { useEffect } from "react";
import Script from "next/script";

export function InstagramEmbed({ url }: { url: string }) {
  useEffect(() => {
    // Tell the Instagram script to process the embeds
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [url]);

  return (
    <div className="instagram-container flex justify-center w-full">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={`${url}?utm_source=ig_embed&amp;utm_campaign=loading`}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: "3px",
          boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: "1px",
          maxWidth: "540px",
          minWidth: "326px",
          padding: 0,
          width: "99.375%",
        }}
      ></blockquote>
      <Script src="//www.instagram.com/embed.js" strategy="lazyOnload" />
    </div>
  );
}

// Add TypeScript declaration for window.instgrm
declare global {
  interface Window {
    instgrm?: any;
  }
}
