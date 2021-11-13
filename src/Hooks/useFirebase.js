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
    const [email, setEmail] = useState();
    const [password, setPassword] = useState('');
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();

    const provider = new GoogleAuthProvider();

    const handleRegistration = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password should be at least 6 character');
            return;
        };
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                saveUser(user.email);
                setError('');
                alert('Registration Complete');
                history.push('/signin');
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true)
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
            })
            .finally(() => setLoading(false));
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
        setLoading(true)
        signOut(auth).then(() => {
            setUser('');
        })
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            setLoading(false)
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
        const url = `https://calm-fjord-73469.herokuapp.com/users/${user?.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user?.email])

    return {
        user,
        admin,
        loading,
        handleRegistration,
        handleLogin,
        signInWithGoogle,
        logOut,
        setEmail,
        setPassword,
        error
    }
};

export default useFirebase;