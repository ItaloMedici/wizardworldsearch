import Theme from "."
import { HouseEnum } from "../model/House"

export const findHogwartsHouseColor = (house: string | undefined) => {
  switch(house) {
    case HouseEnum.gryffindor: return Theme.colors.gryffindor
    case HouseEnum.slytherin: return Theme.colors.slytherin
    case HouseEnum.ravenclaw: return Theme.colors.ravenclaw
    case HouseEnum.hufflePuff: return Theme.colors.hufflePuff
    default: return Theme.colors.surface700
  }
}