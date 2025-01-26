import React from 'react';
import Footer from '../Footer/Footer';

function FooterWrapper() {
  const footerProps = {
    menuLinks: [
      { href: '/about', text: 'About' },
      { href: '/causes', text: 'Causes' },
      { href: '/services', text: 'Services' },
      { href: '/events', text: 'Events' },
    ],
    serviceLinks: [
      { href: '/direct-help', text: 'Direct Help' },
      { href: '/info', text: 'Giving Information' },
      { href: '/awareness', text: 'Raising Awareness' },
      { href: '/poverty', text: 'Relieving Poverty' },
    ],
    socialImage: {
      src: '/social.svg',
      alt: 'Facebook, Twitter, Instagram',
      href: '#',
    },
    copyright: 'Copyright © 2021 Laaqiq. All Rights Reserved.',
    termsLinks: [
      { href: '/terms', text: 'Terms of Use' },
      { href: '/privacy', text: 'Privacy Policy' },
    ],
  };

  return <Footer {...footerProps} />;
}

export default FooterWrapper;