import { PageLayout } from "@/components/layout/PageLayout";
import { NotFoundPageContent } from "@/components/pages/NotFoundPageContent";
import { APP_METADATA } from "@/constants";
import { Metadata } from "next";

const title = `${APP_METADATA.title} | Page not found`;
export const metadata: Metadata = {
  ...APP_METADATA,
  title,
};

export default function NotFoundPage() {
  return (
    <PageLayout>
      <NotFoundPageContent />
    </PageLayout>
  );
}
