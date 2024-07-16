import './sidebar.css';

export default function Sidebar() {
 
    return (
        <div className="sidebar">
             <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT US</span>
                <img className="sidebarImg" src="https://img.freepik.com/free-vector/social-media-network_74855-4575.jpg" alt=""/>
                <p>We, at Writer's blog, aim to create a user-friendly, interactive and valuable platform for sharing knowledge and experiences, fostering a community of readers and writers, and ensuring the accuracy and quality of the content while promoting a safe and respectful environment for all participants and to promote diversity, inclusivity and let all kinds of people share their thoughts, views and experiences.</p>
             </div>
             <div>
                <div className="sidebarItem">
                  <span className="sidebarTitle">CATEGORIES</span>
                  <ul className="sidebarList">
                    <li className="sidebarListItem">Music</li><li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Coding</li><li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Lessons</li><li className="sidebarListItem">Cooking</li>
                  </ul>
                </div>
                <div className="sidebarItem">
                  <span className="sidebarTitle">FOLLOW US</span>
                  <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook"></i><i className="sidebarIcon fa-brands fa-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-pinterest"></i><i className="sidebarIcon fa-brands fa-instagram"></i>
                  </div>
                </div>
             </div>
        </div>
    )
}