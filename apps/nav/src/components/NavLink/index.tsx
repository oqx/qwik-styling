import Dropdown from '../Dropdown';
import type * as fromTypes from '../types';
import { isLinks } from '../utils';
import styles from './styles.scss?inline';
import { $, component$, useSignal, useStylesScoped$ } from '@builder.io/qwik';

type Props = {
  link: fromTypes.Link;
  disableChildren?: boolean;
};

export const NavLink = component$<Props>(
  ({ link, disableChildren = false }) => {
    useStylesScoped$(styles);

    const isHovered = useSignal(false);

    const handlers = {
      onMouseEnter$: $(() => (isHovered.value = true)),
      onMouseLeave$: $(() => (isHovered.value = false)),
    };

    if (!link.children?.length) {
      const { onMouseEnter$: _, onMouseLeave$: __ } = handlers;
    }

    return (
      <li class="link" {...handlers}>
        {link.url.startsWith('http') ? (
          <a
            href={link.url ?? '#'}
            data-icon={
              !disableChildren && !!link.children?.length ? 'expand-more' : null
            }
            class={{
              link__a: true,
              'link__a--has-children':
                !disableChildren && !!link.children?.length,
            }}
          >
            {link.title}
          </a>
        ) : (
          <a
            href={link.url ?? '#'}
            data-icon={
              !disableChildren && !!link.children?.length ? 'expand-more' : null
            }
            class={{
              link__a: true,
              'link__a--has-children':
                !disableChildren && !!link.children?.length,
            }}
          >
            {link.title}
          </a>
        )}
        {!disableChildren && isLinks(link.children) && (
          <Dropdown links={link.children} isVisible={isHovered.value} />
        )}
      </li>
    );
  }
);
