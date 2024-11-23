import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Main',
      links: [
        {
          text: 'Campaigns',
          href: getPermalink('/main/campaigns'),
        },
        {
          text: 'History',
          href: getPermalink('/main/history'),
        },
        {
          text: 'Transparency',
          href: getPermalink('/main/transparency'),
        },
      ],
    },
    {
      text: 'Nawroz School',
      links: [
        {
          text: 'Dates',
          href: getPermalink('/main/dates'),
        }
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        }
      ],
    }
  ],
  actions: [{ text: 'Donate', href: '#', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'KHL',
      links: [
        { text: 'Volunteers', href: '#' },
        { text: 'School', href: '#' },
        { text: 'Teachers', href: '#' },
      ],
    },
    {
      title: 'Charity',
      links: [
        { text: 'About', href: '#' },
      ],
    },
    {
      title: 'Environment',
      links: [
        { text: 'Efforts', href: 'environment' },
      ],
    },
    {
      title: 'Where?',
      links: [
        { text: 'Former Golden Lion Pub', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Using <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · <a class="text-blue-600 underline dark:text-muted" href='www.softcode.co.uk'>www.softcode.co.uk</a> · Open Source www.github.com/softcode/khl
  `,
};
