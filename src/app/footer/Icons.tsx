const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l9 6 9-6M3 6v12h18V6" />
    </svg>
  );
  
  const MapPinIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21C12 21 4 13.5 4 9a8 8 0 1116 0c0 4.5-8 12-8 12z" />
    </svg>
  );
  
  const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24">
      <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zM12 8a4 4 0 110 8 4 4 0 010-8zm5-1a1 1 0 110 2 1 1 0 010-2z" />
    </svg>
  );
  
  const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24">
      <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37 8.6 8.6 0 01-2.73 1.04 4.3 4.3 0 00-7.4 3.92A12.2 12.2 0 013 4.89a4.3 4.3 0 001.33 5.74 4.25 4.25 0 01-1.94-.54v.05a4.3 4.3 0 003.45 4.21 4.3 4.3 0 01-1.93.07 4.3 4.3 0 004.01 2.98A8.6 8.6 0 012 19.54a12.2 12.2 0 006.6 1.94c7.92 0 12.25-6.56 12.25-12.25 0-.19-.01-.39-.02-.58A8.78 8.78 0 0024 5.5a8.59 8.59 0 01-2.54.7A4.3 4.3 0 0022.46 6z" />
    </svg>
  );
  
  const TiktokIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className={className}>
    <path d="M12.83 2.001h3.171a4.05 4.05 0 0 0 3.999 4v3.033a7.04 7.04 0 0 1-3.965-1.245v6.679c0 3.09-2.41 5.556-5.465 5.556s-5.573-2.466-5.573-5.556c0-3.091 2.464-5.556 5.519-5.556.21 0 .418.013.623.037v3.033a2.463 2.463 0 0 0-.623-.081c-1.376 0-2.486 1.147-2.486 2.567s1.11 2.566 2.486 2.566c1.31 0 2.377-1.024 2.481-2.323l.004-.243V2.001z" />
  </svg>
);
  
  export {
    MailIcon,
    MapPinIcon,
    InstagramIcon,
    TwitterIcon,
    TiktokIcon,
  };
  