import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import ErrorMessage from '../errorMessage/ErrorMessage';

const Page404 = () => {
   return (
      <div>
         <Helmet>
            <meta name="description" content="Page with error 404" />
            <title>404 | Something went wrong...</title>
         </Helmet>

         <ErrorMessage />
         <p style={{ textAlign: 'center', fontSize: '24px' }}>Oops! Page doesn't exist</p>
         <Link
            style={{ display: 'block', textAlign: 'center', fontWeight: 'bold', fontSize: '24px', marginTop: '25px' }}
            to="/"
         >
            Back to main page
         </Link>
      </div>
   );
};

export default Page404;
