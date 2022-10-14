import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImgi.png';
import UTrackerImg from '../images/utrackeri.jpg';
import CavinImg from '../images/cavinimgi.jpg';
import ansathu from '../images/ansathu.jpg';
import cakeglory from '../images/cakeglory.jpg';
import halloween from '../images/halloween.jpg';
import ecomAppUi from '../images/ecomAppUi.jpg';
import mashrooms from '../images/mashrooms.jpg';
import commerce from '../images/commerce.jpg';
import lioclubvid from '../images/lioclubvid.jpg';
import clothingtag from '../images/clothingtag.jpg';
import universityEvent from '../images/universityEvent.jpg';
import logoDesign from '../images/logoDesign.jpg';
import ashanonline from '../images/ashanonline.jpg';
import memorylogo from '../images/memorylogo.jpg';
import issaraadare from '../images/issaraadare.jpg';
import r1video from '../images/r1video.jpg';
import savepower from '../images/savepower.jpg';
import promovideo from '../images/promovideo.jpg';
import motiongraphic from '../images/motiongraphic.jpg';
import Posonanimation from '../images/Posonanimation.jpg';
import Manipulation from '../images/Manipulation.jpg';
import apepansala from '../images/apepansala.jpg';
import tropicalvibes from '../images/tropicalvibes.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Flyer Design - Tropical Vibes',
    desc: 'This is designed for a Yacht party named as Tropical vibes. I used Illustrator & Photoshop for design this flyer.',
    img: tropicalvibes,
    link: 'https://m.facebook.com/story.php?story_fbid=pfbid02F17mPB24Do4FpLXxYTuAcB4sbBPGyBwQYHahmuEDpSXTQGrH6wTrqvs8PZLXVaDpl&id=100044650628076',
  },

  {
    id: uuidv4(),
    name: 'Poson 2D Animation',
    desc: 'This is an animation video that I create for Dialog Innovation Foundry. I used After Effects for animating and Illustrator for illustration part.',
    img: Posonanimation,
    link: 'https://fb.watch/eePDErS779/',
  },

  {
    id: uuidv4(),
    name: '2D Motion graphic - Company project',
    desc: 'These are some motion graphics done by Adobe After Effects. I used Photoshop for Designing part.',
    img: motiongraphic,
    link: 'https://www.behance.net/gallery/148092973/2D-Motion-graphic-Company-project',
  },

  {
    id: uuidv4(),
    name: 'Promotional Video - SLIIT',
    desc: 'Project about promotional video for SLIIT Uni. In this project I worked as the director of photography and Editor.',
    img: promovideo,
    link: 'https://www.facebook.com/637871998/videos/pcb.10159743333636999/1329912907537598',
  },

  {
    id: uuidv4(),
    name: '"Ape Pansala(අපේ පන්සල)" Admin Side - UI/UX Design',
    desc: 'This is a project in User Experience Designing module in Interactive Media the 1st semester of 3rd Year. I used Figma for design the UIs and create the user experience.',
    img: apepansala,
    link: 'https://www.behance.net/gallery/148101905/Ape-Pansala%28-%29-Admin-Side-UIUX-Design',
  },

  {
    id: uuidv4(),
    name: 'Manipulation - DayToNight',
    desc: 'This is a photoshop Manipulation that I done using a SLIIT photo. I used Photoshop for edit this one.',
    img: Manipulation,
    link: 'https://fb.watch/eeQFwuqnxm/',
  },

  {
    id: uuidv4(),
    name: '2D Animation - Solar Power',
    desc: 'Project about an animation to conduct an advertising campaign to promote and encourage public about the importance of using solar power and alternative power sources.',
    img: savepower,
    link: 'https://www.facebook.com/Ha.Rajapaksha/videos/2888571004772137',
  },

  {
    id: uuidv4(),
    name: 'R1 Bike Intro Video',
    desc: 'For this Intro video, I used mobile phone for take this footages and I Edit this video on Premiere Pro. I created this video for my personal youtube channel.',
    img: r1video,
    link: 'https://fb.watch/booJtL1SSM/',
  },

  {
    id: uuidv4(),
    name: 'Event Intro Video',
    desc: 'This is a animated Intro video that I create for a School Batch Party. I was able to finish this as an epic video. I used after effects & photoshop as the tools.',
    img: issaraadare,
    link: 'https://www.facebook.com/100014197622782/videos/259784796227387/',
  },
  {
    id: uuidv4(),
    name: 'Official Channel Art Design',
    desc: 'This is channel art work that I designed for official YouTube channel Ashan Online. Finally I was able to bring this artwork to a professional look.',
    img: ashanonline,
    link: 'https://www.behance.net/gallery/134564145/Official-Channel-Art-Design',
  },
  {
    id: uuidv4(),
    name: 'University Event Video',
    desc: 'This video project done for university of sri jayewardenepura. Its include voice, music, Animation parts and sliding parts. I used After Effects for the character introduce part of this video. Others are edit by Premiere Pro.',
    img: universityEvent,
    link: 'https://www.behance.net/gallery/133594987/University-Event-Video',
  },
  {
    id: uuidv4(),
    name: 'Logo Design - Brand MEMORY',
    desc: 'This is a Logo that We design for a fashion store. Illustrator and Photoshop are tools that I used design this one.',
    img: memorylogo,
    link: 'https://www.behance.net/gallery/134862823/Logo-Design-Fashion-Brand',
  },

  {
    id: uuidv4(),
    name: 'A Short Video Creation',
    desc: 'This short video create for Leo Club of University of Sri Jayawardenepura. I created this using the script and audio that I was given. A small project I did.',
    img: lioclubvid,
    link: 'https://www.facebook.com/leoclub.usjp/videos/438043757875659',
  },
  {
    id: uuidv4(),
    name: 'Logo Design NAYODARA',
    desc: 'This Logo designed for a cake shop. I used photoshop & Illustrator to design this logo.',
    img: logoDesign,
    link: 'https://www.behance.net/gallery/133596449/Logo-Design-Cake-Mart',
  },
  {
    id: uuidv4(),
    name: 'Clothing Tag Design',
    desc: 'This is a minimal tag that I design for a fashion store. I used only photoshop for create this.',
    img: clothingtag,
    link: 'https://www.behance.net/gallery/133360499/Minimal-Clothing-Tag-Design',
  },
  {
    id: uuidv4(),
    name: 'Logo Design "Cake Glory"',
    desc: 'This Logo designed for a cake shop. I used photoshop & Illustrator to design this logo.',
    img: cakeglory,
    link: 'https://www.behance.net/gallery/132612131/Logo-Design-Cake-Glory',
  },
  {
    id: uuidv4(),
    name: '2D Animated Video',
    desc: 'This is an animation video that I create for Halloween festival. I made this video using some image files. I used After Effects for animating this one.)',
    img: halloween,
    link: 'https://www.facebook.com/R.HarshanaOnline/videos/410584440735342',
  },

  {
    id: uuidv4(),
    name: '2D Animated Video',
    desc: 'An animation that is created by humorously assuming the behind the scenes of a music video. (The original owner of the song and the production board were also appreciative and there was no insult.)',
    img: ansathu,
    link: 'https://fb.watch/eeRG8u6DNU/',
  },

  {
    id: uuidv4(),
    name: 'Tuition Poster',
    desc: 'This Poster that I designed for a tuition class. I used photoshop & Illustrator to design this poster ',
    img: ProjectImg,
    link: 'https://www.behance.net/gallery/131730759/Tuition-Poster-Design',
  },

  {
    id: uuidv4(),
    name: 'B-Roll Video',
    desc: 'For this Intro video, I used mobile phone for take this footages and I Edit this video on Premiere Pro. I created this video for my personal youtube channel.',
    img: UTrackerImg,
    link: 'https://www.behance.net/gallery/131946995/Honda-Jade-B-roll-Video-%282020%29',
  },
  {
    id: uuidv4(),
    name: 'E-Commerce App - UI Design',
    desc: 'This is a project in mobile application development module. Designed this UIs using Adobe XD.',
    img: ecomAppUi,
    link: 'https://www.behance.net/gallery/131007463/UI-Designs-For-E-Commerce-App',
  },
  {
    id: uuidv4(),
    name: 'Label Design',
    desc: 'I designed this label for a packet of mashrooms. Client wanted a B&W Design.',
    img: mashrooms,
    link: 'https://www.behance.net/gallery/133362635/Label-Design?tracking_source=for_you_feed_user_published',
  },
  {
    id: uuidv4(),
    name: 'Minimal Poster Design',
    desc: 'This is a minimal facebook poster. I used Photoshop for designed this poster.',
    img: commerce,
    link: 'https://www.behance.net/gallery/132881621/Minimal-Poster-Design?',
  },

  {
    id: uuidv4(),
    name: 'Mini Cooper Intro Vid.',
    desc: 'This Introductory video that I made for a Technical YouTube Channel. I used mobile phone & DSLR camera for take this footages and I Edit this video on Premiere Pro.',
    img: CavinImg,
    link: 'https://www.behance.net/gallery/131947273/Mini-Cooper-intro-video%282019%29',
  },
];

export default projects;
