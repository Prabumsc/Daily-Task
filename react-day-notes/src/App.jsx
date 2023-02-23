import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CheckIcon from '@mui/icons-material/Check';

import { CardActions, CardContent } from "@mui/material";
// import InfoIcon from '@mui/icons-material/Info';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
import StarIcon from '@mui/icons-material/Star';
import { fontSize } from '@mui/system';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



// export default function App() {
//   const [counter, setCounter] = useState();

//   return (



//     <div className='flex-row'>


//       <div style={{ margin: "20px" }}>
//         <div className='tag'>
//           <h5 className="top">FREE</h5>
//           <h6 className="down">$0<span class="period">/month</span></h6>
//           <hr class="mt-1 mb-1" />

//           <ul class="fa-ul">
//             <span className="fa-li"><CheckIcon />  Single User</span>
//             <span className="fa-li"><CheckIcon />  5GB Storage</span>
//             <span className="fa-li"><CheckIcon />  Unlimited Public Projects</span>
//             <span className="fa-li"><CheckIcon />  Community Access</span>
//             < span className="fa-li textColor" > < ClearIcon />  Unlimited
//               Private Projects</span>


//             <span className="fa-li textColor">< ClearIcon /> Dedicated Phone Support</span>

//             <span className="fa-li textColor"><ClearIcon /> Free Subdomain</span>

//             <span className="fa-li textColor"><ClearIcon /> Monthly Status Reports</span>
//           </ul>

//           <div className="d-grid" >
//             <Button variant="contained" >Button</Button>
//           </div>

//         </div>
//       </div>
//       <div style={{ margin: "20px" }}>
//         <div className='tag'>
//           <h5 className="top">PLUS</h5>
//           <h6 className="down">$9<span className="period">/month</span></h6>
//           <hr class="mt-1 mb-1" />
//           <ul className="fa-ul">
//             <span className="fa-li"><CheckIcon />   <strong>5 Users</strong>        </span>
//             <span className="fa-li"><CheckIcon />   50GB Storage        </span>
//             <span className="fa-li"><CheckIcon />  Unlimited Public Projects         </span>
//             <span className="fa-li"><CheckIcon />  Community Access         </span>
//             <span className="fa-li"><CheckIcon />  Unlimited Private Projects           </span>
//             <span className="fa-li"><CheckIcon />   Dedicated Phone Support           </span>
//             <span className="fa-li"><CheckIcon />    Free Subdomain       </span>
//             <span className="fa-li textColor"><ClearIcon />      Monthly Status  Reports </span>

//           </ul>
//           <div className="d-grid">
//             <Button variant="contained">Button</Button>
//           </div>

//         </div>
//       </div>
//       <div style={{ margin: "20px" }}>
//         <div className='tag'>
//           <h5 className="top">PRO</h5>
//           <h6 className="down">$49<span className="period">/month</span></h6>
//           <hr class="mt-1 mb-1" />
//           <ul className="fa-ul">
//             <span className="fa-li"><CheckIcon />  <strong>Unlimited Users</strong>  </span>

//             <span className="fa-li"><CheckIcon />  150GB Storage  </span>
//             <span className="fa-li"><CheckIcon />   Unlimited Public Projects </span>
//             <span className="fa-li"><CheckIcon />   Community Access </span>
//             <span className="fa-li"><CheckIcon />   Unlimited Private Projects </span>
//             <span className="fa-li"><CheckIcon />   Dedicated Phone Support </span>
//             <span className="fa-li"><CheckIcon />   <strong>Unlimited</strong> Free Subdomains </span>

//             <span className="fa-li"><CheckIcon />  Monthly Status Reports   </span>
//           </ul>
//           <div className="d-grid">
//             <Button variant="contained">Button</Button>
//           </div>
//         </div>
//       </div>

//     </div>


//   )
// }





export default function Day2() {
  const styles = {
    background: "black",
    color: "white"
  }
  const colors = {
    color: "#a8a4a4"
  }

  return (
    <div>
      <div className="nav">

        <div className="navbar">
          <a href="#">Start Bootstrap</a>
          <a href="#home">Home</a>
          <a href="#news">About</a>
          <div className="dropdown">
            <button className="dropbtn"> Shop
              <i className="fa fa-caret-down"><ArrowDropDownIcon /></i>
            </button>
            <div className="dropdown-content">
              <a href="#">All Products</a>
              <a href="#">Popular Item</a>
              <a href="#">New Arrivales</a>
            </div>
          </div>
        </div>




      </div>
      <div className='content1'>
        <div className='content'>
          <p > <span style={{ fontSize: "60px", fontFamily: "sans-serif" }}>Shop in style</span></p>
          <p style={colors}> With this shop homepage template </p>
        </div>

      </div>

      <div className="card">

        <div className='card11'>


          <div className='price'>
            <p className='size'> 450< ClearIcon style={{ fontSize: "20px" }} />300</p>
          </div>

          <div className='paras'>
            <h3 className='pass'>Fancy Product</h3>
            <p className='lines'>$40.00 - $80.00</p>
          </div>
          <div className='btns'>

            <button type="button" href="/"  >View options</button>

          </div>
        </div>
        <div className='card11'>
          <div className='sale'>
            <button style={styles} >sale</button>
          </div>

          <div className='price1'>

            <p className='size'> 450< ClearIcon style={{ fontSize: "20px" }} />300</p>
          </div>
          <div className='para'>

            <h3 className='pass'>Special Item</h3>

            <p className='star'><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /></p>
            <p className='line'><s>$20.00</s> $18.00</p>

            <div className='btn'>

              <button type="button" href="/" >Add to Card</button>
            </div>
          </div>
        </div>
        <div className='card11'>
          <div className='sale'>
            <button style={styles} >sale</button>
          </div>
          <div className='price1'>
            <p className='size'> 450< ClearIcon style={{ fontSize: "20px" }} />300</p>
          </div>
          <div className='paras'>
            <h3 className='pass'>Sale Item</h3>
            <p className='line'><s>$50.00</s> $25.00</p>
            <div className='btns'>

              <button type="button" href="/" >Add to Card</button>
            </div>
          </div>
        </div>
        <div className='card11'>
          <div className='price'>
            <p className='size'> 450< ClearIcon style={{ fontSize: "20px" }} />300</p>
          </div>
          <div className='para'>
            <h3 className='pass'>Popular Item</h3>
            <p className='star'><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /></p>
            <p className='line'>$40.00</p>
            <div className='btn'>

              <button type="button" href="/" >Add to Card</button>
            </div>
          </div>
        </div>
        <div className='card11'>
          <div className='sale'>
            <button style={styles} >sale</button>
          </div>
          <div className='price1'>

            <p className='size'> 450< ClearIcon style={{ fontSize: "20px" }} />300</p>
          </div>
          <div className='paras'>
            <h3 className='pass'>Sale Item</h3>
            <p className='lines'><s>$50.00</s> $25.00</p>
            <div className='btns'>

              <button type="button" href="/" >Add to Card</button>
            </div>
          </div>
        </div>
        <div className='card11'>
          <div className='price'>
            <p className='size'> 450< ClearIcon style={{ fontSize: "20px" }} />300</p>
          </div>
          <div className='paras'>
            <h3 className='pass'>Fancy Product</h3>
            <p className='lines'>$120.00 - $280.00</p>
            <div className='btns'>

              <button type="button" href="/" >View options</button>
            </div>
          </div>
        </div>
        <div className='card11'>
          <div className='sale'>
            <button style={styles} >sale</button>
          </div>
          <div className='price1'>
            <p className='size'> 450< ClearIcon style={{ fontSize: "20px" }} />300</p>
          </div>
          <div className='para'>
            <div>
              <h3 className='pass'>Special Item</h3>
              <p className='star'><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /></p>
              <p className='line'><s>$20.00</s> $18.00</p>
            </div>
            <div className='btn'>

              <button type="button" href="/" >Add to Card</button>
            </div>
          </div>
        </div>
        <div className='card11'>
          <div className='price'>
            <p className='size'> 450< ClearIcon style={{ fontSize: "20px" }} />300</p>
          </div>
          <div className='para'>
            <h3 className='pass'>papular item</h3>
            <p className='star'><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /></p>
            <p className='line'>$40.00</p>
            <div className='btn'>

              <button type="button" href="/"  >Add to Card</button>
            </div>
          </div>
        </div>
      </div>
    </div >

  )
}
















