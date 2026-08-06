const email = 'contact@greaterodd.com';
const phone = '+58 (412) 934 8601';

export const CONTACT = {
    email,
    emailHref: `mailto:${email}`,
    phone,
    phoneHref: `tel:${phone.replace(/[^+\d]/g, '')}`,
    location: 'Everywhere',
    locationTerminal: 'everywhere',
};
