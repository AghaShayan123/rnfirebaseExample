import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { GoogleSignin } from '@react-native-community/google-signin';

const googleLogin = async() => {
    // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

const facebookSignIn = async() => {
    // Attempt login with permissions
  const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }

  // Once signed in, get the users AccesToken
  const data = await AccessToken.getCurrentAccessToken();

  if (!data) {
    throw 'Something went wrong obtaining access token';
  }

  // Create a Firebase credential with the AccessToken
  const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(facebookCredential);
}

const createUserInDb = (uid, fullName, email) => {
    return firestore().collection('users').doc(uid).set(
        {
            uid,
            fullName,
            email
        }
    )
}

// signup handling
const signUp = (fullName, email, password) => {
    if(!fullName || !email || !password){
        Alert.alert('Error', 'Please enter all fields')
    }

    return auth().createUserWithEmailAndPassword(email, password)
    .then( cred => {
        const {uid} = cred.user;

        auth().currentUser.updateProfile({
            displayName: fullName
        })

        return uid
    })
    .then( uid => createUserInDb(uid, fullName, email))
    .catch(
        err => Alert.alert(err.code, err.message)
    )
}

const signIn = (email, password) => {
    if(!email || !password){
        Alert.alert('Error', 'Please enter all fields')
    }

    return auth().signInWithEmailAndPassword(email, password)
    .then(() => {})
    .catch(
        err => Alert.alert(err.code, err.message)
    )
}

const forgetPassword = (email) => {
    if(!email){
        Alert.alert('Error', 'Please enter email')
    }

    return auth().sendPasswordResetEmail(email)
}

const signOut = () => {
    return auth().signOut()
}

const inviteUser = (email) => {
    if(!email){
        Alert.alert('Error', 'Please enter email')
    }

    var actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be in the authorized domains list in the Firebase Console.
        url: 'https://rnfirebaseexp.page.link/eNh4',
        // This must be true.s
        handleCodeInApp: true,
        // iOS: {
        //   bundleId: 'com.example.ios'
        // },
        android: {
          packageName: 'com.example.android',
          installApp: true,
        },
      };

    return auth().sendSignInLinkToEmail(email, actionCodeSettings)
    .then(
        Alert.alert('Email sent', 'Inform the user')
    )
    .catch(
        err => Alert.alert(err.code, err.message)
    )
}

const Auth = {
    signUp,
    signIn,
    forgetPassword,
    signOut,
    inviteUser,
    facebookSignIn,
    googleLogin
}

export default Auth