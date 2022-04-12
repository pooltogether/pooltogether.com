const supportedLocales = ['en', 'es', 'de', 'fr', 'hi', 'it', 'ko', 'pt', 'tr', 'zh']

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: supportedLocales
  },
  backend: {
    projectId: process.env.NEXT_JS_LOCIZE_PROJECT_ID,
    apiKey: process.env.NEXT_JS_LOCIZE_DEV_API_KEY,
    referenceLng: 'en'
  },
  use: [require('i18next-locize-backend/cjs')],
  ns: ['common'], // the namespaces needs to be listed here, to make sure they got preloaded
  defaultNS: 'common',
  serializeConfig: false, // because of the custom use i18next plugin. Forces us to pass config to appWithTranslation and serverSideTranslations
  fallbackLng: 'en'
  // debug: true
  // saveMissing: true, // to not saveMissing to true for production
}
