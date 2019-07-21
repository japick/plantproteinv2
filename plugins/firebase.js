import firebase from 'firebase/app'
import 'firebase/firestore'
if (!firebase.apps.length) {
    const config = {
        apiKey: 'AIzaSyACOpaN9OVFr8LXlfggFH7UBi066DRUHHM',
        authDomain: 'plantproteinv2-39f81.firebaseapp.com',
        databaseURL: 'plantproteinv2-39f81',
        projectId: 'plantproteinv2-39f81',
        storageBucket: 'plantproteinv2-39f81.appspot.com',
        messagingSenderId: '678991690412'
    }
    firebase.initializeApp(config)
    // firebase.firestore().settings({timestampsInSnapshots: false})
}
const fireDb = firebase.firestore()
const beansLegumesCollection = fireDb.collection('groups').doc('beans-legumes')
const nutsSeedsGrainsCollection = fireDb.collection('groups').doc('nuts-seeds-grains')
const greensCollection = fireDb.collection('groups').doc('dJ1SVNGrnwm33uCPsp26')
export {
  fireDb,
  beansLegumesCollection,
  nutsSeedsGrainsCollection,
  greensCollection
}