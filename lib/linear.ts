import { LinearClient } from '@linear/sdk'

if (!process.env.LINEAR_API_KEY) {
  throw new Error('LINEAR_API_KEY is required')
}

export const linear = new LinearClient({
  apiKey: process.env.LINEAR_API_KEY
})

export async function createLinearIssue(data: {
  title: string
  description: string
  teamId: string
  priority?: number
}) {
  try {
    const issuePayload = await linear.issueCreate({
      title: data.title,
      description: data.description,
      teamId: data.teamId,
      priority: data.priority || 0
    })

    if (!issuePayload.success) {
      throw new Error('Failed to create Linear issue')
    }

    const issue = await issuePayload.issue
    return {
      id: issue?.id,
      identifier: issue?.identifier,
      url: issue?.url
    }
  } catch (error) {
    console.error('Error creating Linear issue:', error)
    throw error
  }
}