// Тест максимального количества спрайтов
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    let mySprites: Sprite[] = []

    console.log("Начинаем тест спрайтов...")

    for (let i = 0; i < 1000; i++) {
        try {
            // Создаем спрайт с изображением 8x8 пикселей
            let spriteImage = img`
                1 1 1 1 1 1 1 1
                1 2 2 2 2 2 2 1
                1 2 3 3 3 3 2 1
                1 2 3 4 4 3 2 1
                1 2 3 4 4 3 2 1
                1 2 3 3 3 3 2 1
                1 2 2 2 2 2 2 1
                1 1 1 1 1 1 1 1
            `

            let sprite = sprites.create(spriteImage, SpriteKind.Player)

            // Позиционируем случайно
            sprite.setPosition(Math.randomRange(10, 150), Math.randomRange(10, 110))

            // Добавляем в массив для отслеживания
            mySprites.push(sprite)

            // Отслеживаем прогресс
            if (i % 25 == 0) {
                console.log("Спрайтов создано: " + mySprites.length)

                // Небольшая пауза чтобы увидеть результаты
                pause(100)
            }

        } catch (e) {
            console.log("Ошибка создания спрайта #" + i)
            console.log("Сообщение ошибки: " + e)
            console.log("Максимум спрайтов: " + mySprites.length)
            break
        }
    }

    // Финальный отчет
    console.log("=== ИТОГИ ТЕСТА СПРАЙТОВ ===")
    console.log("Всего создано спрайтов: " + mySprites.length)

    // Убираем все спрайты для следующего теста
    for (let sprite of mySprites) {
        sprite.destroy()
    }
})