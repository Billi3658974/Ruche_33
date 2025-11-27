export enum UserRole {
  ABEILLE = 'Abeille Active',
  BUTINEUR = 'Butineur',
  VISITEUR = 'Visiteur'
}

export enum VoteType {
  POUR = 'Pour',
  CONTRE = 'Contre',
  ABSTENTION = 'Abstention'
}

export interface Proposal {
  id: string;
  title: string;
  description: string;
  author: string;
  date: string;
  category: 'Action' | 'Gouvernance' | 'Logistique';
  status: 'En cours' | 'Adoptée' | 'Rejetée';
  votes: {
    pour: number;
    contre: number;
    abstention: number;
  };
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  type: 'Réunion' | 'Action' | 'Formation';
}