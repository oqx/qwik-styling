import { component$, Slot } from '@builder.io/qwik';
import { RemoteMfe } from '../components/remote-mfe/remote-mfe';

export default component$(() => {
  return (
    <>
      <main>
        <RemoteMfe remote="nav" />
        <section>
          <Slot />
        </section>
      </main>
    </>
  );
});
