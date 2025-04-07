import { useState, useEffect } from 'react';

function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(false); // Your authentication logic here
  }, []);

  return isAuthenticated;
}

export default useAuth;
