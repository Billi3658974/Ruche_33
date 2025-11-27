import { Proposal, Event } from './types';

export const MOCK_PROPOSALS: Proposal[] = [
  {
    id: '1',
    title: "Blocage symbolique de la préfecture",
    description: "Organisation d'une action non-violente devant la préfecture pour dénoncer l'inaction climatique et sociale. Besoin de 50 abeilles.",
    author: "Ruche Bordeaux Centre",
    date: "2023-10-25",
    category: "Action",
    status: "En cours",
    votes: { pour: 45, contre: 2, abstention: 5 }
  },
  {
    id: '2',
    title: "Achat groupé de matériel de sonorisation",
    description: "Investissement dans une enceinte autonome pour les assemblées populaires. Budget estimé : 400€.",
    author: "Comité Logistique",
    date: "2023-10-20",
    category: "Logistique",
    status: "Adoptée",
    votes: { pour: 120, contre: 10, abstention: 15 }
  }
];

export const MOCK_EVENTS: Event[] = [
  {
    id: '1',
    title: "Assemblée Générale Extraordinaire",
    date: "2023-11-05T18:00:00",
    location: "Salle des Fêtes, Bègles",
    description: "Renouvellement des référents tournants et vote du budget mensuel.",
    type: "Réunion"
  },
  {
    id: '2',
    title: "Atelier Constituant",
    date: "2023-11-12T14:00:00",
    location: "Place de la Victoire, Bordeaux",
    description: "Lecture critique de la constitution et rédaction de cahiers de doléances.",
    type: "Formation"
  },
  {
    id: '3',
    title: "Maraude Solidaire",
    date: "2023-11-15T20:00:00",
    location: "Gare Saint-Jean",
    description: "Distribution de repas chauds et duvets.",
    type: "Action"
  }
];
