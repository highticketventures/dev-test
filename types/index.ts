// API Response types
export interface ApiResponse<T = any> {
  data?: T
  error?: string
  message?: string
}

// Request form types
export interface CreateRequestData {
  title: string
  description: string
  category: string
}

// UI Component types
export interface SelectOption {
  label: string
  value: string
}