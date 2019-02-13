module.exports = {
    components: {
      categories: [
        {
          name: "General",
          include: [
            "src/Typography/Typography.js"
          ]
        },
        {
          name: "Buttons",
          include: [
            "src/Button/Button.js",
            "src/IconButton/IconButton.js",
            "src/Fab/Fab.js"
          ],
        },
        {
          name: "Tabs",
          include: [
            "src/Tabs/Tab/Tab.js",
            "src/Tabs/TabBar/TabBar.js"
          ]
        },
        {
          name: "Cards",
          include: [
            "src/Cards/Card/Card.js",
            "src/Cards/CardAction/CardAction.js",
            "src/Cards/CardActionButtons/CardActionButtons.js",
            "src/Cards/CardActionIcons/CardActionIcons.js",
            "src/Cards/CardMedia/CardMedia.js",
            "src/Cards/CardMediaContent/CardMediaContent.js",
            "src/Cards/CardPrimaryAction/CardPrimaryAction.js",
          ]
        },
        {
          name: "Chips",
          include: [
            "src/Chips/Chip/Chip.js",
            "src/Chips/ChipSet/ChipSet.js"
          ]
        },
        {
          name: "ImageLists",
          include: [
            "src/ImageLists/ImageList/ImageList.js",
            "src/ImageLists/ImageListImage/ImageListImage.js",
            "src/ImageLists/ImageListImageAspectContainer/ImageListImageAspectContainer.js",
            "src/ImageLists/ImageListItem/ImageListItem.js", 
            "src/ImageLists/ImageListLabel/ImageListLabel.js",
            "src/ImageLists/ImageListSupporting/ImageListSupporting.js",
          ]
        }
      ]
    },
    name: "RMWC"
  };