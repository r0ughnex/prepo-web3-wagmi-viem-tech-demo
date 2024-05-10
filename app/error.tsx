"use client";

import { PageLayout } from "@/components/layout/PageLayout";
import {
  ErrorPageContent,
  ErrorPageContentProps as ErrorPageProps,
} from "@/components/pages/ErrorPageContent";
import { APP_METADATA } from "@/constants";
import { Metadata } from "next";

const title = `${APP_METADATA.title} | An error occurred`;
export const metadata: Metadata = {
  ...APP_METADATA,
  title,
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <PageLayout>
      <ErrorPageContent error={error} reset={reset} />
    </PageLayout>
  );
}
