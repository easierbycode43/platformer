const dev = process.env.NODE_ENV === 'development';
const base = dev ? '' : '/platformer';


export default base;