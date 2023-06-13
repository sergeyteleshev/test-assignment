import { useMemo } from "react"

export const useTruncatedText = (text: string, tailLength: number) => {
    const tail = text.substring(text.length - tailLength)
    const truncated = text.substring(0, text.length - tail.length)

    return useMemo(() => ({tail, truncated}), [tail, truncated])
}