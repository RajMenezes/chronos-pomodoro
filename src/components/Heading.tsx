import styles from './Heading.module.css';

type HeadingProps = {
  children: React.ReactNode; //string | number | bigint | boolean | React.ReactElement etc...
};

export function Heading({ children }: HeadingProps) {
  // const children = props.children;
  // =
  // const { children } = HeadingProps  Desctructuring em JS
  return <h1 className={styles.heading}>{children}</h1>;
}
