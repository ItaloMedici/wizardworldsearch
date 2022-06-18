import Theme from "."
import { HouseEnum } from "../model/House"

export const findHogwartsHouseColor = (house: string | undefined, dark = false) => {
  switch (house) {
    case HouseEnum.gryffindor: return !dark ? Theme.colors.gryffindor : Theme.colors.gryffindorDark
    case HouseEnum.slytherin: return !dark ? Theme.colors.slytherin : Theme.colors.slytherinDark
    case HouseEnum.ravenclaw: return !dark ? Theme.colors.ravenclaw : Theme.colors.ravenclawDark
    case HouseEnum.hufflePuff: return !dark ? Theme.colors.hufflePuff : Theme.colors.hufflePuffDark
    default: return Theme.colors.surface700
  }
}