import { usePantry } from "./pantry-context";


export function PantryStock() {

  const { stock, addStock } = usePantry();

  return (
    <div className="bg-pink-500">
      <h2>Pantry Stock</h2>
      <ul>
        {stock.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => addStock('New Item')}>Add Stock</button>
    </div>
  );
}

export default PantryStock;
