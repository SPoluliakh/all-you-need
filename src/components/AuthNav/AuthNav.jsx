import * as SC from './AuthNav.styled';

const navItems = [
  { href: 'register', text: 'Register ' },
  { href: 'logIn', text: 'Login ' },
];

export const AuthNav = () => {
  return (
    <div>
      {navItems.map(({ href, text }) => (
        <SC.Link key={text} to={href}>
          {text}
        </SC.Link>
      ))}
    </div>
  );
};
