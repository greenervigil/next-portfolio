/**
 * Spam detection utilities for contact forms
 */

// Common spam keywords
const SPAM_KEYWORDS = [
  "crypto",
  "bitcoin",
  "investment",
  "loan",
  "casino",
  "viagra",
  "pharmacy",
  "poker",
  "casino",
  "lottery",
  "winner",
  "prize",
  "click here",
  "buy now",
  "limited time",
  "act now",
  "urgent",
  "guaranteed",
  "free money",
  "work from home",
  "make money fast",
  "get rich",
]

// Disposable email domains (common ones)
const DISPOSABLE_EMAIL_DOMAINS = [
  "tempmail.com",
  "10minutemail.com",
  "guerrillamail.com",
  "mailinator.com",
  "throwaway.email",
  "temp-mail.org",
  "getnada.com",
  "mohmal.com",
]

/**
 * Check if text contains repeated characters (e.g., "aaaaaa", "111111")
 */
function hasRepeatedCharacters(text: string, minRepeat = 5): boolean {
  const regex = new RegExp(`(.)\\1{${minRepeat},}`, "i")
  return regex.test(text)
}

/**
 * Check if text is mostly random characters (low word-to-character ratio)
 */
function isRandomString(text: string): boolean {
  // Remove whitespace and count words
  const words = text.trim().split(/\s+/).filter((word) => word.length > 0)
  const characters = text.replace(/\s/g, "").length

  // If very few words compared to characters, likely random string
  if (words.length === 0) return true
  if (characters > 20 && words.length < 3) return true

  // Check word-to-character ratio (should be at least 1 word per 10 chars for meaningful text)
  const ratio = words.length / characters
  return ratio < 0.1 && characters > 30
}

/**
 * Check if text has minimum word diversity (not just repeating the same word)
 */
function hasWordDiversity(text: string, minUniqueWords = 3): boolean {
  const words = text
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 2) // Ignore very short words

  if (words.length < minUniqueWords) return false

  const uniqueWords = new Set(words)
  return uniqueWords.size >= minUniqueWords
}

/**
 * Check if text contains spam keywords
 */
function containsSpamKeywords(text: string): boolean {
  const lowerText = text.toLowerCase()
  return SPAM_KEYWORDS.some((keyword) => lowerText.includes(keyword))
}

/**
 * Check if email is from a disposable email service
 */
function isDisposableEmail(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase()
  if (!domain) return false
  return DISPOSABLE_EMAIL_DOMAINS.some((disposable) => domain.includes(disposable))
}

/**
 * Check if text looks like gibberish (random characters, no structure)
 */
function isGibberish(text: string): boolean {
  // Check for excessive special characters
  const specialCharRatio = (text.match(/[^a-zA-Z0-9\s]/g) || []).length / text.length
  if (specialCharRatio > 0.3 && text.length > 20) return true

  // Check for patterns like "asdfgh" or "qwerty"
  const keyboardPatterns = [
    /qwerty/i,
    /asdfgh/i,
    /zxcvbn/i,
    /abcdef/i,
    /123456/i,
    /abcdefgh/i,
  ]
  if (keyboardPatterns.some((pattern) => pattern.test(text))) return true

  return false
}

/**
 * Validate message content quality
 */
export function validateMessageQuality(message: string): {
  isValid: boolean
  reason?: string
} {
  // Check minimum word count (not just characters)
  const words = message.trim().split(/\s+/).filter((w) => w.length > 0)
  if (words.length < 5) {
    return { isValid: false, reason: "Message must contain at least 5 words" }
  }

  // Check for repeated characters
  if (hasRepeatedCharacters(message)) {
    return { isValid: false, reason: "Message contains suspicious patterns" }
  }

  // Check if it's a random string
  if (isRandomString(message)) {
    return { isValid: false, reason: "Message appears to be random text" }
  }

  // Check word diversity
  if (!hasWordDiversity(message, 3)) {
    return { isValid: false, reason: "Message lacks sufficient word variety" }
  }

  // Check for gibberish
  if (isGibberish(message)) {
    return { isValid: false, reason: "Message contains invalid patterns" }
  }

  // Check for spam keywords
  if (containsSpamKeywords(message)) {
    return { isValid: false, reason: "Message contains prohibited content" }
  }

  return { isValid: true }
}

/**
 * Validate business name quality (if provided)
 */
export function validateBusinessQuality(business: string): {
  isValid: boolean
  reason?: string
} {
  if (!business || business.trim().length === 0) {
    return { isValid: true } // Optional field
  }

  // Check for repeated characters
  if (hasRepeatedCharacters(business)) {
    return { isValid: false, reason: "Business name contains suspicious patterns" }
  }

  // Check if it's a random string
  if (isRandomString(business)) {
    return { isValid: false, reason: "Business name appears to be random text" }
  }

  // Check for gibberish
  if (isGibberish(business)) {
    return { isValid: false, reason: "Business name contains invalid patterns" }
  }

  // Check for spam keywords
  if (containsSpamKeywords(business)) {
    return { isValid: false, reason: "Business name contains prohibited content" }
  }

  return { isValid: true }
}

/**
 * Validate email quality
 */
export function validateEmailQuality(email: string): {
  isValid: boolean
  reason?: string
} {
  // Check for disposable emails
  if (isDisposableEmail(email)) {
    return { isValid: false, reason: "Disposable email addresses are not allowed" }
  }

  return { isValid: true }
}

/**
 * Comprehensive spam check for contact form data
 */
export function checkForSpam(data: {
  message: string
  business?: string
  email: string
}): {
  isSpam: boolean
  reason?: string
} {
  // Check email
  const emailCheck = validateEmailQuality(data.email)
  if (!emailCheck.isValid) {
    return { isSpam: true, reason: emailCheck.reason }
  }

  // Check message
  const messageCheck = validateMessageQuality(data.message)
  if (!messageCheck.isValid) {
    return { isSpam: true, reason: messageCheck.reason }
  }

  // Check business if provided
  if (data.business) {
    const businessCheck = validateBusinessQuality(data.business)
    if (!businessCheck.isValid) {
      return { isSpam: true, reason: businessCheck.reason }
    }
  }

  return { isSpam: false }
}

