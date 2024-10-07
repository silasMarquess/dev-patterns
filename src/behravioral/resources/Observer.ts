import {EventEmitter} from 'node:events'

class NotificationSystem extends EventEmitter {
    sendNotification(message: string): void {
        console.log(`Sending notification: ${message}`)
        
        this.emit('notify', message)
    }
}

const notificationSystem = new NotificationSystem()

notificationSystem.on('notify', (message: string) => {
    console.log(`Observer 1 received: ${message}`)
})

notificationSystem.on('notify', (message: string) => {
  console.log(`Observer 2 received: ${message}`);
});

notificationSystem.sendNotification('New user signed up!');




