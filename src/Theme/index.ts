export const HogwartsHouseColors = {
  gryffindor: "#732D2D",
  slytherin: "#094036",
  ravenclaw: "#1B3659",
  hufflePuff: "#8C5818",

  gryffindorDark: "#391616",
  slytherinDark: "#04201b",
  ravenclawDark: "#0d1b2c",
  hufflePuffDark: "#462c0c",
}

export default {
  colors: {
    surface900: "#333333",
    surface800: "#666666",
    surface700: "#999999",
    surface600: "#CCCCCC",
    surface500: "#DDDDDD",
    surface400: "#DEDEDE",
    surface300: "#EEEEEE",
    surface200: "#EDEDED",
    surface100: "#F2F2F2",
    
    background: "#DEDEDE",

    textColor: "#2B2B2B",

    gold: "#aa8855",

    ...HogwartsHouseColors
  }
}