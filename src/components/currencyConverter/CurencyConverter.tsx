import { useState } from "react";
import FormComponent from "./FormComponent";

const CurencyConverter = () => {
  const [amount, setAmount] = useState<number>(0);
  const [isRialToDollar, setIsRialToDollar] = useState<boolean>(true);

  console.log("value", amount);
  console.log("isRialtoDollar", isRialToDollar);

  const handleConvert = (amount: number, isRialToDollar: boolean) => {
    setAmount(amount);
    setIsRialToDollar(isRialToDollar);
  };

  return (
    <div className="container">
      <FormComponent onConvert={handleConvert} />
    </div>
  );
};

export default CurencyConverter;
