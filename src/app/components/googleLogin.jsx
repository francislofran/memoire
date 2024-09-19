

import { useState } from 'react';
import { auth, provider } from '../../firebaseConfig';
import { signInWithPopup } from 'firebase/auth';

const GoogleLogin = () => {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user); // L'utilisateur est connecté, sauvegarde les infos
      console.log(result.user);
    } catch (error) {
      console.error("Erreur lors de la connexion : ", error);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <h1>Bienvenue, {user.displayName}</h1>
          <img src={user.photoURL} alt="Photo de profil" />
        </div>
      ) : (

        <button onClick={handleLogin}
        className=""
        >
          Google
     
        </button>
      )}
    </div>
  );
};

export default GoogleLogin;
