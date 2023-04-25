import './App.css';
import  {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';


class App extends Component{
  constructor(){
    super();
    this.state = {
      person:{
        fullName:"Marème Mboup",
        bio:"23/12/1990",
        imgSrc:"https://w7.pngwing.com/pngs/184/113/png-transparent-user-profile-computer-icons-profile-heroes-black-silhouette-thumbnail.png",
        imageAlt:'photo de profil',
        profession:"Développeuse",
        shows:false

      },
      mountedTime: 0,
      intervalId: 0 
      

    };
    this.showChange = this.showChange.bind(this)
  }
  
  setImage(){
    this.state.imageSrc = "https://w7.pngwing.com/pngs/184/113/png-transparent-user-profile-computer-icons-profile-heroes-black-silhouette-thumbnail.png"
  }
  showChange() {
    this.setState(
      (previousState) => (
        console.log("-->previousState"),
        console.log(previousState),
        {
          shows: !previousState.shows,
        }
      )
   
    );
  }
  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({mountedTime: this.state.mountedTime + 1}),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render(){
    console.log("mareme");
    const {fullName, bio, imageSrc, profession} = this.state.person;
    const { shows, mountedTime} = this.state;
      return(
        <>
          <div>
            <Button btn-lg variant="primary" onClick={this.showChange}>Show Info
            {shows ? 'Hide': 'Show'}
            </Button>
            {shows && (
              <div>
                 <img src={imageSrc} alt='ccc'/> 
                <p>FullName:{fullName}</p>
                <p>Bio:{bio}</p>
                <p>profession:{profession}</p>
                 
               
              </div>
            )}
            <p>L'intervalle de temps depuis le montage du dernier composant est {this.state.mountedTime}</p>
          </div>
        </>

      );
    
    
  }
  
  
}

export default App;
