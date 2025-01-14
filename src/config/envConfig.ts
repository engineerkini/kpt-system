const envConfig = {
  apiBaseUrl: process.env.REACT_APP_API_BASE_URL || "http://localhost:5000/api",
  environment: process.env.NODE_ENV || "development",
  debug: process.env.REACT_APP_DEBUG === "true",
  version: process.env.REACT_APP_VERSION || "1.0.0",
  sentryDsn: process.env.REACT_APP_SENTRY_DSN || "",
  googleAnalyticsId: process.env.REACT_APP_GOOGLE_ANALYTICS_ID || "",
};

export default envConfig;
