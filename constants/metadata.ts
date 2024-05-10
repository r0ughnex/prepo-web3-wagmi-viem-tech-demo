import { getBaseUrl } from "@/utils";
import { Metadata } from "next";

interface ShareImage {
  url: string;
  width: number;
  height: number;
}

export const SHARE_IMAGE: Readonly<ShareImage> = {
  // @TODO: Replace the 'og-image' screen, once the challenge is complete.
  url: "/screens/prepo-web3-wagmi-viem-tech-demo_og-image_home_1600x900.png",
  width: 1600,
  height: 900,
};

const DEFAULT_METADATA = {
  title: "prePO Tech Demo",
  description:
    "A simple demo built by Pradeep, to showcase transfer of a custom ERC-20 token, to a specified wallet on Holesky testnet.",
  metadataBase: new URL(getBaseUrl()),
} as const;

export const APP_METADATA: Readonly<Partial<Metadata>> = {
  ...DEFAULT_METADATA,
  // Metadata API interface for generating social graph.
  openGraph: {
    ...DEFAULT_METADATA,
    images: [SHARE_IMAGE],
    siteName: "prePO Tech Demo",
  },
  twitter: {
    ...DEFAULT_METADATA,
    images: [SHARE_IMAGE.url],
    card: "summary_large_image",
  },
  // Metadata API interface for generating favicons.
  icons: {
    apple: [
      {
        url: "/favicons/apple-touch-icon.png",
        rel: "apple-touch-icon",
        sizes: "180x180",
      },
    ],
    icon: [
      {
        url: "/favicons/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
        rel: "icon",
      },
      {
        url: "/favicons/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
        rel: "icon",
      },
    ],
  },
};
