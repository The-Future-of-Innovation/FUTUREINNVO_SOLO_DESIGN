# 🚀 QUICK EmailJS Setup - Fix Contact Form in 5 Minutes

## 🔴 Current Issue
Your contact form shows: "Invalid email configuration" because the EmailJS template is missing.

## ✅ Quick Fix (Choose Option 1 or 2)

### Option 1: Complete EmailJS Setup (Recommended)

#### Step 1: Login to EmailJS
1. Go to: https://dashboard.emailjs.com/
2. Login with your account

#### Step 2: Verify Service
1. Click "Email Services" → Check if `service_yg8a8oj` exists
2. If missing, create new service:
   - Click "Add New Service"
   - Choose "Gmail"
   - Connect `futureinnvoteam@gmail.com`
   - Set Service ID: `service_yg8a8oj`

#### Step 3: Create Template
1. Click "Email Templates"
2. Click "Create New Template"
3. Set Template ID: `template_contact`
4. Copy this template:

```html
Subject: New Contact from {{from_name}} - {{subject}}

From: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from FUTUREINNVO contact form
Reply to: {{from_email}}
```

5. In "Settings" tab:
   - To Email: `futureinnvoteam@gmail.com`
   - From Name: `{{from_name}}`
   - Reply To: `{{from_email}}`

6. Save template

#### Step 4: Test
- Go back to your website
- Fill out contact form
- Submit → Should work now!

---

### Option 2: Temporary Workaround (Works Immediately)

Your contact form now has a backup "Open Email Client" button that:
1. Pre-fills an email with form data
2. Opens user's default email app
3. User can send directly to `futureinnvoteam@gmail.com`

---

## 🔧 Your Current Configuration

```javascript
Service ID: service_yg8a8oj
Template ID: template_contact (needs to be created)
Public Key: Ps_uvAe9-3H9_DGlx
Email: futureinnvoteam@gmail.com
```

## 📧 Template Variables Needed

When creating the template, use these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{company}}` - Company name
- `{{subject}}` - Message subject
- `{{message}}` - Message content

## 🆘 If You Need Help

1. **Email directly**: futureinnvoteam@gmail.com
2. **Call**: +968 7111 1040
3. **Use backup button**: "Open Email Client" on contact form

## ✅ Success Indicators

After setup, you should see:
- ✅ "Message sent successfully!" on form submission
- ✅ Email arrives at futureinnvoteam@gmail.com
- ✅ No error messages

## 🔍 Troubleshooting

**Error: "Template not found"**
→ Create template with exact ID: `template_contact`

**Error: "Service not found"**
→ Verify service ID: `service_yg8a8oj`

**Error: "Invalid public key"**
→ Check public key: `Ps_uvAe9-3H9_DGlx`

**Still not working?**
→ Use the "Open Email Client" button as backup
