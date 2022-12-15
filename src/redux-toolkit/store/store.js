import { configureStore } from '@reduxjs/toolkit'


import { CourseAPi } from 'redux-toolkit/api/course-api'

export const store = configureStore({

  reducer: {

    [CourseAPi.reducerPath]: CourseAPi.reducer
  },


  
  middleware: (getDefaultMiddleware) =>

    getDefaultMiddleware().concat(CourseAPi.middleware)
})

