

## Plan: Fix HeroSection and OnboardingStrip Internationalization

### Problem
The HeroSection and OnboardingStrip components display hardcoded English text instead of using the translation system. When users switch to Tagalog, German, or Italian, these sections remain in English because they don't use the `t()` translation function.

---

### Part 1: Update HeroSection.tsx to Use Translations

**File:** `src/components/landing/HeroSection.tsx`

**Changes needed:**

1. **Import the translation hook:**
```typescript
import { useTranslation } from "@/contexts/LocaleContext";
```

2. **Use the translation function inside the component:**
```typescript
const { t } = useTranslation();
```

3. **Replace all hardcoded English strings with translation keys:**

| Current Hardcoded Text | Replace With |
|------------------------|--------------|
| `"Run Your Resort in One Dashboard"` | `t("hero.headline")` + `t("hero.headlineGradient")` |
| `"Bookings, staff, food, inventory..."` | `t("hero.subheadline")` |
| `"Sirvoy manages your bookings..."` | New key: `t("hero.sirvoyNote")` |
| `"Start with Demo Data"` | New key: `t("hero.startDemo")` |
| `"Connect My Resort"` | New key: `t("hero.connectResort")` |
| `"No changes to your booking channels..."` | New key: `t("hero.trustNote")` |

---

### Part 2: Add Missing Translation Keys to Types

**File:** `src/lib/i18n/types.ts`

Add new keys to the `hero` interface:
```typescript
hero: {
  headline: string;
  headlineGradient: string;
  subheadline: string;
  badge1: string;
  badge2: string;
  yourTools: string;
  sirvoyNote: string;      // NEW
  startDemo: string;       // NEW
  connectResort: string;   // NEW
  trustNote: string;       // NEW
};
```

---

### Part 3: Add Missing Translations to All Language Files

**Add to `src/lib/i18n/translations/en.ts`:**
```typescript
hero: {
  // ... existing keys ...
  sirvoyNote: 'Sirvoy manages your bookings. Palawan Collective runs your daily operations.',
  startDemo: 'Start with Demo Data',
  connectResort: 'Connect My Resort',
  trustNote: 'No changes to your booking channels. You stay in control of your data.',
},
```

**Add to `src/lib/i18n/translations/tl.ts`:**
```typescript
hero: {
  // ... existing keys ...
  sirvoyNote: 'Ang Sirvoy ang bahala sa mga booking mo. Ang Palawan Collective ang nagpapatakbo ng araw-araw na operasyon.',
  startDemo: 'Magsimula sa Demo Data',
  connectResort: 'I-connect ang Aking Resort',
  trustNote: 'Walang pagbabago sa iyong booking channels. Ikaw ang may kontrol sa iyong data.',
},
```

**Add to `src/lib/i18n/translations/de.ts`:**
```typescript
hero: {
  // ... existing keys ...
  sirvoyNote: 'Sirvoy verwaltet Ihre Buchungen. Palawan Collective führt Ihren täglichen Betrieb.',
  startDemo: 'Mit Demo-Daten starten',
  connectResort: 'Mein Resort verbinden',
  trustNote: 'Keine Änderungen an Ihren Buchungskanälen. Sie behalten die Kontrolle über Ihre Daten.',
},
```

**Add to `src/lib/i18n/translations/it.ts`:**
```typescript
hero: {
  // ... existing keys ...
  sirvoyNote: 'Sirvoy gestisce le tue prenotazioni. Palawan Collective gestisce le operazioni quotidiane.',
  startDemo: 'Inizia con Dati Demo',
  connectResort: 'Collega il Mio Resort',
  trustNote: 'Nessuna modifica ai tuoi canali di prenotazione. Mantieni il controllo dei tuoi dati.',
},
```

---

### Part 4: Update OnboardingStrip.tsx to Use Translations

**File:** `src/components/landing/OnboardingStrip.tsx`

**Changes needed:**

1. **Import the translation hook:**
```typescript
import { useTranslation } from "@/contexts/LocaleContext";
```

2. **Replace hardcoded strings with translation keys:**

| Current Hardcoded Text | Translation Key |
|------------------------|-----------------|
| `"From signup to real operations"` | `t("onboardingStrip.title")` |
| `"Explore"` | `t("onboardingStrip.step1.title")` |
| `"Demo Mode"` | `t("onboardingStrip.step1.subtitle")` |
| Step 1 description | `t("onboardingStrip.step1.description")` |
| `"Add Your Basics"` | `t("onboardingStrip.step2.title")` |
| Step 2 description | `t("onboardingStrip.step2.description")` |
| `"Go Live"` | `t("onboardingStrip.step3.title")` |
| Step 3 description | `t("onboardingStrip.step3.description")` |
| Footer note | `t("onboardingStrip.footer")` |

---

### Part 5: Add OnboardingStrip Translations to Types and All Language Files

**Add to types.ts:**
```typescript
onboardingStrip: {
  title: string;
  step1: { title: string; subtitle: string; description: string };
  step2: { title: string; subtitle: string; description: string };
  step3: { title: string; subtitle: string; description: string };
  footer: string;
};
```

**Then add translations to all 4 language files (en, tl, de, it).**

---

### Summary of Changes

| File | Change |
|------|--------|
| `src/lib/i18n/types.ts` | Add new hero keys + new onboardingStrip section |
| `src/lib/i18n/translations/en.ts` | Add new hero + onboardingStrip translations |
| `src/lib/i18n/translations/tl.ts` | Add new hero + onboardingStrip translations (Tagalog) |
| `src/lib/i18n/translations/de.ts` | Add new hero + onboardingStrip translations (German) |
| `src/lib/i18n/translations/it.ts` | Add new hero + onboardingStrip translations (Italian) |
| `src/components/landing/HeroSection.tsx` | Import `useTranslation`, replace hardcoded text with `t()` calls |
| `src/components/landing/OnboardingStrip.tsx` | Import `useTranslation`, replace hardcoded text with `t()` calls |

### Result
After these changes, switching the language in the header will correctly update the HeroSection and OnboardingStrip content to Tagalog, German, or Italian.

