export interface ErrorPageContentProps {
  // 'digest' is the generated hash of the error that was thrown.
  error?: Error & { digest?: string };

  // 'reset()' can be used to attempt to re-render this segment.
  reset?: () => void;
}
