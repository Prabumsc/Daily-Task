import ClearIcon from '@mui/icons-material/Clear';
import StarIcon from '@mui/icons-material/Star';

function Day2() {

    const styles = {
        background="black",
        color: "white"
    }
    return (
        <div className="card">
            <div className='card11'>
                <div className='price'>

                    <p className='size'> 450<ClearIcon style={{ fontSize: "20px" }} />300</p>
                </div>

                <div className='paras'>
                    <h3 className='pass'>Fancy Product</h3>
                    <p className='lines'>$40.00 - $80.00</p>
                </div>
                <div className='btns'>

                    <button style={styles} type="button" href="/">View options</button>

                </div>
            </div>
            <div className='card11'>

                <div className='price'>

                    <p className='size'> 450<ClearIcon style={{ fontSize: "20px" }} />300</p>
                </div>
                <div className='para'>

                    <h3 className='pass'>Special Item</h3>

                    <p className='star'><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /></p>
                    <p className='line'><s>$20.00</s> $18.00</p>

                    <div className='btn'>

                        <button type="button" href="/">Add to Card</button>
                    </div>
                </div>
            </div>
            <div className='card11'>
                <div className='price'>
                    <p className='size'> 450<ClearIcon style={{ fontSize: "20px" }} />300</p>
                </div>
                <div className='paras'>
                    <h3 className='pass'>Sale Item</h3>
                    <p className='line'><s>$50.00</s> $25.00</p>
                    <div className='btns'>

                        <button type="button" href="/">Add to Card</button>
                    </div>
                </div>
            </div>
            <div className='card11'>
                <div className='price'>
                    <p className='size'> 450<ClearIcon style={{ fontSize: "20px" }} />300</p>
                </div>
                <div className='para'>
                    <h3 className='pass'>Popular Item</h3>
                    <p className='star'><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /></p>
                    <p className='line'>$40.00</p>
                    <div className='btn'>

                        <button type="button" href="/">Add to Card</button>
                    </div>
                </div>
            </div>
            <div className='card11'>
                <div className='price'>
                    <p className='size'> 450<ClearIcon style={{ fontSize: "20px" }} />300</p>
                </div>
                <div className='paras'>
                    <h3 className='pass'>Sale Item</h3>
                    <p className='lines'><s>$50.00</s> $25.00</p>
                    <div className='btns'>

                        <button type="button" href="/">Add to Card</button>
                    </div>
                </div>
            </div>
            <div className='card11'>
                <div className='price'>
                    <p className='size'> 450<ClearIcon style={{ fontSize: "20px" }} />300</p>
                </div>
                <div className='paras'>
                    <h3 className='pass'>Fancy Product</h3>
                    <p className='lines'>$120.00 - $280.00</p>
                    <div className='btns'>

                        <button type="button" href="/">View options</button>
                    </div>
                </div>
            </div>
            <div className='card11'>
                <div className='price'>
                    <p className='size'> 450<ClearIcon style={{ fontSize: "20px" }} />300</p>
                </div>
                <div className='para'>
                    <div>
                        <h3 className='pass'>Special Item</h3>
                        <p className='star'><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /></p>
                        <p className='line'><s>$20.00</s> $18.00</p>
                    </div>
                    <div className='btn'>

                        <button type="button" href="/">Add to Card</button>
                    </div>
                </div>
            </div>
            <div className='card11'>
                <div className='price'>
                    <p className='size'> 450<ClearIcon style={{ fontSize: "20px" }} />300</p>
                </div>
                <div className='para'>
                    <h3 className='pass'>papular item</h3>
                    <p className='star'><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /></p>
                    <p className='line'>$40.00</p>
                    <div className='btn'>

                        <button type="button" href="/">Add to Card</button>
                    </div>
                </div>
            </div>

        </div>
    );
}
