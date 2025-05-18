import IconMail from "@/assets/icons/mail.svg";
import IconBrandX from "@/assets/icons/X.svg";
import IconWhatsapp from "@/assets/icons/IconWhatsapp.svg";
import IconFacebook from "@/assets/icons/IconFacebook.svg";
import IconTelegram from "@/assets/icons/telegram.svg";
import IconPinterest from "@/assets/icons/IconPinterest.svg";
import IconGithub from "@/assets/icons/github.svg";
import IconMusic from "@/assets/icons/music.svg";
import IconBilibili from "@/assets/icons/bilibili.svg";
import IconQQ from "@/assets/icons/qq.svg";
import { SITE } from "./config";

export const SOCIALS = [
  {
    name: "Github",
    href: "https://github.com/Kemeow815",
    linkTitle: `我的 github 页面`,
    icon: IconGithub,
  },
  {
    name: "X",
    href: "https://x.com/kemiaosw",
    linkTitle: `${SITE.title} on X`,
    icon: IconBrandX,
  },
  {
    name: "Telegram",
    href: "https://t.me/KemiaoJun",
    linkTitle: `${SITE.title} on Telegram`,
    icon: IconTelegram,
  },
  {
    name: "网易云音乐",
    href: "https://music.163.com/#/playlist?id=13681647281",
    linkTitle: `${SITE.title} on 网易云`,
    icon: IconMusic,
  },
  {
    name: "哔哩哔哩",
    href: "https://space.bilibili.com/3546643173477234/",
    linkTitle: `${SITE.title} on 哔哩哔哩`,
    icon: IconBilibili,
  },
  {
    name: "QQ",
    href: "https://qm.qq.com/q/m8FW8Y6TkY",
    linkTitle: `${SITE.title} on QQ`,
    icon: IconQQ,
  },
  // {
  //   name: "LinkedIn",
  //   href: "https://www.linkedin.com/in/username/",
  //   linkTitle: `${SITE.title} on LinkedIn`,
  //   icon: IconLinkedin,
  // },
  {
    name: "Mail",
    href: "mailto:me@kemiaosw.top",
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
    name: "Wallleap",
    desc: "Luwang's blog",
    link: "https://myblog.wallleap.cn/",
    avatar: "https:////gravatar.wallleap.cn/avatar/be1ccdcf025a92b98a92e331e1b3662a?size=256",
  },
  {
    name: "CWorld Site",
    desc: "求知若愚，虚怀若谷",
    link: "https://cworld0.com/",
    avatar: "https://cworld0.com/_image?href=%2F_astro%2Favatar.CKYBHtS3.png&w=768&h=768&f=webp",
  },
] as const;