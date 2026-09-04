# Pryma Solutions — weboldal kit

Három kattintható képernyő, kizárólag a design system saját komponenseiből. Nyisd meg az `index.html`-t; a menü és minden CTA az oldalon belül navigál.

| Fájl | Felület |
|---|---|
| `index.html` | Váz: NavBar + router + Footer |
| `HomeScreen.jsx` | Hero, három szolgáltatás, három munkafázis, „miért egy emberrel” szakasz, záró sáv |
| `ServicesScreen.jsx` | Szolgáltatások, három tipikus csomag, „jó tudni” lista |
| `ContactScreen.jsx` | Kapcsolati űrlap validációval és sikeres állapottal |
| `shared.jsx` | Layout helperek (Container, Section, SectionHead), FeatureTile, StepCard, CheckList |

## Szabályok, amiket a kit követ

- Nézetenként egy elsődleges pink pill. Minden más secondary, outline vagy ghost.
- A hero és a kapcsolati oldal `MeshBackdrop`-on áll; a köztes szakaszok sima navy háttéren, hogy a hangulat ritka maradjon.
- Nincs bejelentkezés és nincsenek social linkek — egyszemélyes, induló vállalkozás.
- Nincs kitalált referencia vagy statisztika: csak az szerepel az oldalon, ami valóban igaz.
- Szakaszritmus 96px, összetartozó sávok között 48px.
- A szövegek a márkahangon írt kiindulópontok — éles használat előtt nézd át.
