import Button from "../UI/Button.component";

interface ILinkButton {
  url: string;
  text: string;
  name: string;
}

const LinkButton = ({ url, text, name }: ILinkButton): JSX.Element => (
  <a rel="noopener noreferrer" target="_blank" aria-label={name} href={url}>
    <Button text={text} />
  </a>
);

export default LinkButton;
