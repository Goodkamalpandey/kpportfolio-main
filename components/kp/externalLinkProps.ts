/** Use on every off-site `https?://` anchor for new-tab + tab-nabbing safety. */
export const externalLinkProps = {
  target: '_blank' as const,
  rel: 'noopener noreferrer' as const,
}
