import { updateClipboard } from "./clipboardHelper";

const clipboardMock = {
    writeText: jest.fn()
};

describe('update clipboard', () => {
  test('should call navigator.clipboard.writeText with the newClip argument', () => {
    const newClip = 'Hello, world!';

    Object.defineProperty(global.navigator, 'clipboard', {
      value: clipboardMock,
      configurable: true
    });

    updateClipboard(newClip);

    expect(clipboardMock.writeText).toHaveBeenCalledWith(newClip);
  });
});