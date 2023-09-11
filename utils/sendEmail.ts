function sendEmail() {
  const firestoreServiceEmail =
    PropertiesService.getScriptProperties().getProperty(
      "firestoreServiceEmail",
    );
  const firestoreServiceKey =
    PropertiesService.getScriptProperties().getProperty("firestoreServiceKey");
  const firestoreServiceProjectId =
    PropertiesService.getScriptProperties().getProperty(
      "firestoreServiceProjectId",
    );
  // @ts-ignore external library
  const firestore = FirestoreApp.getFirestore(
    firestoreServiceEmail,
    firestoreServiceKey,
    firestoreServiceProjectId,
  );

  const trackerId = Utilities.getUuid();
  firestore.createDocument(`trackers/${trackerId}`, {
    viewedAt: null,
    threadId: null,
  });
}
