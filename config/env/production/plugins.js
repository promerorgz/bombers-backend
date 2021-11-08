module.exports = ({ env }) => {
  return {
    email: {
      provider: "nodemailer",
      providerOptions: {
        service: "gmail",
        port: 587,
        auth: {
          user: process.env.MAIL_ADDRESS,
          pass: process.env.MAIL_PASS,
        },
      },
      settings: {
        defaultFrom: "stlbombersrfc@gmail.com",
        defaultReplyTo: "stlbombersrfc@gmail.org",
      },
    },
    upload: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_ACCESS_SECRET,
        region: "us-east-1",
        params: {
          Bucket: "bombers",
        },
        logger: console,
      },
    },
  };
};
