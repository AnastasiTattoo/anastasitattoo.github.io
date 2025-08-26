import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore, collection, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

export class DataBaseController {
  passwordStorageName = 'PASSWORD_STORAGE';
  cardsStorageName = 'CARDS_STORAGE';
  firebaseConfig = {
    apiKey: "AIzaSyAM3OzthV-FTkcoVg-OVEGvRQWQVKuSyPc",
    authDomain: "game-master-f0d4c.firebaseapp.com",
    projectId: "game-master-f0d4c",
    storageBucket: "game-master-f0d4c.appspot.com",
    messagingSenderId: "477885852409",
    appId: "1:477885852409:web:86ece427169b82d4c01028"
  };

  constructor() {
    this.app = initializeApp(this.firebaseConfig);
    this.firestore = getFirestore(this.app);
  }

  async getPassword() {
    const docRef = doc(this.firestore, this.passwordStorageName, this.passwordStorageName);
    const docData = await getDoc(docRef);

    if (!docData.exists()) return null;
    return docData._document.data.value.mapValue.fields.password.stringValue;
  }

  async getCards() {
    const docRef = doc(this.firestore, this.cardsStorageName, this.cardsStorageName);
    const docData = await getDoc(docRef);

    if (!docData.exists()) return null;

    const result = {};
    const { fields } = docData._document.data.value.mapValue;
    Object.keys(fields).forEach((key) => {
      const valueResult = {};
      const { fields: valueFields } = fields[key].mapValue;
      Object.keys(valueFields).map((valueKey) => {
        valueResult[valueKey] = valueFields[valueKey].stringValue;
      });
      result[key] = valueResult;
    })

    return result;
  }

  async saveCards(data) {
    await setDoc(
      doc(collection(this.firestore, this.cardsStorageName), this.cardsStorageName),
      data,
    );
  }
}

export default DataBaseController;
