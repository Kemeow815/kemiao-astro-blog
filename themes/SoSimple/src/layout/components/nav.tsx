import { i18n } from '@/lib/i18n';
import { h, type Component } from '@/lib/jsx-runtime';
import { getThemeConfig } from '@/lib/types-trick';

export const Nav: Component = ({ hexo }) => (
  <nav class="nav">
    {Object.entries(getThemeConfig(hexo).menu)
      .map(([menu_name, link]) => <a href={hexo.url_for(link)}>{menu_name == 'Dark/Light Mode' ? <i class="fa-solid fa-circle-half-stroke"></i> : i18n(hexo, menu_name as never)}</a>)
      .join('&nbsp;&nbsp;')}
  </nav>
);
