import { deepOrange, teal } from '@mui/material/colors';





export function brandColor(darkModeVariable) {


  return {

    brand: {
      // type 1
      t1: {
        v1: darkModeVariable ? teal[50] : teal[800],
        v2: darkModeVariable ? teal[100] : teal[700],
        v3: darkModeVariable ? teal[200] : teal[600],


        opp: {
          v1: darkModeVariable ? teal[800] : teal[50],
          v2: darkModeVariable ? teal[700] : teal[100],
          v3: darkModeVariable ? teal[600] : teal[200],

        }
      },


      // type 2
      t2: {
        v1: darkModeVariable ? deepOrange[50] : deepOrange[800],
        v2: darkModeVariable ? deepOrange[100] : deepOrange[700],
        v3: darkModeVariable ? deepOrange[200] : deepOrange[600],



        opp: {
          v1: darkModeVariable ? deepOrange[800] : deepOrange[50],
          v2: darkModeVariable ? deepOrange[700] : deepOrange[100],
          v3: darkModeVariable ? deepOrange[600] : deepOrange[200],

        }
      },

    },


    // specific color
    brand_light: {

      // type 1
      t1: {
        v1: teal[50],
        v2: teal[100],
        v3: teal[200],
      },

      // type 2
      t2: {
        v1: deepOrange[50],
        v2: deepOrange[100],
        v3: deepOrange[200],
      }
    },


    brand_dark: {

      // type 1
      t1: {
        v1: teal[800],
        v2: teal[700],
        v3: teal[600],
      },

      // type 2
      t2: {
        v1: deepOrange[800],
        v2: deepOrange[700],
        v3: deepOrange[600],
      }
    },


  }

}