import PropTypes from 'prop-types';

import * as SC from './Exchange.Styled';

export const Exchange = ({
  currencyOptions,
  selectedCurrency,
  onChange,
  amount,
  onValueChange,
  type,
  // handleInputChange,
}) => {
  return (
    <>
      <SC.ExchangeSection>
        <SC.ExchangeLabel>
          {type}
          <SC.ExchangeInput
            type="number"
            value={amount}
            onChange={onValueChange}
            min={0}
          />
        </SC.ExchangeLabel>
        <SC.ExchangeSelect
          value={selectedCurrency}
          onChange={evt => onChange(evt.target.value)}
        >
          {currencyOptions.map(currency => (
            <SC.ExchangeOptions key={currency} value={currency}>
              {currency}
            </SC.ExchangeOptions>
          ))}
        </SC.ExchangeSelect>
      </SC.ExchangeSection>
      {/* <input
        type="text"
        onChange={evt => handleInputChange(evt.target.value)}
      /> */}
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
