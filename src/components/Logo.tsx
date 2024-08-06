const Logo = (props: { size: number; }): JSX.Element => {
  return (
    <img src="/static/img/calima-logo-64x64.png" width={props.size || 32} title="Calima EHR - Sanar que Ranas" />
  );
};

export default Logo;

