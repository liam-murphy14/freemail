function onDefaultHomePageOpen() {
  const card = CardService.newCardBuilder()
    .setName("Default home page")
    .setHeader(CardService.newCardHeader().setTitle("Default home page"))
    .addSection(
      CardService.newCardSection().addWidget(
        CardService.newTextParagraph().setText(
          "This is the default home page.",
        ),
      ),
    )
    .build();
  return card;
}
