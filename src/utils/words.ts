export type Challenge = {
  id: number;
  word: string;
  tip: string;
};

export const WORDS: Challenge[] = [
  { id: 1, word: "CSS", tip: "Linguagem de Estilos" },
  { id: 2, word: "REACT", tip: "Biblioteca para criar interfaces Web" },
  { id: 3, word: "HTML", tip: "Linguagem de marcação" },
  {
    id: 4,
    word: "JavaScript",
    tip: "Uma das Linguagens de programação mais utilizada no Mundo",
  },
  {
    id: 5,
    word: "TypeScript",
    tip: "Serve para Adicionar tipagem ao JavaScript",
  },
];
