import { useEffect } from 'react'
import { useCurrentUser, useDocumentOperation } from 'sanity'

// This hook auto-fills the createdBy field when a new document is created
export function useSetCreatedBy(props: {
  id: string
  type: string
  draft?: { createdBy?: string } | null
  published?: { createdBy?: string } | null
}) {
  const { id, type, draft, published } = props
  const currentUser = useCurrentUser()
  const { patch } = useDocumentOperation(id, type)

  useEffect(() => {
    // Only run for post documents
    if (type !== 'post') return

    // Only set if createdBy is not already set
    const existingCreatedBy = draft?.createdBy || published?.createdBy
    if (existingCreatedBy) return

    // Only set if we have a current user email
    if (!currentUser?.email) return

    // Set the createdBy field
    patch.execute([
      {
        set: {
          createdBy: currentUser.email,
        },
      },
    ])
  }, [id, type, draft?.createdBy, published?.createdBy, currentUser?.email, patch])
}

export default useSetCreatedBy
