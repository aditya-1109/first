import { FaArrowLeft, FaRegHandPointer } from "react-icons/fa";
import "./wallet.css";
import { useNavigate } from "react-router-dom";

const Wallet=()=>{

    const nevigate= useNavigate();

    const back=()=>{
        nevigate("/home")
    }

    return(
        <>
        <div className="wallet-container">
            <div className="backHome">
                <FaArrowLeft onClick={back} size={20} />
                <h2>My Wallet</h2>
            </div>
            
            <div className="wallet-amount"><div>0 ₹</div></div>
            <div onClick={()=>nevigate("/addFunds")} className="addFunds">
                <p>Add Funds</p>
                <FaRegHandPointer className="wallet-logo logo" size={30} />
            </div>
            <div onClick={()=>nevigate("/withdrawal")} className="addFunds">
                <p>Withdraw Funds</p>
                <FaRegHandPointer className="wallet-logo logo" size={30} />
            </div>
            <div onClick={()=>nevigate("/played")} className="addFunds">
                <p>Bid Hisory</p>
                <FaRegHandPointer className="wallet-logo logo" size={30} />
            </div>
            <div onClick={()=>nevigate("/played")}  className="addFunds">
                <p>Winning History</p>
                <FaRegHandPointer className="wallet-logo logo" size={30} />
            </div>
            <div onClick={()=>nevigate("/played")} className="addFunds">
                <p>Transaction History</p>
                <FaRegHandPointer className="wallet-logo logo" size={30} />
            </div>
        </div>
        </>
    )
}

export default Wallet;