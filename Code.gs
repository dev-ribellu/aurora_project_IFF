// ============================================================
// SETUP INSTRUCTIONS — GITHUB PAGES COMPATIBLE
// 1. Go to script.google.com
// 2. Create a new project, paste this code
// 3. Link it to your Google Sheet:
//    - Tools > Script properties (or replace SHEET_ID below)
// 4. Click Deploy > New deployment
//    - Type: Web App
//    - Execute as: Me
//    - Who has access: Anyone (not "Anyone with Google account")
// 5. Click Deploy, authorize permissions
// 6. Copy the /exec Web App URL (NOT the /dev URL)
// 7. Paste it in nova-discovery.html as APPS_SCRIPT_URL constant
// NOTE: Always redeploy (new version) after any code change
//       The /dev URL does NOT work from GitHub Pages
// ============================================================

const SHEET_ID = PropertiesService.getScriptProperties().getProperty("SHEET_ID") || "1fidtntI-nO-CeSMz5P0k5XjPUvjI-6IalNGOenXzGyk";
const SHEET_NAME = PropertiesService.getScriptProperties().getProperty("SHEET_NAME") || "Feuille 1";

function doPost(e) {
  try {
    const payload = JSON.parse((e && e.postData && e.postData.contents) || "{}");
    const sheet = getTargetSheet_();
    ensureHeaders_(sheet);

    const id = String(payload.id || "");
    const timestamp = String(payload.timestamp || "");
    const prenom = String(payload.prenom || "");
    const question = String(payload.question || "");
    const statut = String(payload.statut || "EN ATTENTE");

    if (!id || !timestamp || !question) {
      throw new Error("Missing required fields.");
    }

    sheet.appendRow([id, timestamp, prenom, question, statut]);

    return jsonResponse_({ success: true });
  } catch (error) {
    return jsonResponse_({ success: false, error: error.message || String(error) });
  }
}

function doGet(e) {
  try {
    const sheet = getTargetSheet_();
    ensureHeaders_(sheet);

    const values = sheet.getDataRange().getValues();
    if (values.length <= 1) {
      return jsonResponse_([]);
    }

    const rows = values.slice(1).map((row) => ({
      id: String(row[0] || ""),
      timestamp: String(row[1] || ""),
      prenom: String(row[2] || ""),
      question: String(row[3] || ""),
      statut: String(row[4] || "EN ATTENTE")
    }));

    return jsonResponse_(rows);
  } catch (error) {
    return jsonResponse_({ success: false, error: error.message || String(error) });
  }
}

function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.JSON);
}

function jsonResponse_(responseObject) {
  return ContentService.createTextOutput(JSON.stringify(responseObject))
    .setMimeType(ContentService.MimeType.JSON);
}

function getTargetSheet_() {
  if (!SHEET_ID || SHEET_ID === "PASTE_YOUR_SHEET_ID_HERE") {
    throw new Error("Sheet ID not configured.");
  }

  const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.getSheets()[0];

  if (!sheet) {
    throw new Error("Target sheet not found.");
  }

  return sheet;
}

function ensureHeaders_(sheet) {
  const headers = ["ID", "Timestamp", "Prénom", "Question", "Statut"];
  const firstRow = sheet.getRange(1, 1, 1, headers.length).getValues()[0];
  const matches = headers.every((header, index) => String(firstRow[index] || "") === header);

  if (!matches) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  }
}