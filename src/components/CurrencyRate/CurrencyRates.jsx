import PropTypes from 'prop-types';
import * as SC from './CurrencyRate.styled';

export const CurrencyRate = ({ maineCurrency }) => {
  return (
    <>
      <SC.Header>
        <SC.Wrap>
          <SC.Text> UAH</SC.Text>
          <SC.Rate>{maineCurrency[0]}</SC.Rate>
        </SC.Wrap>
        <SC.Wrap>
          <SC.Text> EUR</SC.Text>
          <SC.Rate>{maineCurrency[1]}</SC.Rate>
        </SC.Wrap>
        <SC.Wrap>
          <SC.Text> GBP</SC.Text>
          <SC.Rate>{maineCurrency[2]}</SC.Rate>
        </SC.Wrap>
      </SC.Header>
    </>
  );
};

CurrencyRate.propTypes = {
  maineCurrency: PropTypes.array.isRequired,
};
