import Text from "../Text";
import Container from "../Container";
import s from "./TextBlock.module.css";

const TextBlock = () => {
  return (
    <Container className={s.root}>
      <Text element="p" italic disabled>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia,
        justo id tristique blandit, ligula diam rutrum lorem, non commodo risus
        eros vitae risus. Vestibulum efficitur elit tellus. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Mauris finibus purus sapien, et
        euismod sem rutrum vel. Nulla id cursus ante. Suspendisse dictum rutrum
        tincidunt. Sed eget consectetur neque, vitae imperdiet tortor. Phasellus
        laoreet sit amet ante eget vehicula. Suspendisse a nulla in magna
        lobortis rutrum nec et ex. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Mauris non turpis sed ante
        accumsan commodo. Proin tincidunt porta bibendum. Maecenas fermentum
        turpis sit amet faucibus maximus. Nulla dictum, nisl nec mollis porta,
        nulla enim aliquet nulla, eget venenatis elit nisi congue turpis. In
        arcu odio, elementum id iaculis non, interdum non eros. Mauris in dictum
        nisl.
      </Text>
    </Container>
  );
};

export default TextBlock;
