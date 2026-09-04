# Order workflow with Google Sheets

## 1. Create the Google Sheet
1. Create a new Google Sheet.
2. Rename the first sheet to Orders.
3. Put these headers in row 1:
   - Timestamp
   - Customer Name
   - Email
   - Phone
   - Address
   - Booking Date
   - Notes
   - Items
   - Total Price

## 2. Create the Apps Script
1. Open Extensions > Apps Script.
2. Replace the default code with the contents of GOOGLE_APPS_SCRIPT_TEMPLATE.js.
3. Save and deploy as a Web App.

## 3. Deploy the Apps Script
1. Click Deploy > New deployment.
2. Select Web app.
3. Set Execute as: Me.
4. Set Who has access: Anyone.
5. Deploy and copy the web app URL.

## 4. Configure the frontend
1. Copy .env.example to .env.
2. Set VITE_GOOGLE_APPS_SCRIPT_URL to your deployed web app URL.
3. Restart the dev server.

## 5. Test the flow
1. Add items to the cart.
2. Fill in the checkout form.
3. Submit the order.
4. Confirm the row appears in your Google Sheet.
