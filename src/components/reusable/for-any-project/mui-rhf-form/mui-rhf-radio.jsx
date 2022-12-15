

// rhf component
import { Controller } from 'react-hook-form';

// mui component 
import { FormControl, FormLabel, FormHelperText, RadioGroup, FormControlLabel, Radio } from '@mui/material'



// ✅ functional component
export default function MUI_RHF_RADIO({ propertyName, label, control, radioArray }) {



  return (

    <Controller
      name={propertyName}
      control={control}

      /* the defaultValue will be radioArray's first object's value property. */
      defaultValue={`${radioArray[0].value}`}

      rules={{ required: 'You must select an option' }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl>


          {/* In other component, we are using <InputLabel/> but for radio buttons, we need to use <FormLabel/>*/}

          <FormLabel id={propertyName} sx={{textAlign:'left'}}>{label}</FormLabel>

          <RadioGroup
            value={value}
            onChange={onChange}
            error={!!error}
            sx={{ display: 'flex', flexDirection: 'row' }}>
            {

              radioArray.map((radio) => {
                return (
                  <FormControlLabel key={radio.value} value={radio.value} label={radio.label} control={<Radio />} />
                )
              })

            }
          </RadioGroup>


          <FormHelperText sx={{ color: 'error.main', m: 0 }} id={propertyName}>
            {error ? error.message : null}
          </FormHelperText>

        </FormControl>
      )}
    />
  )

}


MUI_RHF_RADIO.defaultProps = {
  variant: 'filled',

}