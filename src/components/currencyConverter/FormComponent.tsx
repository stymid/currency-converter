import React, { useState } from "react";

interface FormComponentProps {
  onConvert: (amount: number, isTomanToDollar: boolean) => void;
}

const FormComponent: React.FC<FormComponentProps> = ({ onConvert }) => {
  const [amount, setAmount] = useState<number>(0);
  const [isTomanToDollar, setIsTomanToDollar] = useState<boolean>(true);

  const handleToggle = () => {
    setIsTomanToDollar(!isTomanToDollar);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConvert(amount, isTomanToDollar);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="text-center">
        <div className="d-flex justify-content-center mb-3">
          <div className="p-2 border">
            {isTomanToDollar ? "Toman" : "Dollar"}
          </div>
          <button
            type="button"
            className="btn btn-secondary mx-2"
            onClick={handleToggle}
          >
            {isTomanToDollar ? "Convert to Dollar" : "Convert to Toman"}
          </button>
          <div className="p-2 border">
            {isTomanToDollar ? "Dollar" : "Toman"}
          </div>
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            value={amount === 0 ? "" : amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Convert
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
