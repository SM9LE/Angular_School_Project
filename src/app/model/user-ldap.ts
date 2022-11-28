// Agit comme un constructeur UserLdap

export interface UserLdap
{
  login: string;
  nom: string;
  prenom: string;
  nomComplet: string;
  motDePasse: string;
  mail: string;
  role: string;
  employeNumero: number;
  employeNiveau: number;
  dateEmbauche: string;
  publishedId: number;
  active: boolean;
}
