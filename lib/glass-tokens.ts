// Shared color tokens for the "holographic glass" visual direction.
// Single source of truth so every glass surface (project cards, carousel
// chrome, and future GlassPanel consumers) stays in sync — this file exists
// because duplicated literal values across components previously drifted out
// of sync with each other.
export const GLASS_EDGE = "rgba(140,230,255,0.3)"
export const GLASS_EDGE_BRIGHT = "rgba(150,245,255,0.8)"
export const GLASS_PANEL = "rgba(148,226,255,0.06)"
export const GLASS_CORNER_TICK = "rgba(148,226,255,0.14)"
export const GLASS_CYAN = "#00f0ff"
export const GLASS_INK = "#d9f6ff"
export const GLASS_DIM = "#7ea3b4"
export const GLASS_DIM_2 = "#4d6a78"
export const GLASS_VOID = "#050608"
export const GLASS_ACTIVE = "#5cffb0"
export const GLASS_ACTIVE_BORDER = "rgba(92,255,176,0.4)"
export const GLASS_AMBER = "#ff7a3d"
export const GLASS_AMBER_BORDER = "rgba(255,122,61,0.4)"

/** The two-layer background every glass surface shares: a diagonal specular sheen over the low-opacity panel fill. */
export const glassBackground = `linear-gradient(155deg, rgba(255,255,255,0.06), rgba(255,255,255,0) 45%), ${GLASS_PANEL}`
