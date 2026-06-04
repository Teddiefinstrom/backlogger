
export const defaultTheme = {
  id: 'default',
  name: 'Dark',
  fonts: {
    display: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
  },
  radius: {
    card: '12px',
    button: '8px',
    pill: '999px',
  },
  colors: {
    bgBase:      '#0d0f14',
    bgSurface:   '#161920',
    bgElevated:  '#1e2230',
    accent:      '#4f8ef7',
    accentText:  '#ffffff',
    textPrimary: '#f0f2f8',
    textMuted:   '#6b7280',
    border:      '#2a2d3a',
  },
}

export type Theme = typeof defaultTheme