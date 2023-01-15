import * as SC from './Home.styled';

export const Home = () => {
  return (
    <SC.Wrap>
      <SC.HomeTitle>Your personal helper 💁‍♀️</SC.HomeTitle>
      <SC.Text>
        Hello, this is your personal helper.It is designed to help you to get
        nessesary infomation such as weather or currency rates in one web api.
        For automatical providing weather for your region, just enable
        geolocation.
      </SC.Text>
    </SC.Wrap>
  );
};
