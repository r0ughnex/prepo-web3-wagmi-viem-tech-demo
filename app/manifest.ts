import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "prePO Tech Demo",
    description:
      "A simple demo built by Pradeep, to showcase transfer of a custom ERC-20 token, to a specified wallet on Holesky testnet.",
    icons: [
      {
        src: "/favicons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    background_color: "#0C0A09",
    theme_color: "#6264d9",
    display: "standalone",
  };
}
