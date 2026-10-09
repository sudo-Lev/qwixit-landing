import { agentContextText } from "@/lib/agent-context";

export function GET() {
  return new Response(agentContextText, {
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
