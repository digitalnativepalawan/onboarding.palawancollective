

## Plan: Make Footer and Setup Page Dynamic from Database

### Problem
When you add a new app link in Admin Settings, it saves to the `app_links` table in the database. However, the **Footer** and **Setup** page both use hardcoded arrays of links, so new apps never appear there.

### Root Cause
- **Footer** has a hardcoded `productLinks` array (Dashboard, Occupancy, Timesheet, Orders, OTR Scan)
- **Setup** has a hardcoded `APPS` array (same 5 apps with icons and URLs)
- Neither component queries the `app_links` database table

---

### Solution

#### 1. Footer -- Fetch links from database

**File:** `src/components/landing/Footer.tsx`

- Remove the hardcoded `productLinks` array
- Fetch from `app_links` table using Supabase, ordered by `display_order`
- Display all links dynamically in the Products column
- Show a loading skeleton or empty state while fetching

#### 2. Setup -- Fetch links from database

**File:** `src/pages/Setup.tsx`

- Remove the hardcoded `APPS` array
- Fetch from `app_links` table on mount
- Map the database `icon` field (e.g., "Clock", "UtensilsCrossed") to the actual Lucide icon components using a lookup map
- Keep the "Backoffice Dashboard" detection logic (match by name or add a flag) for the "Default" badge and recommendation
- Show a loading state while fetching

#### 3. Icon Mapping Utility

**New file:** `src/lib/iconMap.ts`

Create a simple mapping from icon name strings (stored in the database) to Lucide React icon components. This is needed because the database stores icon names as strings like "Clock", "UtensilsCrossed", etc.

```
LayoutDashboard -> LayoutDashboard component
Clock -> Clock component
UtensilsCrossed -> UtensilsCrossed component
Package -> Package component
ScanLine -> ScanLine component
...etc (all icons from AdminSettingsModal ICON_OPTIONS)
```

---

### Technical Details

**Footer changes:**
- Use `useEffect` + `useState` to fetch `app_links` on mount
- Replace `productLinks.map(...)` with the fetched data
- Each link opens in a new tab with the external URL from the database

**Setup changes:**
- Fetch `app_links` on mount, store in state
- Map each database record to the existing `App` interface shape using the icon lookup
- The first app (or the one named "Backoffice Dashboard") gets the "Default" badge
- The `?mode=` parameter logic stays the same

**Icon map:**
- A record mapping string names to Lucide components
- Fallback to `LayoutDashboard` for unknown icon names
- Used by both Setup and potentially other components

---

### Summary of Changes

| File | Change |
|------|--------|
| `src/lib/iconMap.ts` | New -- map icon name strings to Lucide components |
| `src/components/landing/Footer.tsx` | Fetch product links from `app_links` table instead of hardcoded array |
| `src/pages/Setup.tsx` | Fetch apps from `app_links` table instead of hardcoded array, use icon map |

### Result
After these changes, any app link added through Admin Settings will automatically appear in both the Footer and the Setup wizard.

