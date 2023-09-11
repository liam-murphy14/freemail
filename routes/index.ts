function doGet(e) {
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
  const trackerId = e.parameter.trackerId;
  try {
    firestore.updateDocument(
      `trackers/${trackerId}`,
      { viewedAt: new Date() },
      true,
    );
  } catch (e) {
    console.error(e);
  }
  // return the tracking pixel
  return ContentService.createTextOutput(
    "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  );
}
