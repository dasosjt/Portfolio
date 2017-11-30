import React from 'react'
import ReactDOM from 'react-dom'
import { Music, Plus, Shuffle, SkipBack, SkipForward, Repeat, PauseCircle, Search, DownloadCloud, Layers, Box } from 'react-feather'
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <div className="root">
      <div className="bg" />
      <div className="top-container">
        <NavBar />
        <MainView />
      </div>
    </div>
  </BrowserRouter>
)

const MainView = () => (
  <div className="main-view-container">
    <Route exact path="/" component={ InitPage } />
    <Route path="/projects" component={ BrowsePage } />
    <Route exact path="/settings/account" component={ AcountPage } />
  </div>
)

const BrowsePage = ({ match }) => (
  <section>
    <nav className="contentMenu">
      <ul className="contentMenuCenter">
        <ContentMenuItem
          href={ "/projects/web" }
          text={ "WEB" }/>
        <ContentMenuItem
          href={ "/projects/sistos" }
          text={ "Sistemas Operativos" }/>
        <ContentMenuItem
          href={ "/projects/help" }
          text={ "Haceme El Paro" }/>
      </ul>
    </nav>
    <div>
      <div>
        <section>
          <Route exact path={ `${match.url}/web` } component={ WebPage } />
          <Route exact path={ `${match.url}/sistos` } component={ SistosPage } />
          <Route exact path={ `${match.url}/help` } component={ HelpPage } />
        </section>
      </div>
    </div>
  </section>
)

const MediaObject = ({ text, href, src }) => (
  <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-2">
    <div className="media-object">
      <div className="media-object-hoverable">
        <div className="react-contextmenu-wrapper">
          <a className="cover-art shadow actionable" href={ href }>
            <div>
              <div className="icon">
                <Box size={ 5 }/>
              </div>
              <div className="cover-art-image cover-art-image-loaded" style={{ backgroundImage: `url(${src})` }}/>
            </div>
          </a>
        </div>
        <div className="mo-info">
          <div className="react-contextmenu-wrapper">
            <a className="mo-info-name" title={ text } href={ href }>
              { text }
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const WebPage = () => (
  <div>
    <div>
      <section>
        <div className="contentSpacing">
          <BrowserGrid title={ "Web" } list={ Web } />
        </div>
      </section>
    </div>
  </div>
)

const HelpPage = () => (
  <div>
    <div>
      <section>
        <div className="contentSpacing">
          <BrowserGrid title={ "Haceme El Paro" } list={ Help } />
        </div>
      </section>
    </div>
  </div>
)

const SistosPage = () => (
  <div>
    <div>
      <section>
        <div className="contentSpacing">
          <BrowserGrid title={ "Sistemas Operativos" } list={ Sistos } />
        </div>
      </section>
    </div>
  </div>
)

const Web = [
  {text: "React Spotify", href: "https://github.com/dasosjt/SpotifyReact", src: "https://lh3.googleusercontent.com/UrY7BAZ-XfXGpfkeWg0zCCeo-7ras4DCoRalC_WXXWTK9q5b0Iw7B0YQMsVxZaNB7DM=w300"},
  {text: "React ESLint", href: "https://github.com/dasosjt/ReactLinterExample", src: "http://artemdemo.me/blog/wp-content/uploads/2016/09/eslint-1.png"},
  {text: "Redux Counter", href: "https://github.com/dasosjt/ReduxCounterExample", src: "https://equimper.gallerycdn.vsassets.io/extensions/equimper/react-native-react-redux/1.4.1/1506881814014/Microsoft.VisualStudio.Services.Icons.Default"},
  {text: "React Labyrinth", href: "https://github.com/dasosjt/labyrinthGameReact", src: "https://n6-img-fp.akamaized.net/free-vector/seamless-monochrome-labyrinth-pattern_3119-377.jpg?size=338&ext=jpg"}
]

const Sistos = [
  {text: "Chat Sockets Server", href: "https://github.com/dasosjt/SocketChatServer", src: "http://www.programwitherik.com/content/images/2015/04/German_socket_outlet_sm_281125_p_111104-1.jpg"},
  {text: "Threads", href: "https://github.com/dasosjt/openMP", src: "https://3.imimg.com/data3/RP/JS/MY-3299813/coats-threads-500x500.jpg"},
]

const Help = [
  {text: "Haceme El Paro", href: "https://github.com/dasosjt/HacemeElParo", src: "https://github.com/dasosjt/HacemeElParo/blob/master/assets/icons/app-icon.png?raw=true"},
]

const BrowserGrid = ({ title, list }) => (
  <section>
    <h1 className="browserGridTitle">
      {title}
    </h1>
    <div className="container-fluid container-fluid--noSpaceAround">
      <div className="browserGrid">
        {
          typeof list !== 'undefined' ? 
          list.map((element, index) => (
            <MediaObject
              text={ element.text }
              href={ element.href }
              src={ element.src }
              key={ index } />    
          ))
          :
          ( null )
        }
      </div>
    </div>
  </section>
)

class SearchPage extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      input: ""
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({input: event.target.value});
  }

  render(){
    return (
      <section>
        <div>
          <div className="inputBox">
            <div className="contentSpacing">
              <h4 className="inputBox-label"> 
                Search for an Artist, Song, Album or Playlist
              </h4>
              <input 
                className="inputBox-input" 
                value={ this.state.input } 
                placeholder="Start typing... " 
                type="text" 
                onChange={ this.handleChange } />
            </div>
          </div>
        </div>
        <nav className="contentMenu">
          <ul className="contentMenuCenter">
            <ContentMenuItem
              href={ "/" }
              text={ "RECENT SEARCHES" }/>
          </ul>
        </nav>
        <div className="search-bg contentSpacing">
          <div className="search-history">
            <ul>
              <SearchItem 
                href={ "/" }
                text={ "La Catedra" }
                type={ "ALBUM" }/>
              <SearchItem 
                href={ "/" }
                text={ "Residente" }
                type={ "ARTIST" }/>
              <SearchItem 
                href={ "/" }
                text={ "The Kooks" }
                type={ "ARTIST" }/>
            </ul>
          </div>
        </div>
      </section>
    )
  }
} 

const SearchItem = ({ href, text, type }) => (
  <li>
    <Link className="link-subtle" to={ href } >
      <h1 className="ellipsis-one-line"> { text } </h1>
      <span> { type } </span>
    </Link> 
  </li>
)

const ContentMenuItem = ({ href, text }) => (
  <li className="contentMenuInline">
    <NavLink className="menuItem" to={ href } activeClassName="selected">
      { text }
      <div className="active"/>
    </NavLink>
  </li>
)

const AcountPage = () => (
  <section className="accountPage">
    <div className="accountPage-bodyContainer">
      <div className="accountPage-body">
        <div>
          <img 
            className="accountPage-image"
            src="https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/18199565_10155250321454500_8272315564343484143_n.jpg?oh=7c47f262fee449fd12bce469f6be309d&oe=5A65C861" />
          <h1 className="accountTitle" >
            Diego Sosa
          </h1>
        </div>
        <div className="button-group button-group--vertical">
          <AccountButton
            href={ "https://github.com/dasosjt" }
            text={ "GITHUB LINK" } />
          <AccountButton
            href={ "https://www.linkedin.com/in/diego-javier-sosa-torres?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BqNXqI3TKRbqox29UJhudNA%3D%3D" }
            text={ "LINKEDIN" } />
        </div>
        <div className="footerLinks">
          <a className="footerLinks__item" href="https://www.spotify.com/legal/" target="_blank">Legal</a>
          <span className="footerLinks__divider">|</span>
          <a className="footerLinks__item" href="https://www.spotify.com/legal/privacy-policy/" target="_blank">Privacy</a>
        </div>        
      </div>
    </div>
  </section>
)

const AccountButton = ({ href, text }) => (
  <div className="button-group__item" >
    <a 
      className="btn btn-black btn-small" 
      target="_blank" 
      href={ href }
      style={{minWidth: 240 + 'px'}}>
      { text }
    </a>
  </div>
)

const InitPage = () => (
  <section className="downloadPage">
    <div className="downloadPage-inner">
      <img src="./img/mac.png" />
      <h1 className="downloadTitle" >
        Welcome to my portfolio!
      </h1>
      <h2 className="downloadSubTitle" >
        Hi, My Name is Diego Sosa...
      </h2>
      <Link className="btn btn-green" to="/projects/web">
        View Projects
      </Link>
    </div>
  </section>
)

const NavBar = () => (
  <div className="nav-bar-container">
    <nav className="navBar" >
      <div className="navBar-expand">
        <ul>
          <HomeButton />
          <MainNavBar />
        </ul>
        <Interests />
      </div>
      <SessionInfo />
    </nav>
  </div>
)

const SessionInfo = () => (
  <div className="sessionInfo">
    <div className="user-widget link-subtle ellipsis-one-line">
      <Link to="/settings/account">
        <figure className="avatar user-avatar" title="Diego Sosa" /> 
        <span className="user-link">Diego Sosa</span>
      </Link>
    </div>
  </div>
)

const Interests = () => (
  <div className="recently-played navBar-group">
    <h2 className="navBar-group-header">Interests</h2>
    <ul>
      <NavBarItem 
        liClassName={ "navBar-item navBar-item--small navBar-item--with-icon recently-played__item-1" }
        aClassName={ "navBar-link link-subtle ellipsis-one-line" }
        text={ "C" }
        typeHeader={ "Language" }
        href={ "https://linux.die.net/man/" }
        normal />
      <NavBarItem 
        liClassName={ "navBar-item navBar-item--small navBar-item--with-icon recently-played__item-2" }
        aClassName={ "navBar-link link-subtle ellipsis-one-line" }
        text={ "Hacker News" }
        typeHeader={ "News Media" } 
        href={ "https://news.ycombinator.com" }
        normal />
      <NavBarItem 
        liClassName={ "navBar-item navBar-item--small navBar-item--with-icon recently-played__item-2" }
        aClassName={ "navBar-link link-subtle ellipsis-one-line" }
        text={ "Python" }
        typeHeader={ "Language" } 
        href={ "https://www.python.org/" }
        normal />
      <NavBarItem 
        liClassName={ "navBar-item navBar-item--small navBar-item--with-icon recently-played__item-2" }
        aClassName={ "navBar-link link-subtle ellipsis-one-line" }
        text={ "Arch Linux" }
        typeHeader={ "OS" } 
        href={ "https://www.archlinux.org/" }
        normal />
      <NavBarItem 
        liClassName={ "navBar-item navBar-item--small navBar-item--with-icon recently-played__item-3" }
        aClassName={ "navBar-link link-subtle ellipsis-one-line" }
        text={ "Clojure" }
        typeHeader={ "Language" } 
        href={ "https://clojure.org/" }
        normal />
      <NavBarItem 
        liClassName={ "navBar-item navBar-item--small navBar-item--with-icon recently-played__item-3" }
        aClassName={ "navBar-link link-subtle ellipsis-one-line" }
        text={ "Javascript" }
        typeHeader={ "Language" } 
        href={ "https://www.javascript.com/" }
        normal />
      <NavBarItem 
        liClassName={ "navBar-item navBar-item--small navBar-item--with-icon recently-played__item-2" }
        aClassName={ "navBar-link link-subtle ellipsis-one-line" }
        text={ "FreeBSD" }
        typeHeader={ "OS" } 
        href={ "https://www.freebsd.org/" }
        normal />
    </ul>
  </div>
)

const MainNavBar = () => (
  <div className="navBar-group">
    <NavBarItem 
      liClassName={ "navBar-item" }
      aClassName={ "link-subtle navBar-link ellipsis-one-line" }
      text={ "My Projects" }
      href={ "/projects/web" }/>
  </div>
)

const NavBarItem = ({ liClassName, aClassName, href, text, typeHeader, normal }) => (
  <li className={ liClassName }>
    {
      normal ?
      <a className={ aClassName } href={ href }>
        {text}
        { typeHeader !== undefined && typeHeader.length > 0 ? (<span className="type"> { typeHeader } </span>) : (null)}
      </a>
      :
      <Link className={ aClassName } to={ href }>
        {text}
        { typeHeader !== undefined && typeHeader.length > 0 ? (<span className="type"> { typeHeader } </span>) : (null)}
      </Link>
    }
  </li>
)

const HomeButton = () => (
  <div className="navBar-header">
    <Link className="icon link-subtle navBar-link ellipsis-one-line" to="/" title="Home">
      <Layers />
    </Link>
  </div>
)

const SearchButton = () => (
  <div className="navBar-group" >
    <li className="navBar-item navBar-item--with-icon" >
      <IconButton 
        className="link-subtle navBar-link ellipsis-one-line"
        title="Search"
        href="/search/recent"
        iconClassName="icon search-icon"
        icon={ <Search size={ 18 } /> }
        text={ "Search" } />
    </li>
  </div>
)

const IconButton = ({ href, icon, className, title, text, iconClassName }) => (
  <Link to={ href } className={ className } title={ title }>
    {text}
    <Icon icon={ icon } iconClassName={ iconClassName } />
  </Link>  
)


const Icon = ({ icon, iconClassName }) => (
  <div className={ iconClassName } >
    { icon }
  </div>
)

const CoverArt = ({ href, icon }) => (
  <Link to={ href }>
    <div className="cover-art shadow now-playing__cover-art">
      <div>
        <Icon icon={ icon } iconClassName="icon" />
        <div className="cover-art-image cover-art-image-loaded"/>
      </div>
    </div>
  </Link>
)

ReactDOM.render(
  <App />,
  document.getElementById('main')
)