import { Character } from "../model/Character"

export declare global {
   namespace ReactNavigation {
    interface RootParamList {
      Home: undefined,
      Character: {
        character: Character
      }
    }
   }
}