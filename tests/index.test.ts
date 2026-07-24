import { describe, it, expect } from 'vitest';
import { detectDRM } from '../src/index.js';

describe('stream-drm-checker', () => {
  it('should detect Widevine DRM presence in headers', () => {
    expect(detectDRM({ 'X-DRM-TYPE': 'com.widevine.alpha' })).toBe('Widevine');
    expect(detectDRM({ 'Content-Type': 'application/json' })).toBe('None');
  });
});