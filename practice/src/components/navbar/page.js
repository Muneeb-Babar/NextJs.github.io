import Image from "next/image";

const Navbar = () => {
return (
    <div>
    <div className="main">
    <div>
        <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/vercel.svg"
        alt="Next.js Logo"
        width={100}
        height={100}
        priority
        />
    </div>
    <div className="nav-btn">
        <ul style={{display:'flex',gap:'30px', cursor:'pointer', fontSize:'1.2rem'}}>
            <li>Home</li>
            <li>Gallery</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <img width={50} src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png"/>
        </ul>
    </div>
    <div className="hide"><img width={30}  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"/></div>
    </div>
    </div>
)
}

export default Navbar
