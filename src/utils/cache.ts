/**
 * Browser-side cache for GitHub content fetches
 * Stores content in localStorage with TTL (5-15 minutes)
 */

const CACHE_KEY_PREFIX = "github-content-cache:";
const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes default

interface CacheEntry {
  data: string;
  timestamp: number;
}

/**
 * Get cached content from browser storage
 */
export function getCachedContent(key: string): string | null {
  if (typeof window === "undefined" || typeof localStorage === "undefined") {
    return null;
  }

  try {
    const cached = localStorage.getItem(CACHE_KEY_PREFIX + key);
    if (!cached) return null;

    const entry: CacheEntry = JSON.parse(cached);
    const age = Date.now() - entry.timestamp;

    if (age > CACHE_TTL_MS) {
      localStorage.removeItem(CACHE_KEY_PREFIX + key);
      return null;
    }

    return entry.data;
  } catch (error) {
    console.error("Error reading cache:", error);
    return null;
  }
}

/**
 * Store content in browser cache
 */
export function setCachedContent(key: string, data: string): void {
  if (typeof window === "undefined" || typeof localStorage === "undefined") {
    return;
  }

  try {
    const entry: CacheEntry = {
      data,
      timestamp: Date.now(),
    };
    localStorage.setItem(CACHE_KEY_PREFIX + key, JSON.stringify(entry));
  } catch (error) {
    console.error("Error writing cache:", error);
  }
}

/**
 * Fetch with caching layer
 */
export async function fetchWithCache(url: string): Promise<string> {
  const cacheKey = new URL(url).pathname;
  const cached = getCachedContent(cacheKey);

  if (cached) {
    return cached;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const content = await response.text();
    setCachedContent(cacheKey, content);
    return content;
  } catch (error) {
    console.error(`Failed to fetch ${url}:`, error);
    throw error;
  }
}

/**
 * Clear all cache
 */
export function clearCache(): void {
  if (typeof window === "undefined" || typeof localStorage === "undefined") {
    return;
  }

  try {
    const keys = Object.keys(localStorage);
    keys.forEach((key) => {
      if (key.startsWith(CACHE_KEY_PREFIX)) {
        localStorage.removeItem(key);
      }
    });
  } catch (error) {
    console.error("Error clearing cache:", error);
  }
}

/**
 * Get cache size info
 */
export function getCacheInfo(): { size: number; entries: number } {
  if (typeof window === "undefined" || typeof localStorage === "undefined") {
    return { size: 0, entries: 0 };
  }

  try {
    let size = 0;
    let entries = 0;

    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith(CACHE_KEY_PREFIX)) {
        size += key.length + localStorage.getItem(key)!.length;
        entries++;
      }
    });

    return { size, entries };
  } catch (error) {
    console.error("Error getting cache info:", error);
    return { size: 0, entries: 0 };
  }
}
