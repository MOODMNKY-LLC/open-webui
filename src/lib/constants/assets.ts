export const ASSETS = {
  FAVICON: '/static/favicon.png',
  DEFAULT_USER: '/static/user.png',
  DEFAULT_MODEL: '/static/favicon.png',
  LOGO: '/static/logo.png'
} as const;

export const SUPPORTED_IMAGE_TYPES = [
  'image/gif',
  'image/webp',
  'image/jpeg', 
  'image/png',
  'image/svg+xml'
] as const; 