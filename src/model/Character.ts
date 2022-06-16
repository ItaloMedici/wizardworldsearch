export interface Character {
  name: string,
  alternate_names: [],
  species: any,
  gender: "male" | "female" | undefined,
  house: "Gryffindor" | "Slytherin" | "HufflePuff" | "Ravenclaw",
  dateOfBirth: Date,
  yearOfBirth: number,
  wizard: boolean,
  ancestry: string,
  eyeColour: string,
  hairColour: string,
  wand: {
    wood: string,
    core: string,
    length: number
  },
  patronus: string,
  hogwartsStudent: boolean,
  hogwartsStaff: boolean,
  actor: string,
  alternate_actors: [],
  alive: boolean,
  image: string
}