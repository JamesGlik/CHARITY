export interface FooterProps {
    menuLinks: { href: string; text: string }[];
    serviceLinks: { href: string; text: string }[];
    socialImage: { src: string; alt: string; href: string };
    copyright: string;
    termsLinks: { href: string; text: string }[];
}