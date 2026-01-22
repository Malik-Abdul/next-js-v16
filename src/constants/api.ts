/**
 * API Configuration and URL Builders
 * 
 * Base URL is configured via environment variable NEXT_PUBLIC_API_BASE_URL
 * Defaults to http://localhost:4500 if not set
 */

// Get base URL from environment variable or use default
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL as string;

// API Endpoints
export const API_ENDPOINTS = {
  USERS: "/users",
  USERS_FIFTY: "/UsersFifty",
} as const;

/**
 * Build a URL with query parameters
 * @param endpoint - The API endpoint (e.g., "/users")
 * @param params - Object with query parameters
 * @returns Complete URL with query string
 */
export const buildApiUrl = (
  endpoint: string,
  params?: Record<string, string | number | undefined>
): string => {
  const url = new URL(endpoint, API_BASE_URL);
  
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        url.searchParams.append(key, String(value));
      }
    });
  }
  
  return url.toString();
};

/**
 * Build users API URL with common query parameters
 * @param options - Query parameters for users endpoint
 * @returns Complete users API URL
 */
export const buildUsersUrl = (options?: {
  salary_gte?: number;
  salary_lte?: number;
  city_like?: string;
  _page?: number;
  _limit?: number;
  [key: string]: string | number | undefined;
}): string => {
  return buildApiUrl(API_ENDPOINTS.USERS, options);
};

/**
 * Common pre-built URLs (for convenience)
 */
export const USERS_URLS = {
  // Default salary range used in multiple components
  SALARY_RANGE_51000_51500: buildUsersUrl({
    salary_gte: 51000,
    salary_lte: 51500,
  }),
  
  // Other common ranges
  SALARY_RANGE_50000_60000: buildUsersUrl({
    salary_gte: 50000,
    salary_lte: 60000,
  }),
  
  // Base users endpoint
  BASE: buildApiUrl(API_ENDPOINTS.USERS),
} as const;
