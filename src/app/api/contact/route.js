import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

function getUserEmailTemplate({ name, formType, packageDetails }) {
  const packageSection = packageDetails
    ? `
      <div style="background: linear-gradient(135deg, #8a21f0, #35a5e8); border-radius: 12px; padding: 20px; margin: 20px 0; color: white;">
        <p style="margin: 0; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; opacity: 0.8;">Selected Package</p>
        <h3 style="margin: 8px 0 4px; font-size: 22px; font-weight: 800;">${packageDetails.name}</h3>
        <p style="margin: 0; font-size: 28px; font-weight: 900;">$${packageDetails.price}</p>
        ${packageDetails.subtitle ? `<p style="margin: 8px 0 0; font-size: 14px; opacity: 0.9;">${packageDetails.subtitle}</p>` : ''}
      </div>`
    : '';

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f7; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%;">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #8a21f0 0%, #35a5e8 100%); border-radius: 16px 16px 0 0; padding: 40px 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: white; font-size: 28px; font-weight: 900; letter-spacing: -0.5px;">Blendwise INC</h1>
              <div style="width: 60px; height: 3px; background: rgba(255,255,255,0.5); margin: 12px auto 0; border-radius: 2px;"></div>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color: white; padding: 40px; border-radius: 0 0 16px 16px; box-shadow: 0 4px 24px rgba(0,0,0,0.08);">

              <!-- Greeting -->
              <h2 style="margin: 0 0 8px; color: #1a1a2e; font-size: 24px; font-weight: 800;">Thank You, ${name}!</h2>
              <p style="margin: 0 0 24px; color: #6b7280; font-size: 15px; line-height: 1.6;">
                We've received your ${formType === 'quote' ? 'quote request' : formType === 'contact' ? 'message' : 'inquiry'} and our team is already on it. You'll hear back from us within <strong style="color: #8a21f0;">24 hours</strong>.
              </p>

              ${packageSection}

              <!-- What's Next -->
              <div style="background-color: #f8f6ff; border-radius: 12px; padding: 24px; margin: 24px 0; border-left: 4px solid #8a21f0;">
                <h3 style="margin: 0 0 12px; color: #1a1a2e; font-size: 16px; font-weight: 700;">What happens next?</h3>
                <table cellpadding="0" cellspacing="0" style="width: 100%;">
                  <tr>
                    <td style="padding: 6px 0; vertical-align: top; width: 30px;">
                      <span style="display: inline-block; width: 22px; height: 22px; background: #8a21f0; color: white; border-radius: 50%; text-align: center; line-height: 22px; font-size: 11px; font-weight: 700;">1</span>
                    </td>
                    <td style="padding: 6px 0; color: #4b5563; font-size: 14px;">Our team reviews your requirements</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; vertical-align: top; width: 30px;">
                      <span style="display: inline-block; width: 22px; height: 22px; background: #8a21f0; color: white; border-radius: 50%; text-align: center; line-height: 22px; font-size: 11px; font-weight: 700;">2</span>
                    </td>
                    <td style="padding: 6px 0; color: #4b5563; font-size: 14px;">A specialist contacts you to discuss details</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; vertical-align: top; width: 30px;">
                      <span style="display: inline-block; width: 22px; height: 22px; background: #8a21f0; color: white; border-radius: 50%; text-align: center; line-height: 22px; font-size: 11px; font-weight: 700;">3</span>
                    </td>
                    <td style="padding: 6px 0; color: #4b5563; font-size: 14px;">We create a custom plan tailored to your needs</td>
                  </tr>
                </table>
              </div>

              <!-- CTA -->
              <div style="text-align: center; margin: 32px 0 16px;">
                <p style="margin: 0 0 16px; color: #6b7280; font-size: 14px;">Need immediate assistance?</p>
                <a href="tel:8665097909" style="display: inline-block; background: linear-gradient(135deg, #8a21f0, #35a5e8); color: white; text-decoration: none; padding: 14px 32px; border-radius: 50px; font-weight: 700; font-size: 14px; letter-spacing: 0.5px;">
                  Call Us: 866-509-7909
                </a>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 32px 40px; text-align: center;">
              <p style="margin: 0 0 8px; color: #9ca3af; font-size: 12px;">
                &copy; ${new Date().getFullYear()} Blendwise INC. All Rights Reserved.
              </p>
              <p style="margin: 0; color: #9ca3af; font-size: 11px;">
                This is an automated confirmation email. Please do not reply directly to this message.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function getAdminEmailTemplate({ name, email, phone, message, subject, description, formType, packageDetails }) {
  const messageContent = message || description || 'No message provided';
  const subjectLine = subject || (formType === 'quote' ? 'Quote Request' : formType === 'contact' ? 'Contact Form' : 'Footer Inquiry');

  const packageSection = packageDetails
    ? `
      <tr>
        <td style="padding: 12px 20px; border-bottom: 1px solid #f3f4f6;">
          <span style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Package</span>
          <p style="margin: 4px 0 0; color: #1a1a2e; font-size: 15px; font-weight: 700;">${packageDetails.name} - $${packageDetails.price}</p>
          ${packageDetails.subtitle ? `<p style="margin: 2px 0 0; color: #6b7280; font-size: 13px;">${packageDetails.subtitle}</p>` : ''}
        </td>
      </tr>`
    : '';

  const formLabel = formType === 'quote' ? 'Quote Modal' : formType === 'contact' ? 'Contact Page' : 'Footer Form';
  const badgeColor = formType === 'quote' ? '#8a21f0' : formType === 'contact' ? '#35a5e8' : '#10b981';

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f7; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%;">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border-radius: 16px 16px 0 0; padding: 30px 40px; text-align: center;">
              <h1 style="margin: 0 0 8px; color: white; font-size: 22px; font-weight: 900;">New Lead Received</h1>
              <span style="display: inline-block; background: ${badgeColor}; color: white; padding: 4px 16px; border-radius: 50px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">
                ${formLabel}
              </span>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color: white; padding: 0; border-radius: 0 0 16px 16px; box-shadow: 0 4px 24px rgba(0,0,0,0.08);">

              <!-- Quick Summary -->
              <div style="padding: 24px 40px 16px; border-bottom: 2px solid #f3f4f6;">
                <h2 style="margin: 0; color: #1a1a2e; font-size: 20px; font-weight: 800;">${name}</h2>
                <p style="margin: 4px 0 0; color: #6b7280; font-size: 13px;">${new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}</p>
              </div>

              <!-- Details Table -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 12px 20px; border-bottom: 1px solid #f3f4f6;">
                    <span style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Name</span>
                    <p style="margin: 4px 0 0; color: #1a1a2e; font-size: 15px; font-weight: 600;">${name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 20px; border-bottom: 1px solid #f3f4f6;">
                    <span style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Email</span>
                    <p style="margin: 4px 0 0;"><a href="mailto:${email}" style="color: #8a21f0; font-size: 15px; font-weight: 600; text-decoration: none;">${email}</a></p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 20px; border-bottom: 1px solid #f3f4f6;">
                    <span style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Phone</span>
                    <p style="margin: 4px 0 0;"><a href="tel:${phone}" style="color: #8a21f0; font-size: 15px; font-weight: 600; text-decoration: none;">${phone}</a></p>
                  </td>
                </tr>
                ${subject ? `
                <tr>
                  <td style="padding: 12px 20px; border-bottom: 1px solid #f3f4f6;">
                    <span style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Subject</span>
                    <p style="margin: 4px 0 0; color: #1a1a2e; font-size: 15px; font-weight: 600;">${subject}</p>
                  </td>
                </tr>` : ''}
                ${packageSection}
                <tr>
                  <td style="padding: 12px 20px;">
                    <span style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Message</span>
                    <div style="margin: 8px 0 0; padding: 16px; background: #f8f6ff; border-radius: 8px; border-left: 3px solid #8a21f0;">
                      <p style="margin: 0; color: #374151; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${messageContent}</p>
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Quick Actions -->
              <div style="padding: 24px 20px; text-align: center; border-top: 2px solid #f3f4f6;">
                <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #8a21f0, #35a5e8); color: white; text-decoration: none; padding: 12px 28px; border-radius: 50px; font-weight: 700; font-size: 13px; margin: 0 6px;">
                  Reply via Email
                </a>
                <a href="tel:${phone}" style="display: inline-block; background: #1a1a2e; color: white; text-decoration: none; padding: 12px 28px; border-radius: 50px; font-weight: 700; font-size: 13px; margin: 0 6px;">
                  Call Now
                </a>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 40px; text-align: center;">
              <p style="margin: 0; color: #9ca3af; font-size: 11px;">
                Blendwise INC - Admin Notification System
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, subject, description, formType, packageDetails } = body;

    if (!name || !email || !phone) {
      return Response.json(
        { error: 'Name, email, and phone are required.' },
        { status: 400 }
      );
    }

    const appName = process.env.APP_NAME || 'Blendwise INC';
    const adminEmail = process.env.ADMIN_EMAIL;

    // Email subject lines
    const formLabel = formType === 'quote' ? 'Quote Request' : formType === 'contact' ? 'Contact Form' : 'Inquiry';
    const adminSubject = `New ${formLabel} from ${name}${packageDetails ? ` - ${packageDetails.name}` : ''}`;
    const userSubject = `Thank you for contacting ${appName}!`;

    // Send email to admin
    await transporter.sendMail({
      from: `"${appName}" <${process.env.SMTP_USER}>`,
      to: adminEmail,
      subject: adminSubject,
      html: getAdminEmailTemplate({ name, email, phone, message, subject, description, formType, packageDetails }),
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: `"${appName}" <${process.env.SMTP_USER}>`,
      to: email,
      subject: userSubject,
      html: getUserEmailTemplate({ name, formType, packageDetails }),
    });

    return Response.json({ success: true, message: 'Emails sent successfully!' });
  } catch (error) {
    console.error('Email sending failed:', error);
    return Response.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
