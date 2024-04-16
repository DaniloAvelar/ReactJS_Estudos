import { useState, useEffect } from "react";
import { db } from '../Firebase/config';
import { collection, query, orderBy, onSnapshot, where, QuerySnapshot } from "firebase/firestore";

export const useFetchDocuments = (docCollection, search = null, uid = null) => {

    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    //deal with memory leak
    const [cancelled, setCancelled] = useState(false);

    useEffect(() => {
        async function loadData() {
            if (cancelled) return

            setLoading(true);

            const refCollection = await collection(db, docCollection)

            try {
                let q;
                if (search) {
                    q = await query(
                        refCollection,
                        where("tagsArray", "array-contains", search),
                        orderBy("createdAt", "desc")
                    );
                } else if (uid){
                    console.log("Entrei")
                    q = await query(
                        refCollection,
                        where("uid", "==", uid),
                        orderBy("createdAt", "desc")
                    );

                    console.log("--- Q ---", q);
                }
                else {
                    q = await query(refCollection, orderBy("createdAt", "desc"));
                }

                await onSnapshot(q, (querySnapshot) => {
                    setDocuments(
                        querySnapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data(),
                        }))
                    );
                });

                setLoading(false);

            } catch (error) {
                console.log(error)
                setError(error.message)

                setLoading(false);
            }
        }
        loadData();
    }, [docCollection, search, uid, cancelled])

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return { documents, loading, error };
};