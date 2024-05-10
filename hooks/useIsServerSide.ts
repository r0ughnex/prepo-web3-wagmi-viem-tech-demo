import { useEffect, useState } from "react";

// Custom hook to determine if rendering on the server or client.
export function useIsServerSide() {
  const [isServerSide, setIsServerSide] = useState(true);
  const isClientSide = !isServerSide;

  useEffect(() => {
    // Only available on client-side.
    if (typeof window !== "undefined") {
      setIsServerSide(false);
    }
  }, []);

  return {
    isServerSide,
    isClientSide,
  };
}
