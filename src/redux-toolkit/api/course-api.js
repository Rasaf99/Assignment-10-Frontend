
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const CourseAPi = createApi({

    reducerPath: "CourseAPi",

    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_BACKEND_HOST/api/v1/course}`),

    tagTypes:['course'],

    endpoints: (builder) => ({


        fetchCourses: builder.query({

            query: () => "/",
            providesTags: ['course']

        }),


        courseDetails: builder.query({

            query: (id) => `/${id}`,
            providesTags: ['course']

        })


    })

})



export const { useFetchCoursesQuery, useCourseDetailsQuery } = CourseAPi


