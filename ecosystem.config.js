module.exports = {
  apps: [
    {
      name: "nextjs-secret-app",
      script: "npm",
      args: "run start",
      env: {
        NODE_ENV: "production",
        PORT: 5808,
      },
    },
  ],
};
  