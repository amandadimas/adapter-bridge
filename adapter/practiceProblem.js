// Interface interna do sistema
class Notifier {
  send(message) {
    console.log(`Notificação enviada: ${message}`);
  }
}

// Biblioteca externa (incompatível com o sistema)
class SMSService {
  sendSMS(text) {
    console.log(`SMS enviado: ${text}`);
  }
}

// Adapter para integrar SMSService ao sistema
class SMSAdapter extends Notifier {
  constructor(smsService) {
    super(); // opcional aqui, mas mantém boas práticas
    this.smsService = smsService;
  }

  send(message) {
    this.smsService.sendSMS(message);
  }
}

// Cliente
function notifyUser(notifier, message) {
  notifier.send(message);
}

// Testando com o Notifier interno
const emailNotifier = new Notifier();
notifyUser(emailNotifier, "Bem-vindo ao sistema!");

// Testando com o SMSService adaptado
const smsService = new SMSService();
const smsNotifier = new SMSAdapter(smsService);
notifyUser(smsNotifier, "Seu código é 1234");
