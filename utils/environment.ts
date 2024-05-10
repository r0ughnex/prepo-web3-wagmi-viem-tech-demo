export enum NodeEnv {
  Development = "development",
  Production = "production",
  Test = "test",
}

const PORT = process.env.PORT || 3000;
const VERCEL_URL = process.env.VERCEL_URL;
const PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export function getBaseUrl() {
  if (PUBLIC_BASE_URL || VERCEL_URL) {
    return `https://${PUBLIC_BASE_URL || VERCEL_URL}`;
  }

  return `http://localhost:${PORT}`;
}

export function isModeDev() {
  return process.env.NODE_ENV === NodeEnv.Development;
}

export function isModeProd() {
  return process.env.NODE_ENV === NodeEnv.Production;
}

export function isModeTest() {
  return process.env.NODE_ENV === NodeEnv.Test;
}
