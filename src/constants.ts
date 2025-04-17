import IconMail from "@/assets/icons/IconMail.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconBrandX from "@/assets/icons/IconBrandX.svg";
import IconWhatsapp from "@/assets/icons/IconWhatsapp.svg";
import IconFacebook from "@/assets/icons/IconFacebook.svg";
import IconTelegram from "@/assets/icons/IconTelegram.svg";
import IconPinterest from "@/assets/icons/IconPinterest.svg";

export const SOCIALS = [
  {
    name: "Github",
    href: "https://github.com/Ouzr0107",
    linkTitle: `我的 github 页面`,
    icon: IconGitHub,
  },
  // {
  //   name: "X",
  //   href: "https://x.com/username",
  //   linkTitle: `${SITE.title} on X`,
  //   icon: IconBrandX,
  // },
  // {
  //   name: "LinkedIn",
  //   href: "https://www.linkedin.com/in/username/",
  //   linkTitle: `${SITE.title} on LinkedIn`,
  //   icon: IconLinkedin,
  // },
  {
    name: "Mail",
    href: "",
    linkTitle: `向我发送邮件`,
    icon: IconMail,
  },
] as const;

export const SHARE_LINKS = [
  {
    name: "WhatsApp",
    href: "https://wa.me/?text=",
    linkTitle: `分享到 WhatsApp`,
    icon: IconWhatsapp,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/sharer.php?u=",
    linkTitle: `分享到 Facebook`,
    icon: IconFacebook,
  },
  {
    name: "X",
    href: "https://x.com/intent/post?url=",
    linkTitle: `分享到 X`,
    icon: IconBrandX,
  },
  {
    name: "Telegram",
    href: "https://t.me/share/url?url=",
    linkTitle: `通过 Telegram 分享`,
    icon: IconTelegram,
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com/pin/create/button/?url=",
    linkTitle: `分享到 Pinterest`,
    icon: IconPinterest,
  },
  {
    name: "Mail",
    href: "mailto:?subject=See%20this%20post&body=",
    linkTitle: `通过 email 分享`,
    icon: IconMail,
  },
] as const;

export const LINKS = [
  // {
  //   Name: "Arthals' ink",
  //   Desc: "所见高山远木，阔云流风；所幸岁月盈余，了无拘束",
  //   Link: "https://arthals.ink/",
  //   Avatar: "https://cdn.arthals.ink/Arthals.png",
  // },
  {
    name: "Stark's",
    desc: "Personal website and blog of Charles Stark",
    link: "https://c12k.dev",
    avatar: "https://avatars.githubusercontent.com/u/69138022",
  },
  {
    name: "Arthals' ink",
    desc: "所见高山远木，阔云流风；所幸岁月盈余，了无拘束",
    link: "https://arthals.ink/",
    avatar: "https://cdn.arthals.ink/Arthals.png",
  },
  {
    name: "CWorld Site",
    desc: "求知若愚，虚怀若谷",
    link: "https://cworld0.com/",
    avatar: "https://cworld0.com/_image?href=%2F_astro%2Favatar.CKYBHtS3.png&w=768&h=768&f=webp",
  },
] as const;