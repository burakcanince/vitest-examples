import { Greeting } from './components/Greeting';
import { Sum } from './components/Sum';
import { LongestString } from './components/LongestString';
import { Counter } from './components/Counter';
import { Users } from './components/Users';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="space-y-4 text-center">
        <h1 className="text-2xl font-bold">Vitest Examples</h1>

        <div>
          <div className="font-medium">Greeting:</div>
          <Greeting name="John" />
        </div>

        <div>
          <div className="font-medium">Sum:</div>
          <Sum firstNumber={1} secondNumber={2} />
        </div>

        <div>
          <div className="font-medium">LongestString:</div>
          <LongestString firstString="react" secondString="angular" />
        </div>

        <div>
          <div className="font-medium">Counter:</div>
          <Counter />
        </div>

        <div>
          <div className="font-medium">Users:</div>
          <Users userId={1} />
        </div>
      </div>
    </div>
  )
}

export default App
