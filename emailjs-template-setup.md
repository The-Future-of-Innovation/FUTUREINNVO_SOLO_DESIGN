# EmailJS Setup Guide - FUTUREINNVO Contact Form

## 🚨 URGENT: Complete This Setup to Fix Contact Form

The contact form is showing "Invalid email configuration" because the EmailJS template needs to be created.

## Your EmailJS Configuration
- **Service ID**: `service_yg8a8oj`
- **Public Key**: `Ps_uvAe9-3H9_DGlx`
- **Private Key**: `m5eSLdLcK-5kv5RqwDknl`
- **Email**: `futureinnvoteam@gmail.com`

## 📋 Step-by-Step Setup (5 minutes)

### Step 1: Access EmailJS Dashboard
1. Go to: https://dashboard.emailjs.com/
2. Log in with your EmailJS account
3. Make sure you're in the correct account that has service `service_yg8a8oj`

### Step 2: Check Your Service
1. Click on "Email Services" in the left sidebar
2. Verify that service `service_yg8a8oj` exists and is connected to Gmail
3. If not connected, connect it to `futureinnvoteam@gmail.com`

### Step 3: Create Email Template

### Template ID
Create a template with ID: `template_contact`

### Template Content
Use this HTML template in your EmailJS dashboard:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Contact Form Submission</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Contact Form Submission
        </h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1e40af;">Contact Details</h3>
            <p><strong>Name:</strong> {{from_name}}</p>
            <p><strong>Email:</strong> {{from_email}}</p>
            <p><strong>Company:</strong> {{company}}</p>
            <p><strong>Subject:</strong> {{subject}}</p>
        </div>
        
        <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1e40af;">Message</h3>
            <p style="white-space: pre-wrap;">{{message}}</p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 14px; color: #64748b;">
            <p>This message was sent from the FUTUREINNVO contact form.</p>
            <p>Please respond to: {{from_email}}</p>
        </div>
    </div>
</body>
</html>
```

### Template Variables
Make sure these variables are configured in your template:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{company}}` - Sender's company
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_email}}` - Your email (futureinnvoteam@gmail.com)

## Steps to Set Up

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Log in to your account
3. Go to "Email Templates"
4. Click "Create New Template"
5. Set Template ID as: `template_contact`
6. Copy and paste the HTML template above
7. Configure the variables as listed
8. Set the "To Email" to: `futureinnvoteam@gmail.com`
9. Set the "From Name" to: `{{from_name}}`
10. Set the "Reply To" to: `{{from_email}}`
11. Save the template

## Testing
After setting up the template, test the contact form on your website to ensure emails are being sent correctly.

## Troubleshooting
- Make sure your EmailJS service is properly configured with Gmail
- Verify that all template variables match exactly
- Check that the service ID and template ID are correct
- Ensure your public key is properly set

## Security Note
The private key (`m5eSLdLcK-5kv5RqwDknl`) should be kept secure and only used for server-side operations if needed.
