/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_HUBSPOT_PORTAL_ID: string
    readonly VITE_HUBSPOT_ACCOUNT_NAME: string
    readonly VITE_HUBSPOT_FORM_ID: string
    readonly VITE_N8N_WEBHOOK_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
