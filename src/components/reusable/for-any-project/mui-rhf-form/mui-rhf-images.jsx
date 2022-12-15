


// rhf
import { useForm } from 'react-hook-form';

// icon
import PhotoCamera from '@mui/icons-material/PhotoCamera';


// components
import { Button, Typography, ImageList, ImageListItem} from '@mui/material'



// ✅ functional component
export default function MUI_RHF_IMAGES({label, selectedImages, setSelectedImages, selectedImagesLink, setSelectedImagesLink, validation_variables_obj}){


  // useForm
  const { register, formState } = useForm({ mode: 'onChange' })


 
    // function to handle all the selected images and their preview link
   const handleSelectedImages = (e) => {
      
      const selectedFiles = e.target.files
      const selectedFilesArray = Array.from(selectedFiles)


      setSelectedImages([...selectedImages, ...selectedFilesArray]);

      const imagesLinkArray = selectedFilesArray.map((file) => {

        return {
          link: URL.createObjectURL(file),
          name: file.name
        }

      })

      setSelectedImagesLink([...selectedImagesLink, ...imagesLinkArray]);
            
    


      
      // checking for duplicated image
      if (selectedImages.length !== 0){

      selectedImages.map((alreadySelected) => {

        selectedFilesArray.map((tryingToSelect) => {

            if(alreadySelected.name === tryingToSelect.name) {

              setSelectedImages(selectedImages.filter((image) => image !== tryingToSelect))
            }

          })

        })

      }


   

      // checking for duplicated link
      if (selectedImagesLink.length !== 0){

        selectedImagesLink.map((alreadySelected) => {


          imagesLinkArray.map((tryingToSelect) => {

        
            if(alreadySelected.name === tryingToSelect.name) {

              setSelectedImagesLink(selectedImagesLink.filter((link) => link !== tryingToSelect))

            }

          })

        })

      }

   }


    // function to delete an specific image from all the selected images
    function handleDeleteAnImageFromSelectedImages(deleteThis) {

      setSelectedImages(selectedImages.filter((image) => image.name !== deleteThis.name))

      setSelectedImagesLink(selectedImagesLink.filter((linkObj) => linkObj !== deleteThis))
    }


  
    
    // rules for form validation 
    const images_validation_rules = {

      validate: () => {

        // ✨ nothing to validate when no file is selected
        if (selectedImages.length === 0) return;



        // ✨ limit
        if((Object.hasOwn(validation_variables_obj, 'accepted_total_files'))) {

          const accepted_total_files = validation_variables_obj.accepted_total_files

          let file_limit_error = false

          if (selectedImages.length > accepted_total_files) {
            file_limit_error = true
          }
  
          if (file_limit_error) {
  
            
            setSelectedImages([])
            setSelectedImagesLink([])
  
            return 'You can not select more than 3 files.'
          }
    
        }


        // ✨ file format
        if((Object.hasOwn(validation_variables_obj, 'accepted_file_formats'))) {

          const accepted_file_formats = validation_variables_obj.accepted_file_formats

          let file_format_error = false

          const array_of_format_of_uploaded_files = selectedImages.map((item) => {

            return item.name.split('.')[1]
          })


          array_of_format_of_uploaded_files.map((uploaded_file_format) => {

            if (!accepted_file_formats.includes(uploaded_file_format)) {
              return file_format_error = true
            }
          })


          if (file_format_error) {

  
            setSelectedImages([])
            setSelectedImagesLink([])

            return 'All files must have valid format'
          }

    
        }


        // ✨ file size
        if((Object.hasOwn(validation_variables_obj, 'accepted_maximum_file_size'))) {

          const accepted_maximum_file_size = validation_variables_obj.accepted_maximum_file_size

          let file_size_error = false

          const array_of_size_of_uploaded_files = selectedImages.map((item) => {
  
            return Math.round(item.size / 1024)
          })
  
  
          array_of_size_of_uploaded_files.map((uploaded_file_size) => {
  
            if (uploaded_file_size > accepted_maximum_file_size) {
              return file_size_error = true
            }
  
          })
  
  
          if (file_size_error) {
  
   
            setSelectedImages([])
            setSelectedImagesLink([])
  
            return 'File size can not be larger than 500kb'
          }


    
        }



        /* ⚠️⚠️⚠️ couldn't make logic to check all the selected images dimension! In the MUI_RHF_IMAGE component, I have done it when I was working with just one image. */

      }
  
        
    }
    




    return(

     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: '1rem' }}>

        {/*🚀 Upload images */}
        <Button component="label" variant="outlined" startIcon={<PhotoCamera />}>
         {label}

        <input style={{ width: '0px' }}
          {...register('images', { ...images_validation_rules })}
          type="file" multiple
          onInput={handleSelectedImages}
        />

        </Button>

        {/* images upload - error */}
        {formState.errors.images &&
        <Typography variant='p' sx={{ color: 'error.main', textAlign: 'center' }}>{formState.errors.images.message}</Typography>
        }


        {/* image upload - previewing */}
        {!formState.errors.images && selectedImagesLink.length > 0 &&

        <div style={{ display: 'flex', justifyContent: 'center' }}>

          <ImageList sx={{ width: '208px', height: '150px' }} cols={2} gap={8}>
            {selectedImagesLink.map((item) => (
              <ImageListItem key={item.link}>
                <img
                  src={item.link}
                  alt=''
                />

                <Button onClick={() => handleDeleteAnImageFromSelectedImages(item)} size="small">
                  Remove
                </Button>
              </ImageListItem>
            ))}
          </ImageList>

        </div>

        }

        
     </div>

    )

}