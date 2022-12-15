



const whole_component_css = {
    marginTop:'2rem',

    // centering the the content horizontally
    display: 'grid',
    justifyItems: 'center'
}


const all_contents_css = {
    padding: '1rem',

    backgroundColor: 'backgroundVariation.v1',
    boxShadow: 1,

    borderRadius: '1rem',

    display: 'grid',
    justifyItems: 'center',
    textAlign: 'center',
    gap: '2rem',
}


const poster_image_wrapper_css = {

    boxShadow: 4,

    padding: '0.5rem',
    borderRadius:'1rem',

    // centering the the content horizontally and vertically
    display: 'grid',
    justifyItems: 'center',
    alignItems:'center'

}



const poster_img_css = {

    objectFit: 'cover',
    borderRadius:'1rem',
    height: { xs: '26rem', sm: '28rem', md: '32rem', lg:'34rem' },
    width: { xs: '16rem', sm: '19rem', md: '22rem', lg:'25rem' },
}

const title_css = {
    marginTop:'1rem',
    marginBottom:'1rem'
}


const everything_without_poster_title_css = {
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr', lg:'1fr 1fr 1fr 1fr' },


    // by default, alignItems is 'stretch', it makes lot of section larger than it needs to be. so, changing to 'start'
    alignItems:'start'


}




const a_info_section_css = {


    width: '18rem',
    minHeight:'8rem',
    padding:'1.5rem',
    backgroundColor: 'backgroundVariation.v2',
    boxShadow: 1,


    borderRadius:3,

    gridTemplateColumns: '1fr',

    position:'relative',


    // centering the the content horizontally & vertically
    display: 'grid',
    justifyItems: 'center',
    alignItems:'center'

}


const info_title_css = {

    position:'absolute',
    top:'-1.5rem',
    left:'-0.5rem',
    padding: '0.5rem',

 
    borderRadius:3,
    
    typography: 'subtitle2',
    fontWeight: 'medium',
    backgroundColor:'backgroundVariation.v3',
    boxShadow:2,
   
}


const info_value_css = {
    padding: '0.5rem',
    typography: 'h6',
}





export { whole_component_css, all_contents_css, poster_image_wrapper_css,  poster_img_css, title_css, everything_without_poster_title_css, a_info_section_css, info_title_css, info_value_css }