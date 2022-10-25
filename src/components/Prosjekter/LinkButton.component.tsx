import Link from "next/link";

import Button from "../UI/Button.component";

interface ILinkButton {
  url: string;
  text: string;
}

const LinkButton = ({ url, text }: ILinkButton): JSX.Element => (
  <Link href={url}>
    <Button text={text} />
  </Link>
);

export default LinkButton;
