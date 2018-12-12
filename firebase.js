function startFirebase(){
    firebase.initializeApp({
        apiKey: 'AIzaSyAGrFYgDymrWJjvtYFnbqtVgzn7OpCoxaI',
        authDomain: 'birthdaywebsite-7743f.firebaseapp.com',
        projectId: 'birthdaywebsite-7743f'
    });

    // Initialize Cloud Firestore through Firebase
    var db = firebase.firestore();

    // Disable deprecated features
    db.settings({
        timestampsInSnapshots: true
    });

    var docRef = db.collection("link").doc("MainLink");

    docRef.get().then(function(doc) {
        if (doc.exists) {
            // console.log("Document data:", doc.data());
            $("#link").attr("href", doc.data()["Link"]);
        } else {
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}
