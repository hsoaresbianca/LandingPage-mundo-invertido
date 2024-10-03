import app from "./app.js"
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js'

export async function subscribeToHellfireClube(subscription) {
    const db = getFirestore(app)
    const hellfireClubeCollection = collection(db, "hellfire-clube")
    const docRef = await addDoc(hellfireClubeCollection, subscription)
    return docRef.id
}