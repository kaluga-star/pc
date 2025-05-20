//меняем изображение процессора
    const cpuSelect = document.getElementById('cpu');
    const cpuImage = document.getElementById('pic_cpu');

    // Функция для смены картинки в зависимости от выбранного значения
    function updateImage() {
        const selectedValue = cpuSelect.value;
        switch (selectedValue) {
            case 'Intel i5':
                cpuImage.src = 'image/intel_i5.jpg'; // Путь к изображению для Intel i5
                break;
            case 'AMD Ryzen 5':
                cpuImage.src = 'image/amd_ryzen_5.jpg'; // Путь к изображению для AMD Ryzen 5
                break;
            case 'Intel i7':
                cpuImage.src = 'image/intel_i7.jpg'; // Путь к изображению для Intel i7
                break;
            case 'AMD Ryzen 7':
                cpuImage.src = 'image/amd_ryzen_7.jpg'; // Путь к изображению для AMD Ryzen 7
                break;
            default:
                cpuImage.src = 'image/vopros.png'; // Путь к изображению по умолчанию
        }
    }

    // Добавляем обработчик события на изменение
    cpuSelect.addEventListener('change', updateImage);




document.getElementById('buildBtn').addEventListener('click', function() {
    const cpu = document.getElementById('cpu').value;
    const motherboard = document.getElementById('motherboard').value;
    const ram = document.getElementById('ram').value;
    const gpu = document.getElementById('gpu').value;


    const result = `
        Вы собрали компьютер с следующими компонентами:
        <ul>
            <li>Процессор: ${cpu}</li>
            <li>Материнская плата: ${motherboard}</li>
            <li>Оперативная память: ${ram}</li>
            <li>Видеокарта: ${gpu}</li>
        </ul>
    `;

    document.getElementById('result').innerHTML = result;
});
