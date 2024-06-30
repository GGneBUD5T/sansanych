// Управление аудиофайлом
var audio = document.getElementById('background-music');
audio.volume = 0.3; // Устанавливаем громкость на 30%

// Перезагрузка аудиофайла, чтобы он продолжал играть после завершения
audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
