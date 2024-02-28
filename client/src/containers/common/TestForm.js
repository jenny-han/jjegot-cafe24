import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCustomer } from '../../lib/api/test';

const TestForm = () => {
  const [result, setResult] = useState('');
  useEffect(() => {
    console.log('page load');

    async function fetchData() {
      // You can await here
      const response = await getCustomer();
      // ...
      console.log(response);
      setResult(JSON.stringify(response));
    }
    fetchData();
    // setResult(d);
  });

  return <div>{result}</div>;
};

export default TestForm;
