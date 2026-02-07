

## Plan: Replace All "Sirvoy" References with "Cloudbeds"

### Overview
Replace every occurrence of "Sirvoy" (and "sirvoy") with "Cloudbeds" (and "cloudbeds") across the entire webapp -- translation files, components, modals, and legal content. The external link to sirvoy.com will also be updated to cloudbeds.com.

---

### Files to Update

#### 1. Translation Files (4 files)

**`src/lib/i18n/translations/en.ts`** -- 11 occurrences
- `hero.badge1`: "Connected to **Cloudbeds** for real-time booking data"
- `hero.sirvoyNote`: "**Cloudbeds** manages your bookings..."
- `onboardingStrip.step3.description`: "Connect **Cloudbeds** and start tracking..."
- `onboarding.items.connectSirvoy.title`: "Connect **Cloudbeds**"
- `onboarding.items.connectSirvoy.description`: unchanged (generic PMS text)
- `howItWorks.subtitle`: "**Cloudbeds** sends booking data..."
- `howItWorks.sirvoyIntegration`: "**Cloudbeds** Integration"
- `howItWorks.sirvoyDescription`: "**Cloudbeds** is your booking engine..."
- `bestPractices.items.editBookings`: "Edit bookings in **Cloudbeds**..."

**`src/lib/i18n/translations/tl.ts`** -- same keys, Tagalog equivalents updated

**`src/lib/i18n/translations/de.ts`** -- same keys, German equivalents updated

**`src/lib/i18n/translations/it.ts`** -- same keys, Italian equivalents updated

#### 2. Translation Types

**`src/lib/i18n/types.ts`**
- Rename `connectSirvoy` key to `connectCloudbeds` in the onboarding items interface
- Rename `sirvoyIntegration` to `cloudbedsIntegration` and `sirvoyDescription` to `cloudbedsDescription` in howItWorks interface
- Rename `sirvoyNote` to `cloudbedsNote` in hero interface

#### 3. Component Files (8 files)

**`src/components/landing/HeroSection.tsx`**
- Update `t("hero.sirvoyNote")` to `t("hero.cloudbedsNote")`

**`src/components/landing/HowItWorksSection.tsx`**
- Update `t("howItWorks.sirvoyIntegration")` to `t("howItWorks.cloudbedsIntegration")`
- Update `t("howItWorks.sirvoyDescription")` to `t("howItWorks.cloudbedsDescription")`

**`src/components/landing/FeatureDetailModal.tsx`** -- 3 hardcoded strings
- Line 52: "connected to **Cloudbeds** webhooks"
- Line 103: "updated automatically from **Cloudbeds**"
- Line 115: "until **Cloudbeds** sends booking data"

**`src/components/landing/DeveloperToolsModal.tsx`** -- 3 hardcoded strings
- Line 13: "synced from **Cloudbeds**"
- Line 64: "with **Cloudbeds** at the core"
- Line 67: "**Cloudbeds** is fully integrated..."

**`src/components/landing/ModuleGroupsSection.tsx`** -- 2 hardcoded strings
- Line 19: "Reservations from **Cloudbeds**..."
- Line 21: "Connect **Cloudbeds** API key..."

**`src/components/landing/OnboardingChecklist.tsx`** (landing) -- 2 hardcoded strings
- Line 15: "Connect **Cloudbeds**" (title)
- Line 16: "Link your booking engine..." (unchanged, generic)
- Line 41: "Check that **Cloudbeds** data is flowing..."

**`src/components/dashboard/OnboardingChecklist.tsx`** (dashboard) -- 1 hardcoded string
- Line 24: "Connect **Cloudbeds** bookings"

**`src/components/dashboard/DemoOccupancyWidget.tsx`** -- 1 hardcoded string
- Line 44: "Connect **Cloudbeds** or add manual reservations"
- Line 54: Button text "Connect **Cloudbeds**"

**`src/components/landing/LegalModal.tsx`** -- 6 hardcoded strings
- Line 27: "complement your existing booking system (like **Cloudbeds**)"
- Line 64: "syncing with **Cloudbeds**"
- Line 68: "connect to **Cloudbeds** or other booking channels"
- Line 88: heading "**Cloudbeds** Integration"
- Line 89: "connects to **Cloudbeds** via secure webhooks. When a booking is made or updated in **Cloudbeds**..."

**`src/components/landing/Footer.tsx`** -- 2 occurrences
- Line 51 (mobile): Update link text from "Sirvoy" to "Cloudbeds" and href from `https://www.sirvoy.com` to `https://www.cloudbeds.com`
- Line 71 (desktop): Same update

---

### Summary

| Area | Files | Occurrences |
|------|-------|-------------|
| Translation files (en, tl, de, it) | 4 | ~44 |
| Translation types | 1 | 4 key renames |
| Landing page components | 7 | ~16 |
| Dashboard components | 2 | ~3 |
| **Total** | **14 files** | **~67 occurrences** |

### What Will NOT Change
- External app URLs (palawancollective.com domains) remain the same
- All other branding (Palawan Collective, BitChat, etc.) remains the same
- FAQ content stored in the database is not affected (managed via Admin Settings)

