module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1339),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "b27d1918edee51b4aba375ca418f1f04"),
    },
  },
});
