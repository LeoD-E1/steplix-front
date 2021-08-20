import { useEffect } from "react";
import { useDispatch } from "react-redux";

//importing querys
import { queryGetRates } from "./querys/getRates";
import { queryGetCurrencies } from "./querys/getCurrencies";

// importing Components and screens
import Currencies from "./screens/Currencies";
import Rates from "./screens/Rates";
import DetailRate from "./screens/DetailRate";
import NavigationBar from "./components/NavigationBar";
import HomeScreen from "./screens/HomeScreen";
import Chart from "./components/reciclable/Chart";

import { setCurrencies } from "./store/currencySlice";
import { setRates } from "./store/rateSlice";

import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();

  const fetchCurrencies = async () => {
    try {
      const data = await queryGetCurrencies();
      console.log(data);
      data && dispatch(setCurrencies(data.currencies));
    } catch (error) {
      console.error(error);
    }
  };

  const fetchRates = async () => {
    try {
      const data = await queryGetRates();
      data && dispatch(setRates(data.rates));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCurrencies();
    fetchRates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <NavigationBar />
          <Switch>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/currencies" component={Currencies} exact />
            <Route path="/rates" component={Rates} exact />
            <Route path="/rates/:symbol" component={DetailRate} exact />
            <Route path="/rates/:symbol/chart" component={Chart} exact />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
