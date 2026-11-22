# MindCare NER — Cognitive Game Design & Enhancement Roadmap

This document outlines the clinical rationale, cultural integration, and technical implementation plan for expanding the cognitive game suite of **MindCare NER** — an accessible, privacy-first memory companion designed for elderly dementia and MCI (Mild Cognitive Impairment) patients in North Eastern India.

---

## 1. Neurocognitive Game Portfolio

| Game Name | Cognitive Domain | Cultural Anchor (North East India) | Modality |
| :--- | :--- | :--- | :--- |
| **1. Look & Speak** *(Implemented)* | Visual Object Naming & Semantic Recall | Japi, Lal Cha, Gamosa, Bamboo Basket | Voice & Picture Touch |
| **2. Melody of Home** (*Suror Xuwoji*) | Auditory Memory & Reminiscence | *Pepa* horn, Bihu dhol, tea garden bell, mountain rain | Audio playback + Big Icon selection |
| **3. Market Basket Sorting** (*Bazaar Tokri*) | Executive Function & Semantic Categorization | Bhut Jolokia, Bamboo Shoots, Silk Spindle, Mustard Oil | Drag-to-Basket or Dual Button Tap |
| **4. Weave & Match** (*Rang Birang*) | Visuospatial & Pattern Recognition | Assamese *Gamosa* borders, Naga shawl motifs | Visual pattern matching |
| **5. Folk Rhyme Completion** (*Puroni Kotha*) | Procedural Memory & Verbal Fluency | Traditional regional nursery rhymes & proverbs | Spoken completion or Sentence choice |
| **6. Daily Routine Story Chain** (*Din-Lipi*) | Time Orientation & ADL (Activities of Daily Living) | Morning tea $\to$ Bath $\to$ Midday nap $\to$ Evening lamp | Sequential card ordering |

---

## 2. Game Specifications & Gameplay Flows

### Game 1: "Melody of Home" (Auditory & Reminiscence Recall)
* **Goal:** Evoke positive emotional memories and lower sundowning agitation through familiar regional sounds.
* **Mechanism:**
  1. The app plays a 4-to-6 second crystal-clear acoustic sound clip (e.g., sound of a tea garden gong, bamboo flutes, rainfall on a tin roof).
  2. Voice prompt: *"What sound is greeting our ears today?"*
  3. Two large visual answer cards are presented with high-contrast illustrations and text.
  4. Response can be spoken or tapped.

### Game 2: "Market Basket Sorting" (Categorization & Executive Function)
* **Goal:** Exercise cognitive sorting and daily household association.
* **Mechanism:**
  1. Two large target baskets appear: **"Kitchen / Cooking"** and **"Craft & Home"**.
  2. An everyday item appears on screen (e.g., Ginger root, Bamboo Shoots, Eri Silk skein).
  3. Prompt: *"Does this belong in our cooking basket or our weaving basket?"*
  4. Patient taps the target basket or simply speaks the destination.

### Game 3: "Weave & Match" (Visuospatial Pattern Completion)
* **Goal:** Stimulate spatial orientation and fine pattern discernment.
* **Mechanism:**
  1. A central band displays an authentic North Eastern textile motif with one segment empty.
  2. Two distinct motif options are displayed below.
  3. Elder selects the matching tile to complete the traditional weave.

---

## 3. Clinical "Errorless Learning" Guidelines

To prevent anxiety, catastrophic reactions, or agitation:
1. **Never Show Error Banners or Red Crosses:** Incorrect guesses trigger softer audio guidance rather than failure states.
2. **Multi-Stage Clue Hierarchy:**
   - **T = 0s:** Initial gentle question.
   - **T = 7s:** Ambient sound cue or functional clue (e.g., *"We drink it in the morning to feel warm"*).
   - **T = 14s:** Simplified choice reduction (if 3 choices were shown, fade down to the correct one).
   - **T = 20s:** Friendly self-answering confirmation: *"That is our Lal Cha! Let's say it together: Lal Cha."*
3. **Pacing:** Response evaluation is latency-tolerant; elders are given ample time without countdown timers.

---

## 4. Caregiver Analytics & Clinical Telemetry

1. **Sundowning Index:**
   - Compares morning engagement latency (8:00 AM – 11:00 AM) against evening latency (5:00 PM – 8:00 PM).
   - Significant latency spikes in the evening help family members and ASHA health workers spot early-stage sundowning fatigue.
2. **Input Modality Drift:**
   - Tracks the ratio of Voice Answers vs. Touch Fallbacks over 14-day and 30-day windows.
   - Gradual drops in voice attempts can indicate changes in verbal processing ability.
3. **Zero-PII Local Data Architecture:**
   - All session timestamps and latency scores remain strictly in client `localStorage`.
   - Caregivers can export a summary report during community clinic visits without internet dependencies.
