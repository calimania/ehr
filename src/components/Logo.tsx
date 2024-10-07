import SanarLogo from '../assets/sanar-logo-160x160.png';

export interface LogoProps {
  children?: React.ReactNode;
  size?: number;
}

/**
 * Logo component - renders the Calima Sanar logo
 * TODO: Customize logo using .env or remote configuration from an endpoint
 *
 * @param props - {LogoProps} - size? children?
 * @returns Logo component
 */
export default function Logo(props: LogoProps): JSX.Element {

  return (
    <img src={SanarLogo} width={props.size || 32} style={{
      maxWidth: '180px',
    }}
      alt='Calima Sanar logo'
      title='Calima Sanar logo'
    />
  );
}
