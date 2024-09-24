import { useState } from "react";
import FormComponent from "./FormComponent";
import Result from "./Result";

const CurencyConverter = () => {
  const [amount, setAmount] = useState<number>(0);
  const [isTomanToDollar, setIsTomanToDollar] = useState<boolean>(true);
  /**
   * Handles the conversion process by updating the amount and conversion direction.
   *
   * @param amount - The amount to be converted.
   * @param isTomanToDollar - Boolean indicating if the conversion is from Toman to Dollar.
   */
  const handleAmount = (amount: number) => {
    setAmount(amount);
  };
  const handleIsTomanToDollar = (isTomanToDollar: boolean) => {
    setIsTomanToDollar(isTomanToDollar);
  };

  return (
    <div className="container">
      <FormComponent
        amount={amount}
        isTomanToDollar={isTomanToDollar}
        onAmount={handleAmount}
        onIsTomanToDollar={handleIsTomanToDollar}
      />
      <Result amount={amount} isTomanToDollar={isTomanToDollar} />
    </div>
  );
};

export default CurencyConverter;
