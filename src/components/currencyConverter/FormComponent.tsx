import React, { useState } from "react";

interface FormComponentProps {
  onConvert: (amount: number, isRialToDollar: boolean) => void;
}

const FormComponent: React.FC<FormComponentProps> = ({ onConvert }) => {
  const [amount, setAmount] = useState<number>(0);
  const [isRialToDollar, setIsRialToDollar] = useState<boolean>(true);

  const handleToggle = () => {
    setIsRialToDollar(!isRialToDollar);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConvert(amount, isRialToDollar);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="text-center">
        <div className="d-flex justify-content-center mb-3">
          <div className="p-2 border">{isRialToDollar ? "Rial" : "Dollar"}</div>
          <button
            type="button"
            className="btn btn-secondary mx-2"
            onClick={handleToggle}
          >
            {isRialToDollar ? "Convert to Dollar" : "Convert to Rial"}
          </button>
          <div className="p-2 border">{isRialToDollar ? "Dollar" : "Rial"}</div>
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
