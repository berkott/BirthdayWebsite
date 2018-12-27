function startFirebase(){
    // Initialize Cloud Firestore through Firebase

    var user = firebase.auth().currentUser;

    console.log(user.uid);

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
            console.error("No such document!");
        }
    }).catch(function(error) {
        console.error("Error getting document:", error);
    });
}
