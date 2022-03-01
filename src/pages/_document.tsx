import Document, {
  DocumentContext, Head, Html, Main, NextScript,
} from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html style={{ scrollBehavior: 'smooth' }} lang="en">
        <Head />
        {/* TODO: Scroll Smooth, Selector Color,  */}
        <body className="selection:bg-primary-navy selection:text-white scroll-bar">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
