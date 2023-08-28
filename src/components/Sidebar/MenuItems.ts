import { AiFillContainer } from 'react-icons/ai'
import { BiSolidPurchaseTagAlt } from 'react-icons/bi'

  const Menuitems = [
    {
      navlabel: true,
      subheader: 'Home',
    },
  
    {
      id: 1,
      title: 'Sale',
      Icon: AiFillContainer,
      href: '/sale',
    },
    {
      navlabel: true,
      subheader: 'Utility',
    },
    {
      id: 2,
      title: 'Purchase',
      Icon: BiSolidPurchaseTagAlt,
      href: '/purchase',
    },
    // {
    //   id: uniqueId(),
    //   title: 'Shadow',
    //   icon: IconCopy,
    //   href: '/utilities/shadow',
    // },
    // {
    //   navlabel: true,
    //   subheader: 'Auth',
    // },
    // {
    //   id: uniqueId(),
    //   title: 'Login',
    //   icon: IconLogin,
    //   href: '/authentication/login',
    // },
    // {
    //   id: uniqueId(),
    //   title: 'Register',
    //   icon: IconUserPlus,
    //   href: '/authentication/register',
    // },
    // {
    //   navlabel: true,
    //   subheader: 'Extra',
    // },
    // {
    //   id: uniqueId(),
    //   title: 'Icons',
    //   icon: IconMoodHappy,
    //   href: '/icons',
    // },
    // {
    //   id: uniqueId(),
    //   title: 'Sample Page',
    //   icon: IconAperture,
    //   href: '/sample-page',
    // },
  ];
  
  export default Menuitems;
  