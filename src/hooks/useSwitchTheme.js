import { useContext } from 'react'

import { themeSwitchContext } from 'styles/mui-theme/mui-theme'

export default function useSwitchTheme() {

    const { switchTheme, darkMode } = useContext(themeSwitchContext)

    return {
        switchTheme, darkMode
    }
}







/* ✨ Way to use ✨

import useMuiTheme from 'hooks/useMuiTheme'

export default function (){

    const {darkMode, switchTheme} = useMuiTheme()

    return(

        ...

    )

}

*/


