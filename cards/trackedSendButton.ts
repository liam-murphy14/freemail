function getTrackedSendButton(e) {
  return [buildTrackedSendComposeCard()];
}

function buildTrackedSendComposeCard() {
  const card = CardService.newCardBuilder();
  const cardSection = CardService.newCardSection().setHeader(
    "Send a tracked email",
  );
  return card.addSection(cardSection).build();
}

function applyInsertImageAction(e) {
  var imageUrl = e.parameters.url;
  var imageHtmlContent = '<img style="display: block" src="' + imageUrl + '"/>';
  var response = CardService.newUpdateDraftActionResponseBuilder()
    .setUpdateDraftBodyAction(
      CardService.newUpdateDraftBodyAction()
        .addUpdateContent(
          imageHtmlContent,
          CardService.ContentType.MUTABLE_HTML,
        )
        .setUpdateType(CardService.UpdateDraftBodyType.IN_PLACE_INSERT),
    )
    .build();
  return response;
}
