import type * as fromTypes from '../types';
import { component$, $, useStylesScoped$ } from '@builder.io/qwik';
import styles from './styles.scss?inline';

type Props = {
  links: fromTypes.Links | undefined;
  isVisible: boolean;
};

export default component$<Props>(({ links, isVisible }) => {
  useStylesScoped$(styles);

  const onLinkClick = $((link: fromTypes.Link) => {
    if (
      'analytics' in window &&
      typeof window.analytics === 'object' &&
      window.analytics !== null &&
      'track' in window.analytics &&
      typeof window.analytics.track === 'function'
    ) {
      window.analytics.track(
        `User clicked ${link.title} in header navigation`,
        {
          href: link,
        }
      );
    }
  });

  return (
    <ul
      class={{
        dopdown: true,
        'dropdown--open': isVisible,
      }}
    >
      {links?.map((link) => (
        <li key={link.url} class="dropdown__item">
          <a
            onClick$={() => onLinkClick(link)}
            class="dropdown__link"
            href={link.url}
          >
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
});
