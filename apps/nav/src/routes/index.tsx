import * as fromComponents from '../components';
import { $, component$, useSignal } from '@builder.io/qwik';
import styles from './styles.module.scss';

export default component$(() => {
  // useStylesScoped$(styles);

  const { value: isLoggedIn } = useSignal(true);

  const mobileMenuIsOpen = useSignal(false);

  const clearBookingState = $(() => undefined);

  return (
    <div
      class={{
        [styles.header]: true,
        'header--is-open': mobileMenuIsOpen.value,
      }}
    >
      <div class={styles.header__content}>
        <div class="header__left-col">
          <div class="header__logo">
            {isLoggedIn ? (
              <a href="/app/dashboard" onClick$={clearBookingState}>
                {/* <img
                  height="34"
                  width="112"
                  src="/public/images/logo-white.svg"
                  class="header__logo"
                /> */}
              </a>
            ) : (
              <a href="https://www.curbee.com">
                {/* <img
                  height="34"
                  width="112"
                  src="/public/images/logo-white.svg"
                  class="header__logo"
                /> */}
              </a>
            )}
          </div>
          {!isLoggedIn && (
            <button
              type="button"
              class="header__ham"
              onClick$={() => (mobileMenuIsOpen.value = !mobileMenuIsOpen)}
            >
              <span
                class={{
                  burger: true,
                  'burger--is-active': mobileMenuIsOpen.value,
                }}
              >
                <span class="burger__icon"></span>
              </span>
            </button>
          )}
        </div>
        {!isLoggedIn && (
          <>
            <div class="desktop__links">
              <ul>
                {fromComponents.LINKS?.map((link) => (
                  <fromComponents.NavLink key={link.url} link={link} />
                ))}
              </ul>
              <div class="header__login">
                <a href="/sign-up" onClick$={clearBookingState}>
                  Log In/Sign Up
                </a>
              </div>
              <a href="/" onClick$={clearBookingState}>
                Book appointment
              </a>
            </div>
            {mobileMenuIsOpen && (
              <fromComponents.MobileMenu
                isVisible={mobileMenuIsOpen.value}
                links={fromComponents.LINKS}
              />
            )}
          </>
        )}
        {isLoggedIn && (
          <div class="logged">
            <div class="desktop__links">
              <ul>
                {fromComponents.LOGGED_IN_LINKS?.map((link) => (
                  <fromComponents.NavLink key={link.url} link={link} />
                ))}
                {isLoggedIn && (
                  <li class="link">
                    <a class="link__a">Help</a>
                  </li>
                )}
              </ul>
            </div>
            {mobileMenuIsOpen && (
              <fromComponents.MobileMenu
                isVisible={mobileMenuIsOpen.value}
                links={fromComponents.LOGGED_IN_LINKS}
              />
            )}
            <a href={'/schedule'} onClick$={clearBookingState}>
              <button
                class="logged__schedule-btn--desktop"
                data-testid="btn-schedule-service-desktop"
              >
                Book appointment
              </button>
              <button
                class="logged__schedule-btn--mobile"
                data-testid="btn-schedule-service-mobile"
              >
                Book appointment
              </button>
            </a>
            <fromComponents.Menu />
          </div>
        )}
      </div>
    </div>
  );
});
