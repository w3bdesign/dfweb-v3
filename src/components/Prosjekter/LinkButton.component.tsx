import Link from "next/link";

import Button from "../UI/Button.component";

interface ILinkButton {
  url: string;
  text: string;
  name: string;
}

const LinkButton = ({ url, text, name }: ILinkButton): JSX.Element => (
  <Link href={url}>
    <Button text={text} />
  </Link>
);

export default LinkButton;
