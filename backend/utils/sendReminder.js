require('dotenv').config();
const AWS = require('aws-sdk');

AWS.config.update({
  region: 'us-east-1',
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const ses = new AWS.SES();

const sendReminderEmail = async (to, taskTitle, dueDate) => {
  const params = {
    Source: process.env.SES_VERIFIED_EMAIL,
    Destination: { ToAddresses: [to] },
    Message: {
      Subject: { Data: `Reminder: ${taskTitle}` },
      Body: {
        Text: {
          Data: `Hey! Just a reminder that your task "${taskTitle}" is due on ${new Date(dueDate).toLocaleDateString()}.`,
        },
      },
    },
  };

  try {
    const result = await ses.sendEmail(params).promise();
    console.log('✅ Email sent! Message ID:', result.MessageId);
  } catch (err) {
    console.error('❌ Failed to send email:', err);
  }
};

module.exports = sendReminderEmail;
