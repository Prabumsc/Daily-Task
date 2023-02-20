import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CheckIcon from '@mui/icons-material/Check';

import { CardActions, CardContent } from "@mui/material";
// import InfoIcon from '@mui/icons-material/Info';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
import StarIcon from '@mui/icons-material/Star';

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
  return (
    <div className="card">
      <div className='card11'>
        <div className='price'>
          <p className='size'> 450< ClearIcon style={{ fontSize: "20px" }} />300</p>
        </div>
        <div className='para'>
          <h3 className='pass'>Fancy Product</h3>
          <p className='line'>$<s>40.00</s>-$80.00</p>
          <div className='btn'>

            <button type="button" href="*" >View options</button>
          </div>
        </div>
      </div>
      <div className='card11'>
        <div className='price'>
          <p className='size'> 450< ClearIcon style={{ fontSize: "20px" }} />300</p>
        </div>
        <div className='para'>
          <h3 className='pass'>Special Item</h3>
          <p className='star'><StarIcon style={{ color: "orange", fontSize: "20px" }} /><StarIcon style={{ color: "orange", fontSize: "20px" }} /><StarIcon style={{ color: "orange", fontSize: "20px" }} /><StarIcon style={{ color: "orange", fontSize: "20px" }} /><StarIcon style={{ color: "orange", fontSize: "20px" }} /></p>
          <p className='line'>$40.00-$80.00</p>
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
          <h3 className='pass'>Sale Item</h3>
          <p className='line'>$40.00-$80.00</p>
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
          <h3 className='pass'>Popular Item</h3>
          <p className='star'><StarIcon style={{ color: "orange", fontSize: "20px" }} /><StarIcon style={{ color: "orange", fontSize: "20px" }} /><StarIcon style={{ color: "orange", fontSize: "20px" }} /><StarIcon style={{ color: "orange", fontSize: "20px" }} /><StarIcon style={{ color: "orange", fontSize: "20px" }} /></p>
          <p className='line'>$40.00-$80.00</p>
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
          <h3 className='pass'>Sale Item</h3>
          <p className='line'>$40.00-$80.00</p>
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
          <h3 className='pass'>Fancy Product</h3>
          <p className='line'>$40.00-$80.00</p>
          <div className='btn'>

            <button type="button" href="/" >View options</button>
          </div>
        </div>
      </div>
      <div className='card11'>
        <div className='price'>
          <p className='size'> 450< ClearIcon style={{ fontSize: "20px" }} />300</p>
        </div>
        <div className='para'>
          <h3 className='pass'>Special Item</h3>
          <p className='star'><StarIcon style={{ color: "orange", fontSize: "20px" }} /><StarIcon style={{ color: "orange", fontSize: "20px" }} /><StarIcon style={{ color: "orange", fontSize: "20px" }} /><StarIcon style={{ color: "orange", fontSize: "20px" }} /><StarIcon style={{ color: "orange", fontSize: "20px" }} /></p>
          <p className='line'>$40.00-$80.00</p>
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
          <p className='star'><StarIcon style={{ color: "orange", fontSize: "20px" }} /><StarIcon style={{ color: "orange", fontSize: "20px" }} /><StarIcon style={{ color: "orange", fontSize: "20px" }} /><StarIcon style={{ color: "orange", fontSize: "20px" }} /><StarIcon style={{ color: "orange", fontSize: "20px" }} /></p>
          <p className='line'>$40.00-$80.00</p>
          <div className='btn'>

            <button type="button" href="/" >Add to Card</button>
          </div>
        </div>
      </div>

    </div>














  )
}


