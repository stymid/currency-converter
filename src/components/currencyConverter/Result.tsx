import React from "react";
import useCurrency from "../../hooks/useCurrency";

interface Props {
  amount: number;
  isTomanToDollar: boolean;
}

const Result = ({ amount, isTomanToDollar }: Props) => {
  const { data, error, isLoading } = useCurrency();

  if (isLoading) {
    return (
      <div className="container text-center mt-3">
        <h2>Loading...</h2>
      </div>
    );
  }

  // Determine the conversion rate. If there's an error fetching the rate from the API,
  // use a default value of 60000. Otherwise, parse the fetched value.
  const conversionRate = error
    ? 60000
    : parseFloat(data?.usd_sell.value ?? "60000");

  // Calculate the conversion result based on the direction of conversion.
  // If converting from Toman to Dollar, divide the amount by the conversion rate.
  // If converting from Dollar to Toman, multiply the amount by the conversion rate.
  const result = isTomanToDollar
    ? amount / conversionRate
    : amount * conversionRate;

  return (
    <div className="container text-center mt-3">
      <h2>Result: {isTomanToDollar ? result + "$" : result + "﷼"}</h2>
    </div>
  );
};

export default Result;
