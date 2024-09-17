import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Currency {
  usd_sell: {
    value: string;
    date: string;
  };
}
const useCurrency = () =>
  useQuery({
    queryKey: ["currency"],
    queryFn: () =>
      axios
        .get<Currency>(
          `https://api.navasan.tech/latest/?item=usd_sell&api_key=${process.env.REACT_APP_API_KEY}`
        )
        .then((res) => res.data),
  });
export default useCurrency;
