import { v4 as uuidv4 } from 'uuid';
import delight8 from '../images/delight8.jpg';
import travelnet from '../images/travelnet.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Restaurant Management System',
    desc: 'University project for creating a Client based web application using Visual studio code and MERN stack',
    img: delight8,
    // link: 'https://www.behance.net/gallery/132612131/Logo-Design-Cake-Glory',
  },
  {
    id: uuidv4(),
    name: 'Online Travel Guide System',
    desc: 'University project for creating a web application using HTML, CSS, JS, PHP, and PHP MyAdmin',
    img: travelnet,
    // link: 'https://www.facebook.com/R.HarshanaOnline/videos/410584440735342',
  },
];

export default projects;
