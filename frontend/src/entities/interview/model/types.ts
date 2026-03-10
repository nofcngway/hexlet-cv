import type { TPagination } from '@shared/types/inertiaSharedData/inertiaSharedProps'

export type TKnowledgeInterview = {
  id: number
  title: string
  description: string | null
  duration: string | null
}

export interface IKnowledgeInterviewsResponse {
  interviews: TKnowledgeInterview[]
  pagination: TPagination
}

export interface IKnowledgeInterviewShowResponse {
  interview: TKnowledgeInterview
}
