function DownIcon({ up, ...props }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
      style={{ ...props.style, transform: `scale(1, ${up ? -1 : 1})` }}
    >
      <path d="M14.83 16.42L24 25.59l9.17-9.17L36 19.25l-12 12-12-12z" />
    </svg>
  );
}

export default DownIcon;
