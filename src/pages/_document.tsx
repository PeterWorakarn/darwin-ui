import Document, {
  Head, Html, Main, NextScript,
} from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html style={{ scrollBehavior: 'smooth' }} lang="en">
        <Head />
        <body className="bg-[#F7F9FE] overflow-hidden selection:bg-primary-navy selection:text-white scroll-bar font-nunito">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
