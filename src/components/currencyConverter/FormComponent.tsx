interface Props {
  isTomanToDollar: boolean;
  amount: number;
  onAmount: (amount: number) => void;
  onIsTomanToDollar: (isTomanToDollar: boolean) => void;
}

const FormComponent = ({
  onAmount,
  onIsTomanToDollar,
  isTomanToDollar,
  amount,
}: Props) => {
  const handleToggle = () => {
    onIsTomanToDollar(!isTomanToDollar);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAmount(amount);
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
            onChange={(e) => onAmount(parseFloat(e.target.value))}
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
