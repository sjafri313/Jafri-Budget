// ─────────────────────────────────────────────────────────────
//  Household Budget — configuration
//  Fill in ONE backend: Supabase (preferred) or Firebase.
//  If both are empty, the app runs in local-only mode (no sharing).
// ─────────────────────────────────────────────────────────────
window.APP_CONFIG = {
  supabase: {
    url: "https://fdnrzlwnxhnsaswoowck.supabase.co",
    anonKey: "sb_publishable_xmOWaVvOgDfC-LNVhBGjJA_H_vsbY21"
  },

  firebase: {
    apiKey: "", authDomain: "", projectId: "",
    storageBucket: "", messagingSenderId: "", appId: ""
  },

  householdId: "jafri-zaidi",

  users: {
    imroze:  { name: "Imroze Jafri",  email: "syedijafri313@gmail.com" },
    nooriah: { name: "Nooriah Zaidi", email: "786nooriah@gmail.com" }
  },

  categories: ["Utilities", "Credit Card", "Food", "Gas", "Education", "Investments", "Miscellaneous"],

  currency: "USD"
};
