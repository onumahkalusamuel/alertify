import { title, message, type, showing } from './store'

const alertify = (args) => {

    if(typeof args === 'object') {
        title.set(args.title || 'Alert');
        message.set(args.message || '');
        type.set(args.type || 'neutral');

    } else {

        message.set(args || '');
    }

  if(message !== '') showing.set(true);

}

export default alertify;
