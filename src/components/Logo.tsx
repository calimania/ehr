import SanarLogo from '../assets/sanar-logo-160x160.png';

export interface LogoProps {
  children?: React.ReactNode;
  size?: number;
  maxWidth?: number;
  title?: string;
}

/**
 * Logo component - renders the Calima Sanar logo
 * TODO: Customize logo using .env or remote configuration from an endpoint
 *
 * @param props - {LogoProps} - size? children?
 * @returns Logo component
 */
export default function Logo(props: LogoProps): JSX.Element {
  const { title, size, maxWidth } = props;

  return (
    <img src={SanarLogo} width={size || 32} style={{
      maxWidth: maxWidth || '180px',
    }}
      alt='Calima Sanar logo'
      title={title || 'Calima Sanar logo'}
    />
  );
}
