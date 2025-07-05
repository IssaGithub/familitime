export interface Card {
  id: number;
  type: 'herzensfrage' | 'liebesaktion' | 'lustige-aufgabe';
  text: string;
  icon: string;
}

export const cards: Card[] = [
  // Herzensfragen
  {
    id: 1,
    type: 'herzensfrage',
    text: 'Wofür bist du gerade dankbar?',
    icon: '💝'
  },
  {
    id: 2,
    type: 'herzensfrage',
    text: 'Was war dein schönster Moment heute?',
    icon: '💝'
  },
  {
    id: 3,
    type: 'herzensfrage',
    text: 'Was liebst du besonders an Mama/Papa/Geschwister?',
    icon: '💝'
  },
  {
    id: 4,
    type: 'herzensfrage',
    text: 'Wann hast du dich zuletzt richtig geliebt gefühlt?',
    icon: '💝'
  },
  {
    id: 5,
    type: 'herzensfrage',
    text: 'Was tut dir gut, wenn du traurig bist?',
    icon: '💝'
  },
  {
    id: 6,
    type: 'herzensfrage',
    text: 'Erzähle von einem Moment, der dein Herz berührt hat.',
    icon: '💝'
  },
  {
    id: 7,
    type: 'herzensfrage',
    text: 'Welcher Mensch hat dich heute zum Lächeln gebracht?',
    icon: '💝'
  },
  {
    id: 8,
    type: 'herzensfrage',
    text: 'Was macht unsere Familie besonders?',
    icon: '💝'
  },
  {
    id: 9,
    type: 'herzensfrage',
    text: 'Wofür möchtest du dich bei jemandem bedanken?',
    icon: '💝'
  },
  {
    id: 10,
    type: 'herzensfrage',
    text: 'Was ist dein größter Wunsch für unsere Familie?',
    icon: '💝'
  },
  {
    id: 11,
    type: 'herzensfrage',
    text: 'Womit hilfst du gerne anderen?',
    icon: '💝'
  },
  {
    id: 12,
    type: 'herzensfrage',
    text: 'Was machst du am liebsten zusammen mit der Familie?',
    icon: '💝'
  },
  {
    id: 13,
    type: 'herzensfrage',
    text: 'Wann fühlst du dich am sichersten und geborgensten?',
    icon: '💝'
  },
  {
    id: 14,
    type: 'herzensfrage',
    text: 'Was magst du an dir selbst besonders gerne?',
    icon: '💝'
  },
  {
    id: 15,
    type: 'herzensfrage',
    text: 'Welcher Ort macht dich glücklich?',
    icon: '💝'
  },

  // Liebesaktionen
  {
    id: 16,
    type: 'liebesaktion',
    text: 'Umarme die Person rechts neben dir 10 Sekunden lang.',
    icon: '🤗'
  },
  {
    id: 17,
    type: 'liebesaktion',
    text: 'Sag jemandem ein ehrliches Kompliment.',
    icon: '🤗'
  },
  {
    id: 18,
    type: 'liebesaktion',
    text: 'Zeig mit einer Geste, wie sehr du deine Familie magst.',
    icon: '🤗'
  },
  {
    id: 19,
    type: 'liebesaktion',
    text: 'Male gemeinsam mit einem Familienmitglied ein kleines Herz auf ein Blatt.',
    icon: '🤗'
  },
  {
    id: 20,
    type: 'liebesaktion',
    text: 'Gib jedem am Tisch eine liebevolle Berührung (Händedruck, Schulterklopfen).',
    icon: '🤗'
  },
  {
    id: 21,
    type: 'liebesaktion',
    text: 'Flüstere jemandem etwas Nettes ins Ohr.',
    icon: '🤗'
  },
  {
    id: 22,
    type: 'liebesaktion',
    text: 'Mache eine Verbeugung vor deiner Familie als Zeichen der Wertschätzung.',
    icon: '🤗'
  },
  {
    id: 23,
    type: 'liebesaktion',
    text: 'Lege deine Hand auf dein Herz und sage: "Ich hab euch lieb".',
    icon: '🤗'
  },
  {
    id: 24,
    type: 'liebesaktion',
    text: 'Schreibe mit dem Finger "Ich liebe dich" in die Luft.',
    icon: '🤗'
  },
  {
    id: 25,
    type: 'liebesaktion',
    text: 'Steh auf und verteile Küsschen auf die Wangen.',
    icon: '🤗'
  },
  {
    id: 26,
    type: 'liebesaktion',
    text: 'Halte die Hände von zwei Personen gleichzeitig.',
    icon: '🤗'
  },
  {
    id: 27,
    type: 'liebesaktion',
    text: 'Schaue jedem tief in die Augen und lächle.',
    icon: '🤗'
  },
  {
    id: 28,
    type: 'liebesaktion',
    text: 'Umarme dich selbst und sag: "Ich bin wertvoll".',
    icon: '🤗'
  },
  {
    id: 29,
    type: 'liebesaktion',
    text: 'Erzähle, was du an jedem Familienmitglied schätzt.',
    icon: '🤗'
  },
  {
    id: 30,
    type: 'liebesaktion',
    text: 'Gib jemandem einen High-Five und sage "Du bist toll!".',
    icon: '🤗'
  },

  // Lustige Aufgaben
  {
    id: 31,
    type: 'lustige-aufgabe',
    text: 'Alle machen gleichzeitig ein Herz mit den Händen.',
    icon: '🎉'
  },
  {
    id: 32,
    type: 'lustige-aufgabe',
    text: 'Erfindet zusammen ein Familien-Geheimzeichen.',
    icon: '🎉'
  },
  {
    id: 33,
    type: 'lustige-aufgabe',
    text: 'Tanzt 30 Sekunden einen "Freude-Tanz" im Kreis.',
    icon: '🎉'
  },
  {
    id: 34,
    type: 'lustige-aufgabe',
    text: 'Macht eine Ketten-Umarmung (alle umarmen sich nacheinander).',
    icon: '🎉'
  },
  {
    id: 35,
    type: 'lustige-aufgabe',
    text: 'Singt zusammen ein Lied, das euch glücklich macht.',
    icon: '🎉'
  },
  {
    id: 36,
    type: 'lustige-aufgabe',
    text: 'Macht alle das gleiche Gesicht wie die Person links von euch.',
    icon: '🎉'
  },
  {
    id: 37,
    type: 'lustige-aufgabe',
    text: 'Klatscht im Takt und sagt reihum: "Ich bin froh, dass ihr da seid!"',
    icon: '🎉'
  },
  {
    id: 38,
    type: 'lustige-aufgabe',
    text: 'Macht eine Familienstatue: Alle stehen zusammen und "frieren" ein.',
    icon: '🎉'
  },
  {
    id: 39,
    type: 'lustige-aufgabe',
    text: 'Alle hüpfen 5 Mal auf einem Bein und rufen "Hurra!".',
    icon: '🎉'
  },
  {
    id: 40,
    type: 'lustige-aufgabe',
    text: 'Macht einen Familien-Rap: Jeder sagt einen Reim auf "Familie".',
    icon: '🎉'
  },
  {
    id: 41,
    type: 'lustige-aufgabe',
    text: 'Stellt gemeinsam das Wort "LIEBE" mit euren Körpern dar.',
    icon: '🎉'
  },
  {
    id: 42,
    type: 'lustige-aufgabe',
    text: 'Macht eine Menschenpyramide (sicher und langsam!).',
    icon: '🎉'
  },
  {
    id: 43,
    type: 'lustige-aufgabe',
    text: 'Alle kichern gleichzeitig 10 Sekunden lang.',
    icon: '🎉'
  },
  {
    id: 44,
    type: 'lustige-aufgabe',
    text: 'Macht einen Familien-Foto-Moment: Alle lächeln und sagen "Käse".',
    icon: '🎉'
  },
  {
    id: 45,
    type: 'lustige-aufgabe',
    text: 'Erfindet einen neuen Familiengruß mit Handbewegung.',
    icon: '🎉'
  },
  {
    id: 46,
    type: 'lustige-aufgabe',
    text: 'Alle machen gleichzeitig ihr schönstes Lächeln.',
    icon: '🎉'
  },
  {
    id: 47,
    type: 'lustige-aufgabe',
    text: 'Bildet eine Herz-Form mit euren Händen über euren Köpfen.',
    icon: '🎉'
  },
  {
    id: 48,
    type: 'lustige-aufgabe',
    text: 'Macht eine Polonaise durch das Zimmer.',
    icon: '🎉'
  },
  {
    id: 49,
    type: 'lustige-aufgabe',
    text: 'Alle rufen gleichzeitig: "Wir sind eine super Familie!"',
    icon: '🎉'
  },
  {
    id: 50,
    type: 'lustige-aufgabe',
    text: 'Macht einen Familien-Countdown: "3-2-1 WIR SIND TOLL!"',
    icon: '🎉'
  }
];

export function shuffleCards(): Card[] {
  const shuffled = [...cards];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function getCardsByType(type: Card['type']): Card[] {
  return cards.filter(card => card.type === type);
} 