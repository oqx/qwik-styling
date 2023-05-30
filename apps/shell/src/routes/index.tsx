import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import styles from './styles.module.scss';

export default component$(() => {
  return (
    <main>
      <h1 class={styles.hello}>
        "shell" works! <span class="lightning">⚡️</span>
      </h1>
    </main>
  );
});

export const head: DocumentHead = {
  title: 'shell',
};
