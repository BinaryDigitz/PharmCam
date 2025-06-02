import apple_logo from './apple_logo.png'
import google_logo from './google_logo.png'
import search from './search.png'
import back from './back.png'
import call from './call.png'
import close from './close.png'
import direction from './direction.png'
import email from './email.png'
import location from './location.png'
import menu from './menu.png'
import personnel from './pharmacist.png'
import verified from './verified.png'
import placeholder_img from './verified.png'
import banginic_logo from './banginic_logo.png'

export { apple_logo, google_logo}




export { search,
    back, call, close, direction, banginic_logo, email, location, menu, personnel, verified, placeholder_img
}
export const cities = [ 'Bamenda', 'Douala', 'Tiko', 'Limbe', 'Buea', 'Kumba', 'Yaounde', 'Edea', 'Bertoua', 'Ebolowa', 'Garoua', 'Baffoussam', 'Nkongssamba']

export const pharmacies = [
    {_id:1234, name: 'Karen pharmacy', phone: '653775159', location:'Bamenda', email: 'contact@karen-pharmacy.com', pharmacist: 'Ngwanyam Florence', isVerified: true, direction:'1234', onCall: false,  isOpen: true,  isOff: false, closingTime: '18:00', openingTime:'09:00' },
    {_id:12345, name: 'Family pharmacy', phone: '653775159', location:'Bamenda', email: 'contact@karen-pharmacy.com', pharmacist: 'Ngwanyam Florence', isVerified: false,  direction:'1234', onCall: false,  isOpen: false, isOff: false,   closingTime: '18:00', openingTime:'09:00' },
    {_id:123456, name: 'Pharmacy de rail', phone: '653775159', location:'Bamenda', email: 'contact@karen-pharmacy.com', pharmacist: 'Ngwanyam Florence', isVerified: true, direction:'1234', onCall: true, isOpen: true,  isOff: false, closingTime: '18:00', openingTime:'09:00' },
    {_id:1234567, name: 'Hiltop pharmacy', phone: '653775159', location:'Bamenda', email: 'contact@karen-pharmacy.com', pharmacist: 'Ngwanyam Florence', isVerified: false,  direction:'1234', onCall: false,  isOpen: false, isOff: false,   closingTime: '18:00', openingTime:'09:00' },
    {_id:12345678, name: 'Pharmacy Eden', phone: '653775159', location:'Bamenda', email: 'contact@karen-pharmacy.com', pharmacist: 'Ngwanyam Florence', isVerified: false,  direction:'1234', onCall: false,  isOpen: true,  isOff: false, closingTime: '18:00', openingTime:'09:00' },
    {_id:12345678, name: 'Pharmacy Eden', phone: '653775159', location:'Bamenda', email: 'contact@karen-pharmacy.com', pharmacist: 'Ngwanyam Florence', isVerified: false,  direction:'1234', onCall: false,  isOpen: true,  isOff: false, closingTime: '18:00', openingTime:'09:00' },
     {_id:12345678, name: 'Pharmacy Eden', phone: '653775159', location:'Bamenda', email: 'contact@karen-pharmacy.com', pharmacist: 'Ngwanyam Florence', isVerified: false,  direction:'1234', onCall: false,  isOpen: true,  isOff: false, closingTime: '18:00', openingTime:'09:00' },
]
export const workingDays = [
    { day: 'Monday', openTime:'08:00', closeTime: '19:20', onCall: false, },
    { day: 'Tuesday', openTime:'08:00', closeTime: '19:20', onCall: false, },
    { day: 'Wednesday', openTime:'08:00', closeTime: '19:20', onCall: false, },
    { day: 'Thursday', openTime:'08:00', closeTime: '19:20', onCall: false, },
    { day: 'Friday', openTime:'08:00', closeTime: '19:20', onCall: false, },
    { day: 'Saturday', openTime:'08:00', closeTime: '18:20', onCall: false, },
    { day: 'Sunday', openTime:'08:00', closeTime: '19:20', onCall: false, }
]