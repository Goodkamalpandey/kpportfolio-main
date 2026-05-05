/**
 * Remove .next and webpack cache with retries (Windows EBUSY / EPERM).
 */
const fs = require('fs')
const path = require('path')

function sleepSync(ms) {
  const end = Date.now() + ms
  while (Date.now() < end) {
    /* spin */
  }
}

function rmRetry(dir, max = 10) {
  const abs = path.resolve(dir)
  if (!fs.existsSync(abs)) return
  for (let i = 0; i < max; i++) {
    try {
      fs.rmSync(abs, { recursive: true, force: true })
      return
    } catch (e) {
      const code = e && e.code
      if ((code === 'EBUSY' || code === 'EPERM' || code === 'ENOTEMPTY') && i < max - 1) {
        sleepSync(250 * (i + 1))
        continue
      }
      console.warn(`[clean] Could not fully remove ${dir}: ${e.message}`)
      return
    }
  }
}

;['.next', path.join('node_modules', '.cache')].forEach(rmRetry)
