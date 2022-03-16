import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_cym2hdb';
const TEMPLATE_ID = 'template_mhl2eue';
const USER_ID = 'ycNVvVXqM3Xu7THYm';

const mailSender = async (name, mail) => {
  const templateParams = {
    name,
    mail,
  };

  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
  } catch (error) {
    console.log('FAILED...');
  }
};

export default mailSender;
