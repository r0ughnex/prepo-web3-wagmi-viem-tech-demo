import { APP_METADATA } from "@/constants";
import { Metadata } from "next";

const title = `${APP_METADATA.title} | Home | Pradeep`;
export const metadata: Metadata = {
  ...APP_METADATA,
  title,
};

export default function HomePage() {
  return null;
}
