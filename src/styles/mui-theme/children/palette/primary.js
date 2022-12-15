/* Commenting all the colors name */
// import { blueGrey, blueGrey, red, pink, orange, deepOrange, brown, blue, lightBlue, purple, indigo, cyan,  green, lightGreen, teal, yellow, amber, lime } from '@mui/material/colors';

import { teal} from '@mui/material/colors';





const light_1 = `hsl(171, 100%, 92%)`
const light_2 = `hsl(171, 100%, 87%)`
const light_3 = `hsl(171, 100%, 82%)`


const dark_1 = `hsl(170, 100%, 7%)`
const dark_2 = 'hsl(170, 100%, 11%)'
const dark_3 = 'hsl(170, 100%, 15%)'



export function theme_palette_primary(darkModeVariable) {

   

    return {

        primary: {


            light: darkModeVariable ? light_1 : dark_3,
            main: darkModeVariable ? light_2 : dark_2,
            dark: darkModeVariable ? light_3 : dark_1,
            contrastText: darkModeVariable ? 'rgba(0, 0, 0, 0.87)' : '#fff',


            opposite_theme: {

                light: darkModeVariable ? dark_3 : light_1,
                main: darkModeVariable ? dark_2 : light_2,
                dark: darkModeVariable ? dark_1 : light_3,
                contrastText: darkModeVariable ? '#fff' : 'rgba(0, 0, 0, 0.87)',
            },


            static_variant: {

                light_1: light_1,
                light_2: light_2,
                light_3: light_3,

                dark_1: dark_1,
                dark_2: dark_2,
                dark_3: dark_3
            }


        }


    }

}