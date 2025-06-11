export class RabbitMQService {
  private amqp: any;

  constructor() {
    this.amqp = require("amqplib/callback_api");
  }

  async connect(): Promise<void> {
    this.amqp.connect("amqp://localhost", (error: any, connection: any) => {
      if (error) {
        throw error;
      }

      connection.createChannel((channelError: any, channel: any) => {
        if (channelError) {
          throw channelError;
        }

        channel.assertQueue("my_queue", {
          durable: false,
        });
      });
    });
  }

  async sendMessage(message: string): Promise<void> {
    this.amqp.connect("amqp://localhost", (error: any, connection: any) => {
      if (error) {
        throw error;
      }

      connection.createChannel((channelError: any, channel: any) => {
        if (channelError) {
          throw channelError;
        }

        const queue = "my_queue";
        channel.assertQueue(queue, {
          durable: false,
        });

        channel.sendToQueue(queue, Buffer.from(message));

        console.log("Message sent:", message);

        setTimeout(() => {
          connection.close();
        }, 500);
      });
    });
  }
}
