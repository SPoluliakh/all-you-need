import PropTypes from 'prop-types';
import { Header, Wrap, Text, Rate } from './CurrencyRate.styled';

export const CurrencyRate = ({ maineCurrency }) => {
  return (
    <>
      <Header>
        <Wrap>
          <Text> UAH</Text>
          <Rate>{maineCurrency[0]}</Rate>
        </Wrap>
        <Wrap>
          <Text> EUR</Text>
          <Rate>{maineCurrency[1]}</Rate>
        </Wrap>
        <Wrap>
          <Text> GBP</Text>
          <Rate>{maineCurrency[2]}</Rate>
        </Wrap>
      </Header>
    </>
  );
};

CurrencyRate.propTypes = {
  maineCurrency: PropTypes.array.isRequired,
};
