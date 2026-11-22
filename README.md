# Mindful Memory Moments

Build a fully interactive, mobile-first Progressive Web App (PWA) prototype named "MindCare NER" — an offline-capable, voice-assisted cognitive health and memory companion tailored for elderly dementia patients in the North Eastern Region (NER) of India, featuring zero-PII privacy design and a caregiver tracking dashboard.

### 1. UI/UX & Design System (Elderly-First Accessibility)
- **Theme & Palette:** Warm cream background (#FAF6F0), deep navy headers (#1B365D), high-contrast accessibility buttons, and regional accent colors (Assamese/Naga traditional red and green).
- **Typography & Layout:** Extra-large fonts (minimum body text 18px, headers 28px+), oversized touch targets (minimum 64px height), and clutter-free "One Card per Screen" layout to prevent cognitive overload.
- **Navigation Bar:** Simple bottom tab bar with 3 icons/labels: 🎮 "Play & Learn", ⏰ "Daily Reminders", and 📊 "Caregiver Dashboard".

### 2. Cognitive Games & Expansion Roadmap
- **Current Live Module:** *"Look & Speak: NER Object Recall"* (Voice & Touch recognition for cultural items like Japi Hat, Lal Cha, Gamosa, and Bamboo Basket).
- **Expansion Portfolio:** See [GAME_CONCEPTS_AND_ROADMAP.md](./GAME_CONCEPTS_AND_ROADMAP.md) for 5 additional clinically backed games (Sound & Melody of Home, Market Basket Sorting, Weave & Match, Folk Rhyme Completion, Daily Routine Story Chain) and errorless learning guidelines.

### 3. Feature 1: Working Game Module — "Look & Speak: NER Object Recall"
- **Gameplay Flow:** 
  - Displays a single, massive, crystal-clear high-contrast card showing a familiar North-East cultural item or daily object (e.g., "Japi Hat", "Lal Cha (Red Tea Glass)", "Traditional Gamosa", or "Bamboo Basket").
  - Speaks a warm voice prompt aloud using `window.speechSynthesis` (e.g., "Idhu enna-nu sollunga paapom?" / "Can you name this item?").
- **Interaction Options (Voice + Touch Fallback):**
  - **Voice Input:** A glowing, oversized microphone button. Clicking it or auto-listening uses `webkitSpeechRecognition` to capture speech. It features phonetic fuzzy-matching that accepts the correct local name, synonyms (e.g., "Tea", "Cha", "Lal Cha"), or partial words.
  - **Touch Fallback:** If speech fails or isn't available, display two massive picture cards at the bottom for easy tapping.
- **Zero-Failure Feedback Loop:**
  - **Success:** If correct, show a joyful success animation with celebratory audio praise and a gentle score increment.
  - **Hesitation / Incorrect:** NEVER show a harsh red 'X' or error message. If silent for 7 seconds, trigger a warm audio clue (e.g., "It is red and hot, we drink it in the morning...").

### 3. Feature 2: Voice & Visual Daily Care Reminders
- A dedicated tab showing large, visual reminder cards for daily routines:
  - 💊 **Morning Medicine** (with a picture of a pill strip and a "Taken" check button).
  - 💧 **Hydration / Water** (with a water glass graphic).
  - 🚶 **Evening Walk / Doctor Visit**.
- Includes a toggle for "Voice Alarm Simulation" that speaks the reminder out loud in an Indian English / regional voice.

### 4. Feature 3: Caregiver Insights Dashboard
- A clean analytics tab designed for family members or ASHA health workers:
  - **Engagement Metrics:** Total games played today, average response hesitation latency (in seconds), and weekly consistency score.
  - **Sundowning / Fatigue Indicator:** A simple chart showing peak alertness hours versus evening fatigue.
  - **Privacy Badge:** A clear notice stating: *"100% Privacy-First: Zero personal family photos or private cloud data required."*

### 5. Technical Requirements
- Build as a single-page or multi-tab React app using Tailwind CSS for styling and `lucide-react` for icons.
- Implement state management using React `useState` and `useEffect` so game rounds advance smoothly, scores update live, and reminder checkboxes persist in browser local storage.
- Ensure fully responsive mobile layout that looks and feels like a native Android tablet/smartphone app.



## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
