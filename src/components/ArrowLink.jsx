import styles from "./ArrowLink.module.css";

import SvgLogo from "./SvgLogo";

function ArrowLink({ href, text, svgType }) {
  return (
    <a
      href={href}
      className={styles.arrowLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <SvgLogo svgType={svgType} />
      <span>{text}</span>
    </a>
  );
}

export default ArrowLink;
