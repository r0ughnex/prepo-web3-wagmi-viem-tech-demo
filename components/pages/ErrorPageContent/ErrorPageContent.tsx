"use client";

import { Container } from "@/components/layout/Container";
import { HeroSection } from "@/components/ui/HeroSection";
import { APP_METADATA } from "@/constants";
import { useEffect } from "react";
import { ErrorPageContentProps } from "./types";

export function ErrorPageContent({ error }: ErrorPageContentProps) {
  const hasErrorMessage = !!error?.message?.length;

  useEffect(() => {
    // Log the 'error' that triggered this to render.
    hasErrorMessage && console.error(error.message);
  }, [hasErrorMessage, error?.message]);

  return (
    <Container>
      <HeroSection title="An error occurred">
        {APP_METADATA.description}
      </HeroSection>
    </Container>
  );
}
