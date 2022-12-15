
// date-fns
import { format} from 'date-fns'


// style
import {FOOTER_WRAPPER} from './style'



// ✅ functional component
export default function FOOTER() {

    //current year
    const year = format(new Date(), 'yyyy');


    return (

        <FOOTER_WRAPPER>

            <p>
                <span > &copy;</span> {` ${year}`}
            </p>

        </FOOTER_WRAPPER>
    )
}