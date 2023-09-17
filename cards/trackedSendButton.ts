function getTrackedSendButton(e) {
  return [buildTrackedSendComposeCard()];
}

function buildTrackedSendComposeCard() {
  const card = CardService.newCardBuilder();
  const cardSection = CardService.newCardSection().setHeader(
    "Send a tracked email",
  ).addWidget(CardService.newTextButton().setText("Track Email").setOnClickAction(CardService.newAction().setFunctionName("onSendButtonClick")).setTextButtonStyle(CardService.TextButtonStyle.FILLED));
  return card.addSection(cardSection).build()
}

function onSendButtonClick() {
  const insertTrackerAction = CardService.newUpdateDraftBodyAction().addUpdateContent('<img height="1" width="1" src="TODO: change" />', CardService.ContentType.MUTABLE_HTML).setUpdateType(CardService.UpdateDraftBodyType.IN_PLACE_INSERT)
  return CardService.newUpdateDraftActionResponseBuilder().setUpdateDraftBodyAction(insertTrackerAction).build()
}
// TODO: typescriptify
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
