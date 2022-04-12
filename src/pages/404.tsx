import React from 'react'
import Error from 'next/error'

const NotFoundPage = () => 

   (
      <Error
        title={`"Error Page (404)" is not set in Sanity, or the page data is missing`}
        statusCode="Data Error"
      />
    );


export default NotFoundPage;
