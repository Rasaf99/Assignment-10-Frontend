import useMuiTheme from 'hooks/useSwitchTheme';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function SHOW_TOAST({ infoMsg, successMsg, warningMsg, errorMsg }) {


    const { darkMode } = useMuiTheme()


    return (
        <>

            {
                (() => {

                    if (infoMsg) {

                        return (

                            toast.info(infoMsg)

                        )
                    }

                    else if (successMsg) {

                        return (

                            toast.success(successMsg)

                        )
                    }


                    else if (warningMsg) {

                        return (

                            toast.warning(successMsg)

                        )
                    }


                    else if (errorMsg) {

                        return (

                            toast.error(errorMsg)

                        )
                    }

                    else {
                        return null
                    }

                })()
            }



            {/* ToastContainer */}
            {darkMode ?

                <ToastContainer theme='dark' position='bottom-right' />

                :

                <ToastContainer position='bottom-right' />
            }



        </>
    )
}