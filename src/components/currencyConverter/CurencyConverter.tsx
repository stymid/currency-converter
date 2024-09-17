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
  const handleConvert = (amount: number, isTomanToDollar: boolean) => {
    setAmount(amount);
    setIsTomanToDollar(isTomanToDollar);
  };

  return (
    <div className="container">
      <FormComponent onConvert={handleConvert} />
      <Result amount={amount} isTomanToDollar={isTomanToDollar} />
    </div>
  );
};

export default CurencyConverter;
