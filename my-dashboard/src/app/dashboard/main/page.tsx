import { SimpleWidget, WidgetGrid } from "@/components";
import { CartCounter } from "@/shopping-cart";

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl">Dashboard </h1>
      <span className="mt-2 text-xl">Informacion general</span>
      <CartCounter value={ 20 } />
       <WidgetGrid />
    </div>
  );
}