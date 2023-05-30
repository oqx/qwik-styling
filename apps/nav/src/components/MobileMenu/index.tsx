import type * as fromTypes from '../types';
import { NavLink } from '../NavLink';
import { isLinks } from '../utils';
import styles from './styles.scss?inline';
import { component$, $, useStylesScoped$ } from '@builder.io/qwik';

type Props = {
  links: fromTypes.Links;
  isVisible: boolean;
};

export const MobileMenu = component$<Props>(({ links, isVisible }) => {
  useStylesScoped$(styles);
  // const onSignUp = async () =>
  //   await track('User clicked sign up button in header');

  // const onLogin = async () =>
  //   await track('User clicked login button in header');

  // const onSchedule = async () =>
  //   await track('User clicked Schedule a Service button in header');

  const onSchedule = $(() => console.log('schedule'));

  const onLogin = $(() => console.log('login'));

  const onSignUp = $(() => console.log('signup'));

  return (
    <nav class={{ 'header__nav--is-open': isVisible, header__nav: true }}>
      <div class="header__mobile">
        {links.map((link) => {
          return (
            <>
              <NavLink link={link} disableChildren />
              {isLinks(link.children) &&
                link.children.map((item) => (
                  <NavLink
                    key={item?.title + '-children'}
                    link={item}
                    disableChildren
                  />
                ))}
            </>
          );
        })}
        <a onClick$={onSchedule} href="schedule">
          <button class="header__btn">Schedule a Service</button>
        </a>
        <a onClick$={onLogin} href="/">
          <button class="header__btn">Login</button>
        </a>
        <a onClick$={onSignUp} href="/signup">
          <button>Sign Up</button>
        </a>
      </div>
    </nav>
  );
});
