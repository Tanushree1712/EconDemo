export interface OrderItem {
  id: number
  name: string
  qty: number
  price: number
}

export interface OrderPayload {
  customerName: string
  email: string
  phone: string
  address: string
  bookingDate: string
  notes: string
  items: OrderItem[]
  totalPrice: number
  submittedAt: string
}

export interface OrderSubmissionResult {
  success: boolean
  message?: string
  error?: string
}

export async function submitOrder(url: string, payload: OrderPayload): Promise<OrderSubmissionResult> {
  if (!url) {
    throw new Error('Set VITE_GOOGLE_APPS_SCRIPT_URL in your environment before submitting orders.')
  }

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(payload),
  })

  const contentType = response.headers.get('content-type') || ''
  let data: OrderSubmissionResult | null = null

  if (contentType.includes('application/json')) {
    data = await response.json()
  } else {
    const text = await response.text()
    data = { success: response.ok, message: text }
  }

  if (!response.ok || data?.success === false) {
    throw new Error(data?.error || data?.message || `Request failed with status ${response.status}`)
  }

  return {
    success: true,
    message: data?.message || 'Order submitted successfully.',
  }
}
