import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCdeirP4neon11tiR6O-lBuuTrgdLlnUg8',
  authDomain: 'my-blog-84cfe.firebaseapp.com',
  projectId: 'my-blog-84cfe',
  storageBucket: 'my-blog-84cfe.appspot.com',
  messagingSenderId: '478527027033',
  appId: '1:478527027033:web:24ca04af725cf4a5ae7e48',
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }

  // sign up
  signupUser = (email, password) => this.auth.createUserWithEmailAndPassword(email, password)

  // login
  loginUser = (email, password) => this.auth.signInWithEmailAndPassword(email, password)

  // logout
  logoutUser = () => this.auth.signOut()

  // set persistence
  persistence =() => this.auth.setPersistence();
}

export default Firebase;
