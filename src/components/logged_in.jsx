import { collection, addDoc, getDocs } from "firebase/firestore"; 
import {firestore} from "../lib/firebase";


const LoggedIn = async () => {
    const querySnapshot = await getDocs(collection(firestore, "posts"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data}`);
    });

    const onSubmit = (event) => {
        console.log(post);
        try {
            addDoc(collection(firestore, "posts"), {
                title : post,
            })
            // .then((docRef) => {
            //     console.log("Document written with ID: ", docRef.id);
            // })
        } catch (error)  {
            console.error("Error adding document: ", error);
        };
    
        event.preventDefault();
    };

    return (
        <>
            <button>Sign out</button>
            {postserror && <strong>Error: { JSON.stringify(postserror)}</strong>}
            {postloading && <span>Collection: Loading...</span>}
            {posts && posts.docs.map((doc, i)=> (
                <div key={i}>
                    {JSON.stringify(doc.data())},{' '}
                </div>
            ))}
        </>
    );
}
export default LoggedIn;