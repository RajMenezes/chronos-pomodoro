import { TimerIcon } from 'lucide-react';
import { Heading } from './components/Heading';
import './styles/global.css';
import './styles/themes.css';

export function App() {
  return (
    <>
      <Heading>
        Olá mundo!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa atque
        eligendi incidunt accusamus tempora obcaecati iure sequi, officiis, qui
        neque beatae harum blanditiis inventore vel suscipit. Facere esse
        aliquid quae.
      </p>
    </>
  );
}
