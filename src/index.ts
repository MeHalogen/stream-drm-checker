export function detectDRM(headers: Record<string, string>): 'Widevine' | 'FairPlay' | 'PlayReady' | 'ClearKey' | 'None' {
  for (const [key, value] of Object.entries(headers)) {
    const k = key.toLowerCase();
    const val = String(value).toLowerCase();
    if (k.includes('widevine') || val.includes('com.widevine.alpha')) return 'Widevine';
    if (k.includes('fairplay') || val.includes('com.apple.fps')) return 'FairPlay';
    if (k.includes('playready') || val.includes('com.microsoft.playready')) return 'PlayReady';
    if (k.includes('clearkey') || val.includes('org.w3.clearkey')) return 'ClearKey';
  }
  return 'None';
}