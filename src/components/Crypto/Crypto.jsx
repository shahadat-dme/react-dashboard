import React from 'react'
import './Crypto.css'
import { FiSearch } from 'react-icons/fi';
import { MdOutlineNotifications } from 'react-icons/md';
import { AiOutlineDownload } from 'react-icons/ai';
import { BsArrowUpCircle } from 'react-icons/bs';

// import { BiBitcoin } from 'react-icons/bi';
// import { FaEthereum } from 'react-icons/fa';
// import { SiLitecoin } from 'react-icons/si';
// import { SiBinance } from 'react-icons/si';

const Crypto = () => {
    return (
        <div className='container'>
            <div className='profile'>
                <span id='profile-name'>Shahadat Hossain</span>
                <small>Increase your profit</small>
            </div>

            <div className='icon'>
                <a id='search'><FiSearch /></a>
                <span><MdOutlineNotifications /></span>
            </div>

            <div className='card'>
                <h5>My portfolio</h5>
                <h2>$40,010.00</h2>
                <div className='icon-card'>
                    <button id='btn-download'><AiOutlineDownload id='download' style={{}} />Download</button>
                    <button><BsArrowUpCircle id='withdraw' />Withdraw</button>
                    {/* <BsArrowUpCircle id='withdraw' />Withdraw */}
                </div>
            </div>

            <div className='favorite'>
                <div>
                    <h4>Favorite</h4>
                    <p>See All</p>
                </div>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>

        </div>
    )
}

export default Crypto