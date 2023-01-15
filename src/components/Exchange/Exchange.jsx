import PropTypes from 'prop-types';

import {
  ExchangeSection,
  ExchangeLabel,
  ExchangeInput,
  ExchangeSelect,
  ExchangeOptions,
} from './Exchange.Styled';

export const Exchange = ({
  currencyOptions,
  selectedCurrency,
  onChange,
  amount,
  onValueChange,
  type,
}) => {
  return (
    <>
      <ExchangeSection>
        <ExchangeLabel>
          {type}
          <ExchangeInput
            type="number"
            value={amount}
            onChange={onValueChange}
            min={0}
          />
        </ExchangeLabel>
        <ExchangeSelect
          value={selectedCurrency}
          onChange={evt => onChange(evt.target.value)}
        >
          {currencyOptions.map(currency => (
            <ExchangeOptions key={currency} value={currency}>
              {currency}
            </ExchangeOptions>
          ))}
        </ExchangeSelect>
      </ExchangeSection>
    </>
  );
};

Exchange.propTypes = {
  currencyOptions: PropTypes.array.isRequired,
  selectedCurrency: PropTypes.string,
  onChange: PropTypes.func,
  amount: PropTypes.number.isRequired,
  onValueChange: PropTypes.func,
  type: PropTypes.string.isRequired,
};
