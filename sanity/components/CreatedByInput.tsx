'use client'

import { useEffect } from 'react'
import { StringInputProps, useCurrentUser, useFormValue, set } from 'sanity'

export function CreatedByInput(props: StringInputProps) {
  const { onChange, value, renderDefault } = props
  const currentUser = useCurrentUser()
  const documentId = useFormValue(['_id']) as string | undefined

  useEffect(() => {
    // Only auto-fill if:
    // 1. Document is new (ID starts with 'drafts.' and has no published version)
    // 2. createdBy field is empty
    // 3. We have a current user email
    const isNewDocument = documentId?.startsWith('drafts.') && !value

    if (isNewDocument && currentUser?.email && !value) {
      onChange(set(currentUser.email))
    }
  }, [currentUser?.email, documentId, onChange, value])

  // Use the default string input renderer
  return renderDefault(props)
}

export default CreatedByInput
