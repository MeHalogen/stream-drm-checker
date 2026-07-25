# stream-drm-checker

Inspect HTTP response headers to identify DRM configurations (Widevine, FairPlay, PlayReady) and catalog playback metadata for streaming systems.

## Features

- Evaluates headers case-insensitively for DRM identification tags.
- Detects Widevine, FairPlay, PlayReady, and ClearKey parameters.
- Ideal for streaming compliance analytics.

## Installation

```bash
npm install stream-drm-checker
```

## Usage

```typescript
import { detectDRM } from 'stream-drm-checker';

// Evaluate response headers
const drm = detectDRM({
  'X-DRM-TYPE': 'com.widevine.alpha',
  'Content-Type': 'application/dash+xml'
});
console.log('DRM Protocol:', drm);
// Output: 'Widevine'
```

## API Reference

### detectDRM(headers)

Parses an object of response headers.

**Parameters:**
- `headers`: `Record<string, string>`

**Returns:** `'Widevine' | 'FairPlay' | 'PlayReady' | 'ClearKey' | 'None'`

## License

MIT
