import PropTypes from 'prop-types';

import * as SC from './Exchange.Styled';

export const Exchange = ({
  currencyOptions,
  selectedCurrency,
  onChange,
  amount,
  onValueChange,
  type,
  handleInputChange,
}) => {
  const onHandleInputChange = evt => {
    const { value } = evt.target;
    handleInputChange(value);
  };

  const onHandleSelectChange = evt => {
    const { value } = evt.target;
    onChange(value);
  };

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
          onChange={onHandleSelectChange}
        >
          {currencyOptions.map(currency => (
            <SC.ExchangeOptions key={currency} value={currency}>
              {currency}
            </SC.ExchangeOptions>
          ))}
        </SC.ExchangeSelect>
        <SC.Input
          type="text"
          placeholder="UAH..."
          onChange={onHandleInputChange}
        />
      </SC.ExchangeSection>
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
