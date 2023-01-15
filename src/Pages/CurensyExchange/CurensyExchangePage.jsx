import React, { useState, useEffect } from 'react';
import { FcCalculator, FcCurrencyExchange } from 'react-icons/fc';
import { fetch } from '../../Utils/currencyApi';
import { Exchange } from '../../components/Exchange/Exchange';
import { CurrencyRate } from '../../components/CurrencyRate/CurrencyRates';
import * as SC from './CurensyExchangePage.styled';

export const CurrencyExchangePage = () => {
  const [currencyOptions, setCurrencyOptions] = useState([]); // Responsible for avaible currency options
  const [maineCurrency, setMaineCurrency] = useState([]); // Responsible for main currency rate wich imagine in header info
  const [sellCurrency, setSellCurrency] = useState(); // Responsible for currency for sell
  const [buyCurrency, setBuyCurrency] = useState(); // Responsible for currency for buy
  const [exchangeRate, setExchangeRate] = useState(0); // Responsible for exchange rate
  const [amount, setAmount] = useState(1); // Responsible for amount manually selected
  const [isAmount, setIsAmount] = useState(true); // Responsible for toggle sell or buy amount selected mannualy

  let amountToSell;
  let amountToBuy;
  // Responsible for sell amount and buy amount
  if (isAmount) {
    amountToSell = amount;
    amountToBuy = Number((amount * exchangeRate).toFixed(2));
  } else {
    amountToBuy = amount;
    amountToSell = Number((amount / exchangeRate).toFixed(2));
  }
  // Responsible for getting exchange rates and filling the default values
  useEffect(() => {
    try {
      fetch().then(data => {
        const options = Object.keys(data.rates);
        setCurrencyOptions([...options]);
        setMaineCurrency([
          data.rates.UAH.toFixed(2),
          data.rates.EUR.toFixed(2),
          data.rates.GBP.toFixed(2),
        ]);
        setSellCurrency(data.base);
        setBuyCurrency(options[147]);
        setExchangeRate(data.rates[options[options.length - 1]]);
      });
    } catch (err) {
      console.log(err.message);
    }
  }, []);
  // Responsible for getting manually selected currency rates
  useEffect(() => {
    if (sellCurrency !== undefined && buyCurrency !== undefined) {
      try {
        fetch(`https://cdn.cur.su/api/nbu.json`).then(data => {
          let sell = data.rates[sellCurrency];
          let buy = data.rates[buyCurrency];
          setExchangeRate(buy / sell);
        });
      } catch (err) {
        console.log(err.message);
      }
    }
  }, [sellCurrency, buyCurrency]);
  // Responsible for amount to sell selected manually
  const toSellHandleChange = evt => {
    const sum = Number(evt.target.value);
    setAmount(sum);
    setIsAmount(true);
  };
  // Responsible for amount to buy selected manually
  const toBuyHandleChange = evt => {
    const sum = Number(evt.target.value);
    setAmount(sum);
    setIsAmount(false);
  };

  // const handleInputChange = name => {
  //   const value = name.toLowerCase();
  //   const queres = currencyOptions.find(query => query.toLowerCase() === value);
  //   console.log(queres);
  //   if (queres) {
  //     setCurrencyOptions([queres]);
  //   } else {
  //     setCurrencyOptions([...currencyOptions]);
  //   }
  // };

  return (
    <SC.Wrap>
      <SC.MainText>
        Currency converter
        <FcCurrencyExchange size="32" />
      </SC.MainText>
      <CurrencyRate maineCurrency={maineCurrency} />
      <Exchange
        currencyOptions={currencyOptions}
        selectedCurrency={sellCurrency}
        onChange={setSellCurrency} // Responsible for currency to sell selected manually
        amount={amountToSell}
        onValueChange={toSellHandleChange}
        type={'Sell: '}
        // handleInputChange={handleInputChange}
      />
      <SC.Equal>
        <FcCalculator size="42" />
      </SC.Equal>
      <Exchange
        currencyOptions={currencyOptions}
        selectedCurrency={buyCurrency}
        onChange={setBuyCurrency} // Responsible for currency to buy selected manually
        amount={amountToBuy}
        onValueChange={toBuyHandleChange}
        type={'Buy: '}
        // handleInputChange={handleInputChange}
      />
    </SC.Wrap>
  );
};
