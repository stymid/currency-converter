import useCurrency from "../../hooks/useCurrency";

const CurencyConverter = () => {
  const { data, error, isLoading } = useCurrency();
  if (error) <p>unexpecter error happend</p>;
  if (isLoading)
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>;
  return <p> Dollar: {data?.usd_sell.value}</p>;
};

export default CurencyConverter;
