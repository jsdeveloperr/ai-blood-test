import Script from 'next/script';
import Content from '../components/Content';

export default function Home() {
  return (
    <>
      <Content />
      <Script src="/js/jquery-3.7.0.min.js" strategy="beforeInteractive" />
      <Script src="/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
      <Script src="/js/jquery.magnific-popup.min.js" strategy="lazyOnload" />
      <Script src="/js/jquery.nice-select.min.js" strategy="lazyOnload" />
      <Script src="/js/slick.min.js" strategy="lazyOnload" />
      <Script src="/js/wow.min.js" strategy="lazyOnload" />
      <Script src="/js/typed.umd.js" strategy="lazyOnload" />
      <Script src="/js/plugins.js" strategy="lazyOnload" />
      <Script src="/js/main.js" strategy="lazyOnload" />
    </>
  );
}
