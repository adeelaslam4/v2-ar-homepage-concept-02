/** Client's own photographs (her current site's CDN) served via /api/img — see V1 for the route. */
const IDS = {
  portraitSeated: "3195269a-eddf-46c7-b0d6-981cdc609772", // #16 — seated on lit steps
  portraitStanding: "a7575508-68c1-49b2-b8d6-c8360682f496", // #1 — standing, flat background
  lobby: "72d7ff4b-52f9-41a9-8728-164ea265c5fd", // #5 — hotel lobby, landscape
  corridor: "320ad240-ef27-45a9-a3f1-24ddcb52268c", // #9 — corridor, chandelier
  vanity: "e78b2c91-0a33-4395-a042-aa26a90fdc87", // #2 — dressing table
};

export const img = (id: string, w = 1400, ar = "4:5", grade: "mono" | "portrait" | "warm" | "" = "") =>
  `/api/img/${id}?w=${w}&ar=${ar}${grade ? `&grade=${grade}` : ""}`;

export const PHOTOS = {
  heroPortrait: img(IDS.portraitSeated, 1400, "4:5", "portrait"),
  founder: img(IDS.portraitStanding, 1200, "4:5", "portrait"),
  approach: img(IDS.lobby, 1600, "16:10", "mono"),
  corridor: img(IDS.corridor, 1200, "4:5", "mono"),
};
