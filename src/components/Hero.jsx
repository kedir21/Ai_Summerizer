// import {logo} from '../assets'
import logo from '../assets/contract.png'

const Hero = () => {
  return (
   <header className='w-full flex justify-center items-center flex-col'>
    <nav className='flex justify-between items-center w-full mb-10 pt-3'>
      <img src={logo} alt="logo" className='w-11 object-contain'/>
      <h1 className='blue_gradient text-lg'>Summerizer</h1> 
      <button
      type="button"
      onClick={()=>window.open('https://github.com/kedir21')}
      className='black_btn'
      >
        Github
      </button>
    </nav>
    <h1 className='head_text'>
      Summarize Articles with <br className='max-md:hidden'/>
      <span className='blue_gradient'>OpenAI GPT-4</span>
    </h1>
    <h2 className='desc'>
      Simplify your reading with Summize, an open-source article summarizer that transform lengthy articles into clear and concise summaries
    </h2>

   </header>
  )
}

export default Hero