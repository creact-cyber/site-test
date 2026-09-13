import React from 'react'

interface SchemaMarkupProps {
  schema: Record<string, unknown> | Record<string, unknown>[]
}

const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ schema }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default SchemaMarkup
