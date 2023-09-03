import { AiFillContainer } from 'react-icons/ai'
import { GiExpense } from 'react-icons/gi'
import { BiSolidPurchaseTagAlt, BiGroup, BiSitemap, BiSolidDashboard } from 'react-icons/bi'


  const Menuitems = [
    {
      navlabel: true,
      subheader: 'Home',
    },
    {
      id: 1,
      title: 'Dashboard',
      Icon: BiSolidDashboard,
      href: '/'
    },
    {
      navlabel: true,
      subheader: 'Transactions',
    },
  
    {
      id: 1,
      title: 'Sale',
      Icon: AiFillContainer,
      children: [
        {
          id: 1,
          title: 'Invoices',
          Icon: AiFillContainer,
          href: '/sale/sale-list',
        },
      ]
    },
    {
      id: 2,
      title: 'Purchase',
      Icon: BiSolidPurchaseTagAlt,
      children: [
        {
          id: 1,
          title: 'Invoices',
          Icon: AiFillContainer,
          href: '/purchase/invoices',
        },
      ]
    },
    {
      navlabel: true,
      subheader: 'Utility',
    },
    {
      id: 3,
      title: 'Parties',
      Icon: BiGroup,
      href: '/party',
    },
    {
      id: 4,
      title: 'Items',
      Icon: BiSitemap,
      href: '/item',
    },
    {
      id: 5,
      title: 'Expense',
      Icon: GiExpense,
      href: '/expense',
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
  