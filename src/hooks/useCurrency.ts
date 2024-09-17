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
          "https://api.navasan.tech/latest/?item=usd_sell&api_key=free4RLDMk84z7yFwGLUdc8zAyxw72OS"
        )
        .then((res) => res.data),
  });
export default useCurrency;
