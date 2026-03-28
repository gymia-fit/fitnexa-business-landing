const crypto = require('crypto');

/**
 * Generate secure random secrets for GitHub Actions
 * Run with: node generate-secrets.js
 */

function generateSecret(length = 64) {
  return crypto.randomBytes(length).toString('base64');
}

function generateHexSecret(length = 32) {
  return crypto.randomBytes(length).toString('hex');
}

console.log('=== Fitnexa Platform Secrets Generator ===\n');

const jwtSecret = generateSecret(48);
const serviceSecret = generateSecret(48);
const jwtSecretHex = generateHexSecret(32);
const serviceSecretHex = generateHexSecret(32);

console.log('📋 Base64 Encoded (recommended):');
console.log('┌─────────────────────────────────────────────────────────────────┐');
console.log(`│ JWT_SECRET="${jwtSecret}"`);
console.log(`│ SERVICE_SECRET="${serviceSecret}"`);
console.log('└─────────────────────────────────────────────────────────────────┘');

console.log('\n📋 Hex Encoded (alternative):');
console.log('┌─────────────────────────────────────────────────────────────────┐');
console.log(`│ JWT_SECRET="${jwtSecretHex}"`);
console.log(`│ SERVICE_SECRET="${serviceSecretHex}"`);
console.log('└─────────────────────────────────────────────────────────────────┘');

console.log('\n🔐 GitHub CLI Commands:');
console.log('┌─────────────────────────────────────────────────────────────────┐');
console.log(`│ gh secret set JWT_SECRET --body="${jwtSecret}" --repo=gymia-fit/fitnexa-business-landing`);
console.log(`│ gh secret set SERVICE_SECRET --body="${serviceSecret}" --repo=gymia-fit/fitnexa-business-landing`);
console.log('└─────────────────────────────────────────────────────────────────┘');

console.log('\n💡 Save these secrets securely! They cannot be recovered if lost.\n');
