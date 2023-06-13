import { renderHook } from '@testing-library/react'
import { useTruncatedText } from "./useTruncatedText"

describe("useTruncatedText", () => {
  it("returns the tail and truncated text", () => {
    const text = "Hello, world!"
    const tailLength = 6

    const { result } = renderHook(() => useTruncatedText(text, tailLength))

    expect(result.current).toEqual({
      tail: "world!",
      truncated: "Hello, "
    })
  })

  it("handles text shorter than the tail length", () => {
    const text = "Hi"
    const tailLength = 6

    const { result } = renderHook(() => useTruncatedText(text, tailLength))

    expect(result.current).toEqual({
      tail: "Hi",
      truncated: ""
    })
  })

  it("handles empty text", () => {
    const text = ""
    const tailLength = 6

    const { result } = renderHook(() => useTruncatedText(text, tailLength))

    expect(result.current).toEqual({
      tail: "",
      truncated: ""
    })
  })
})
