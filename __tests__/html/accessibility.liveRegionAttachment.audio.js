/**
 * @jest-environment ./__tests__/html/__jest__/WebChatEnvironment.js
 */

describe('accessibility requirement', () => {
  describe('attachments in live region', () => {
    test('audio', () => runHTMLTest('accessibility.liveRegionAttachment.audio.html'));
  });
});
