import {
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
    onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const history = useHistory();

    const [user, setUser] = useState();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();

    const provider = new GoogleAuthProvider();

    const handleRegistration = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password should be at least 6 character');
            return;
        };
        createUserWithEmailAndPassword(auth, name, email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                saveUser(user.email, user.name);
                setError('');
                alert('Registration Complete');
                history.push('/signin');
            })
            .catch(error => {
                setError(error.message);
            });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
                console.log(result.user);
                setError('');
                alert('Login Success');
                history.push('/home');
            })
            .catch(error => {
                setError(error.message);
            });
    }

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                saveUser(user.email, user.displayName);
                setError('');
                alert('Login Success');
                history.push('/home');
            }).catch((error) => {
                setError('');
            });
    }

    const logOut = () => {
        signOut(auth).then(() => {
            setUser('');
        });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, []);

    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    useEffect(() => {
        const url = `http://localhost:5000/users/${user?.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user?.email])

    return {
        user,
        admin,
        handleRegistration,
        handleLogin,
        signInWithGoogle,
        logOut,
        setName,
        setEmail,
        setPassword,
        error
    }
};

export default useFirebase;