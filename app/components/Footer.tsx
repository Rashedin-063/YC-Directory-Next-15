const Footer = () => {
  return (
    <footer className='bg-slate-900 text-gray-300 py-6'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        <div className='text-sm'>&copy; 2025 All rights reserved</div>
        <div className='flex space-x-4 mt-4 md:mt-0'>
          <a href='#' className='hover:text-white'>
            Privacy Policy
          </a>
          <a href='#' className='hover:text-white'>
            Terms of Service
          </a>
          <a href='#' className='hover:text-white'>
            Contact Us
          </a>
        </div>
        <div className='mt-4 md:mt-0'>
          <a
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-white mx-2'
          >
            Twitter
          </a>
          <a
            href='https://facebook.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-white mx-2'
          >
            Facebook
          </a>
          <a
            href='https://instagram.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-white mx-2'
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
