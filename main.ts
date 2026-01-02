let keyName = ""
let value = ""
let key = ""
let chunkSize = 0
let data = ""
// Тест на чтение/запись множества ключей
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    while (true) {
        let keysCount = 0
        keyName = "key_" + keysCount
        value = "data_" + keysCount
        try {
            blockSettings.writeString(keyName, value)
            let readBack = blockSettings.readString(keyName)

            if (readBack != value) {
                console.log("Ошибка чтения для ключа: " + keyName)
                break
            }

            keysCount++
            console.log("Ключей сохранено: " + keysCount)

            if (keysCount % 10 == 0) {
                console.log("Проверяем сохранение...")
                pause(500)
            }
        } catch (f) {
            console.log("Лимит ключей достигнут: " + keysCount)
            break
        }
    }
})
// Тест на запись в постоянную память
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    key = "testData"
    chunkSize = 100
    // Очищаем предыдущий тест
    console.log("Начинаем тест постоянной памяти...")
    for (let i = 0; i <= 999; i++) {
        // Ограничим итерации
        // Добавляем данные
        for (let j = 0; j <= chunkSize - 1; j++) {
            data = "" + data + String.fromCharCode(65 + (i + j) % 26)
        }
        try {
            blockSettings.writeString(key, data)
            console.log("Успешно сохранено: " + data.length + " байт")
        } catch (e) {
            console.log("Ошибка при сохранении: " + e)
            console.log("Максимальный размер: " + (data.length - chunkSize))
            break
        }
pause(100)
    }
})
