import { RichText as RichTextConverter } from '@payloadcms/richtext-lexical/react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import React from 'react'

type Props = {
  data: SerializedEditorState
} & React.HTMLAttributes<HTMLDivElement>

export function RichText(props: Props) {
  const { className, data, ...rest } = props

  if (!data) return null

  return (
    <div className={`prose prose-neutral dark:prose-invert max-w-none ${className || ''}`} {...rest}>
      <RichTextConverter data={data} />
    </div>
  )
}
