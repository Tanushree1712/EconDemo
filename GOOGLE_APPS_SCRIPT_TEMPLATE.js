const SHEET_NAME = 'Orders'
const REQUIRED_HEADERS = ['Timestamp', 'Customer Name', 'Email', 'Phone', 'Address', 'Booking Date', 'Notes', 'Items', 'Total Price']
const SPREADSHEET_ID = '1tddqJh2As4ZWW7eYASKuaN6wtAL_a5IuF0BPSaLoet8'
// Optional: set a shared secret to reject unsolicited requests.
// If left as the placeholder or empty string, no secret check is performed.
const SHARED_SECRET = 'PUT_SHARED_SECRET_HERE'

function doGet(e) {
  return createJsonResponse({ success: true, message: 'Google Apps Script is running.' })
}

function doPost(e) {
  try {
    const rawData = e.postData && e.postData.contents ? e.postData.contents : '{}'
    const payload = JSON.parse(rawData)

    const sheet = getOrCreateSheet()
    ensureHeaders(sheet)

    // Optional shared-secret validation: include `secret` in the JSON payload
    // to authenticate the request when SHARED_SECRET is set to a non-empty value.
    if (SHARED_SECRET && SHARED_SECRET !== 'PUT_SHARED_SECRET_HERE') {
      if (!payload || payload.secret !== SHARED_SECRET) {
        return createJsonResponse({ success: false, error: 'Unauthorized' })
      }
    }

    const row = [
      new Date().toISOString(),
      payload.customerName || '',
      payload.email || '',
      payload.phone || '',
      payload.address || '',
      payload.bookingDate || '',
      payload.notes || '',
      JSON.stringify(payload.items || []),
      payload.totalPrice || 0,
    ]

    sheet.appendRow(row)

    return createJsonResponse({ success: true, message: 'Order submitted successfully.' })
  } catch (error) {
    const message = error && error.message ? error.message : 'Unknown error'
    console.error(message)
    return createJsonResponse({ success: false, error: message })
  }
}

function doOptions() {
  return createJsonResponse({ success: true })
}

function createJsonResponse(body) {
  return ContentService
    .createTextOutput(JSON.stringify(body))
    .setMimeType(ContentService.MimeType.JSON)
}

function getOrCreateSheet() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID)
  let sheet = spreadsheet.getSheetByName(SHEET_NAME)

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME)
  }

  return sheet
}

function ensureHeaders(sheet) {
  const headers = sheet.getRange(1, 1, 1, REQUIRED_HEADERS.length).getValues()[0]

  if (headers.join(',') !== REQUIRED_HEADERS.join(',')) {
    sheet.getRange(1, 1, 1, REQUIRED_HEADERS.length).setValues([REQUIRED_HEADERS])
  }
}