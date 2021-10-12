module.exports = ({ env }) => {
  return {
    // email: {
    //   provider: "nodemailer",
    //   providerOptions: {
    //     service: "gmail",
    //     port: 587,
    //     auth: {
    //       user: "contact.monumentacademydc@gmail.com",
    //       pass: "monument_contact",
    //     },
    //   },
    //   settings: {
    //     defaultFrom: "contact.monumentacademydc@gmail.com",
    //     defaultReplyTo: "info@monumentacademydc.org",
    //   },
    // },
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
