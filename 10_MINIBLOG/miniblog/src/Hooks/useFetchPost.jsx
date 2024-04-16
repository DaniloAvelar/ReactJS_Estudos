import { useState, useEffect } from "react";
import { db } from '../Firebase/config';
import { collection, doc, getDoc } from "firebase/firestore";

export const useFetchPost = (docCollection, id) => {

    const [document, setDocument] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    //deal with memory leak
    const [cancelled, setCancelled] = useState(false);

    useEffect(() => {
        async function loadData() {
            if (cancelled) return

            setLoading(true);

            try {
                const docRef = await doc(db, docCollection, id)
                const docSnap = await getDoc(docRef, id)

                setDocument(docSnap.data());

                setLoading(false);

            } catch (error) {
                console.log(error);
                setError(error.message);
                setLoading(true);
            }
        }
        loadData();
    }, [docCollection, id, cancelled])

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return { document, loading, error };
}