import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/utils.firebase";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const useDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <button onClick={logGoogleUser}>Riyal Sign IN</button>
    </div>
  );
};
export default SignIn;
