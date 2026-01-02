let Me = sprites.create(img`
    2 
    `, SpriteKind.Player)
controller.moveSprite(Me)
scene.cameraFollowSprite(Me)
let PanelImg = image.create(scene.screenWidth(), 16)
let InfoPanel = sprites.create(PanelImg, SpriteKind.Text)
let textSprite = textsprite.create("-")
game.onUpdate(function () {
    InfoPanel.setPosition(scene.cameraProperty(CameraProperty.X) + 0, scene.cameraProperty(CameraProperty.Bottom) - 8)
    for (let index = 0; index <= scene.screenWidth(); index++) {
        PanelImg.drawTransparentImage(img`
            2 
            `, index, 0)
    }
    textSprite.setText("" + scene.cameraProperty(CameraProperty.X) + ":" + scene.cameraProperty(CameraProperty.Y))
    textSprite.setPosition(scene.cameraProperty(CameraProperty.X) + 0, scene.cameraProperty(CameraProperty.Bottom) - 8)
})
