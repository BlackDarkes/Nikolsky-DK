import { Container } from "@/shared/ui";
import { FooterSecure } from "./ui/secure/FooterSecure";
import {
  FOOTER_ITEMS_SECURE,
  FOOTER_ITEMS_SOCIAL,
} from "@/constants/footer-items";
import { FooterBlock } from "./ui/block/FooterBlock";

export const Footer = () => {
  return (
    <footer>
      <Container className="flex flex-col">
        <FooterBlock
          socialItems={FOOTER_ITEMS_SOCIAL}
          secureItems={FOOTER_ITEMS_SECURE}
        />
        <FooterSecure />
      </Container>
    </footer>
  );
};
