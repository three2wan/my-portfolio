import type { IntentResponse } from "../types";
import { FALLBACK_RESPONSE, RESPONSES } from "../data/responses";

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function keywordMatches(keyword: string, input: string): boolean {
  const pattern = new RegExp(`\\b${escapeRegExp(keyword)}\\b`, "i");
  return pattern.test(input);
}

export function matchIntent(input: string): IntentResponse {
  const normalized = input.toLowerCase().trim();
  if (!normalized) return FALLBACK_RESPONSE;

  for (const response of RESPONSES) {
    if (
      response.keywords.some((keyword) => keywordMatches(keyword, normalized))
    ) {
      return response;
    }
  }
  return FALLBACK_RESPONSE;
}
