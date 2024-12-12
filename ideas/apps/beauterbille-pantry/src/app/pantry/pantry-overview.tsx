import PantryStock from './pantry-stock';
import { PantryProvider } from './pantry-context';

export function PantryOverview() {
  return (
    
  <PantryProvider>
    <div className="bg-pink-500">
      <h1>Welcome to PantryOverview!</h1>
      <main>
        <PantryStock />
      </main>
    </div>
    </PantryProvider>
  );
}

export default PantryOverview;
