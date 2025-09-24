// Implementação — plataforma
class PlayerImplementation {
  playMedia(type) {
    throw new Error("Método abstrato deve ser implementado");
  }
}

class WindowsPlayer extends PlayerImplementation {
  playMedia(type) {
    console.log(`Reproduzindo ${type} no Windows`);
  }
}

class LinuxPlayer extends PlayerImplementation {
  playMedia(type) {
    console.log(`Reproduzindo ${type} no Linux`);
  }
}

// Abstração — tipo de mídia
class Media {
  constructor(player) {
    this.player = player;
  }

  play() {
    throw new Error("Método abstrato deve ser implementado");
  }
}

class Audio extends Media {
  play() {
    this.player.playMedia("áudio");
  }
}

class Video extends Media {
  play() {
    this.player.playMedia("vídeo");
  }
}

// Cliente
const windowsPlayer = new WindowsPlayer();
const linuxPlayer = new LinuxPlayer();

const audioWindows = new Audio(windowsPlayer);
audioWindows.play(); // Reproduzindo áudio no Windows

const videoLinux = new Video(linuxPlayer);
videoLinux.play();   // Reproduzindo vídeo no Linux