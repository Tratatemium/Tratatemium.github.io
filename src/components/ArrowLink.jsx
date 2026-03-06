import styles from "./ArrowLink.module.css";

import SvgLogo from "./SvgLogo";

function ArrowLink({ href, text, svgType }) {
  return (
    <a href={href} class={styles.arrowLink} target="_blank">
      <SvgLogo svgType={svgType}/>
      <span>{text}</span>
    </a>
  );
}

export default ArrowLink;
