import {useEffect} from 'react';
import {AiOutlineArrowUp} from 'react-icons/ai';

function BackToTop(){
    useEffect(() => {
        const scrollButton = document.getElementById('scroll-button');
    
        // Function to toggle the button's visibility based on scroll position
        const showButton = () => {
          if (window.scrollY > 300) {
            scrollButton.style.display = 'block';
          } else {
            scrollButton.style.display = 'none';
          }
        };
    
        // Add a scroll event listener to track the scroll position
        window.addEventListener('scroll', showButton);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('scroll', showButton);
        };
      }, []);
    
      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    
      return (
        
          <button
            id="scroll-button"
            onClick={scrollToTop}
            className="px-4 py-2 border rounded-full bg-gradient-to-r from-[#0646A7] to-[#3A62AE] text-white"
            style={{
              display: 'none', // Initially hide the button
              position: 'fixed',
              bottom: '2rem',
              right: '2rem',
              zIndex: 999, // Ensures it appears above other content
            }}
          >
            <AiOutlineArrowUp />
          </button>
        
      );
    }

export default BackToTop;