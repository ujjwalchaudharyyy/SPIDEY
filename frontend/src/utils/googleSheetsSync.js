import { DEFAULT_GOOGLE_SHEETS } from '../data/fallbackData'

const STORAGE_KEY = 'event_google_sheets_config'
const SYNC_HISTORY_KEY = 'google_sheet_sync_history'

// Get current Google Sheets config (merges localStorage overrides with defaults)
export function getEventGoogleSheetsConfig() {
  try {
    const custom = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
    return { ...DEFAULT_GOOGLE_SHEETS, ...custom }
  } catch (e) {
    return DEFAULT_GOOGLE_SHEETS
  }
}

// Generate smart Google Sheet URL (custom or native Google Sheets creator https://sheets.new)
export function getEventSheetUrl(eventId, eventTitle = 'Event') {
  const configs = getEventGoogleSheetsConfig()
  const custom = configs[eventId]?.sheetUrl
  if (custom && custom.trim() && custom.startsWith('https://docs.google.com') && !custom.includes('your-sheet-id') && !custom.includes('_Registry') && !custom.includes('1HTW2027')) {
    return custom.trim()
  }
  const cleanTitle = encodeURIComponent((eventTitle || `Event_${eventId}`).replace(/[^a-zA-Z0-9 ]/g, '_').trim())
  return `https://sheets.new?title=${cleanTitle}_Registrations`
}

// Update config for a specific event
export function updateEventGoogleSheetConfig(eventId, updates) {
  try {
    const current = getEventGoogleSheetsConfig()
    current[eventId] = { ...(current[eventId] || {}), ...updates, eventId }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(current))
    return current
  } catch (e) {
    console.error('Failed to update Google Sheet config', e)
    return null
  }
}

// Automatically syncs a newly registered student row to the event's Google Sheet
export async function syncRegistrationToGoogleSheet(registration) {
  if (!registration || !registration.event_id) return { success: false, reason: 'No event id' }

  const configs = getEventGoogleSheetsConfig()
  const sheetConfig = configs[registration.event_id]

  const payload = {
    ticketCode: registration.ticket_code || '',
    studentName: registration.student_name || '',
    studentEmail: registration.student_email || '',
    phone: registration.phone || '',
    rollNo: registration.roll_no || '',
    degree: registration.degree || '',
    campus: registration.campus || '',
    eventTitle: registration.event_title || sheetConfig?.eventName || '',
    teamName: registration.team_name || 'Solo',
    teamSize: registration.team_size || '1',
    trackInfo: registration.track_info || '',
    githubLink: registration.github_link || '',
    timestamp: registration.created_at || new Date().toISOString()
  }

  let syncedLive = false

  // If a valid Google Apps Script Webhook URL is configured, POST row payload
  if (sheetConfig?.webhookUrl && sheetConfig.webhookUrl.startsWith('https://script.google.com')) {
    try {
      fetch(sheetConfig.webhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(err => console.warn('Google Sheet Webhook post non-blocking notice:', err.message))
      syncedLive = true
    } catch (err) {
      console.warn('Apps Script auto-sync network notice:', err.message)
    }
  }

  // Record into sync history
  try {
    const history = JSON.parse(localStorage.getItem(SYNC_HISTORY_KEY) || '[]')
    history.unshift({
      eventId: registration.event_id,
      ticketCode: registration.ticket_code,
      studentName: registration.student_name,
      studentEmail: registration.student_email,
      timestamp: new Date().toISOString(),
      liveWebhook: syncedLive,
      sheetUrl: getEventSheetUrl(registration.event_id, registration.event_title)
    })
    localStorage.setItem(SYNC_HISTORY_KEY, JSON.stringify(history.slice(0, 100)))
  } catch (e) {}

  return { success: true, syncedLive, sheetUrl: getEventSheetUrl(registration.event_id, registration.event_title) }
}

// Copy Tab-Separated Values (TSV) to clipboard so pasting into Google Sheets fills rows and columns instantly!
export function copyForGoogleSheets(registrations) {
  if (!registrations || registrations.length === 0) return false

  const headers = [
    'Ticket Code',
    'Student Name',
    'University Roll No',
    'Email (Gmail)',
    'Phone',
    'Degree & Year',
    'Campus',
    'Participation',
    'Team Name',
    'Team Size',
    'Track / Slot',
    'Registration Date'
  ]

  const rows = registrations.map(r => [
    r.ticket_code || '',
    r.student_name || '',
    r.roll_no || '',
    r.student_email || '',
    r.phone || '',
    r.degree || '',
    r.campus || '',
    (r.team_name && !r.team_name.toLowerCase().includes('solo')) ? 'Team' : 'Solo',
    r.team_name || 'Solo',
    r.team_size || '1',
    r.track_info || '',
    r.created_at || ''
  ])

  const tsv = [headers.join('\t'), ...rows.map(row => row.join('\t'))].join('\n')
  return tsv
}

// Copy-paste Google Apps Script code for admin to enable live Google Sheet appending
export const GOOGLE_APPS_SCRIPT_TEMPLATE = `
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Auto-create headers if first row is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp", "Ticket Code", "Student Name", "Email", 
        "Phone", "Roll Number", "Degree / Branch", "Campus", 
        "Event Title", "Team Name", "Team Size", "Track / Details", "GitHub Link"
      ]);
    }
    
    sheet.appendRow([
      new Date(),
      data.ticketCode || "",
      data.studentName || "",
      data.studentEmail || "",
      data.phone || "",
      data.rollNo || "",
      data.degree || "",
      data.campus || "",
      data.eventTitle || "",
      data.teamName || "Solo",
      data.teamSize || "1",
      data.trackInfo || "",
      data.githubLink || ""
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
`.trim()
\n
// Get smart Campus Master Google Sheet URL
export function getCampusSheetUrl(campusKey, campusName = 'Campus') {
  const configs = getEventGoogleSheetsConfig()
  const custom = configs[campusKey]?.sheetUrl
  if (custom && custom.trim() && !custom.includes('your-sheet-id')) {
    return custom.trim()
  }
  const cleanTitle = encodeURIComponent((campusName || campusKey).replace(/[^a-zA-Z0-9 ]/g, '_').trim())
  return https://sheets.new?title=_Master_Registrations
}
