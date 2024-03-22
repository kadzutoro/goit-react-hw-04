import { MagnifyingGlass } from 'react-loader-spinner';

const Loader = () => (
    <MagnifyingGlass
      visible={true}
      height="40"
      width="40"
      ariaLabel="hourglass-loading"
      wrapperStyle={{}}
      wrapperClass=""
      colors={['#306cce', '#72a1ed']}
    />
  );
  
  export default Loader;