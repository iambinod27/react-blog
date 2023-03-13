import { Footer } from "flowbite-react";

export const Footers = () => {
  return (
    <Footer container={true} className="shadow-none border-t">
      <Footer.Copyright href="#" by="Blogosphere™" year={2023} />
      <Footer.LinkGroup>
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
};
